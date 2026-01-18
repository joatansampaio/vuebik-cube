import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import type { FaceMove, RubikGame, Cubie, TurnJob, DragState } from "./utils.js";
import { roundCoord, coordKey, makeCubieMaterials, FACE_TO_TURN } from "./utils.js";

const xSpacing = 1.01;
const ySpacing = 1.01;
const zSpacing = 1.01;
const maxZoomOut = 40;
const maxZoomIn = 5;
/**
 * Minimal quaternion-based orbit controls.
 */
function createMiniOrbit(camera: THREE.PerspectiveCamera, dom: HTMLElement) {
	const state = {
		isDown: false,
		lastX: 0,
		lastY: 0,
		// Quaternion representing camera's orbital orientation around target
		orientation: new THREE.Quaternion(),
		radius: 12,
		target: new THREE.Vector3(0, 0, 0), // Always look at cube center
	};

	// Initialize with a nice viewing angle
	const initFromSpherical = (theta: number, phi: number) => {
		const qY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), theta);
		const tilt = phi - Math.PI / 2;
		const qX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), tilt);
		state.orientation.copy(qY).multiply(qX);
	};

	initFromSpherical(Math.PI * 0.25, Math.PI * 0.39);

	const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

	/**
	 * Update camera position and orientation from quaternion state.
	 * The camera is positioned at: target + orientation * (0, 0, radius)
	 * and rotated to match the orientation quaternion directly.
	 * This avoids 'lookAt' flipping issues at the poles.
	 */
	const update = () => {
		// Position camera directly at radius distance from target (centered)
		const offset = new THREE.Vector3(0, 0, state.radius);
		offset.applyQuaternion(state.orientation);

		camera.position.copy(state.target).add(offset);
		camera.quaternion.copy(state.orientation);

		// Normalize quaternion periodically to prevent numerical drift
		state.orientation.normalize();
	};
	const onDown = (e: PointerEvent) => {
		if (e.pointerType === 'touch') {
			// Track touch points. If two or more are present, start touch orbit.
			touchMap.set(e.pointerId, { x: e.clientX, y: e.clientY });
			if (touchMap.size >= 2) {
				isTouchOrbit = true;
				// center between first two touches
				const pts = Array.from(touchMap.values());
				if (pts.length >= 2 && pts[0] && pts[1]) {
					state.lastX = (pts[0].x + pts[1].x) / 2;
					state.lastY = (pts[0].y + pts[1].y) / 2;
					lastTouchDistance = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
				}
				(dom as any).setPointerCapture?.(e.pointerId);
			}
			return;
		}

		// Only right mouse button should orbit.
		if (e.button !== 2) return;
		state.isDown = true;
		state.lastX = e.clientX;
		state.lastY = e.clientY;
		(dom as any).setPointerCapture?.(e.pointerId);
	};

	// Track touch pointers for multi-touch orbit and pinch zoom
	const touchMap = new Map<number, { x: number; y: number }>();
	let isTouchOrbit = false;
	let lastTouchDistance = 0;

	const onMove = (e: PointerEvent) => {
		if (e.pointerType === 'touch') {
			if (!touchMap.has(e.pointerId)) return;
			touchMap.set(e.pointerId, { x: e.clientX, y: e.clientY });
			if (!isTouchOrbit) return;

			const pts = Array.from(touchMap.values());
			if (pts.length < 2 || !pts[0] || !pts[1]) return;

			const centerX = (pts[0].x + pts[1].x) / 2;
			const centerY = (pts[0].y + pts[1].y) / 2;
			const dx = centerX - state.lastX;
			const dy = centerY - state.lastY;
			state.lastX = centerX;
			state.lastY = centerY;

			// Rotation sensitivity
			const sensitivity = 0.008;

			// Calculate "up" vector to detect if we are upside down
			const up = new THREE.Vector3(0, 1, 0).applyQuaternion(state.orientation);
			const isUpsideDown = up.y < 0;

			// Horizontal rotation (Yaw): rotate around WORLD Y axis
			const deltaYaw = (isUpsideDown ? 1 : -1) * dx * sensitivity;
			const qYaw = new THREE.Quaternion().setFromAxisAngle(
				new THREE.Vector3(0, 1, 0),
				deltaYaw
			);

			// Vertical rotation (Pitch): rotate around camera's LOCAL X axis
			const deltaPitch = -dy * sensitivity;
			const qPitch = new THREE.Quaternion().setFromAxisAngle(
				new THREE.Vector3(1, 0, 0), 
				deltaPitch
			);

			// Apply pitch locally (multiply) and yaw globally (premultiply)
			state.orientation.multiply(qPitch);
			state.orientation.premultiply(qYaw);

			// Pinch zoom: adjust radius by change in touch distance
			if (pts[0] && pts[1]) {
				const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
				const deltaDist = dist - lastTouchDistance;
				lastTouchDistance = dist;
				state.radius = clamp(state.radius - deltaDist * 0.02, maxZoomIn, maxZoomOut);
			}

			update();
			return;
		}

		if (!state.isDown) return;
		const dx = e.clientX - state.lastX;
		const dy = e.clientY - state.lastY;
		state.lastX = e.clientX;
		state.lastY = e.clientY;

		// Rotation sensitivity
		const sensitivity = 0.008;

		// Calculate "up" vector to detect if we are upside down
		// If the camera vertical axis is pointing down dot(up, world_up) < 0,
		// we need to invert the horizontal rotation to maintain screen-space intuition.
		const up = new THREE.Vector3(0, 1, 0).applyQuaternion(state.orientation);
		const isUpsideDown = up.y < 0;

		// Horizontal rotation (Yaw): rotate around WORLD Y axis
		const deltaYaw = (isUpsideDown ? 1 : -1) * dx * sensitivity;
		const qYaw = new THREE.Quaternion().setFromAxisAngle(
			new THREE.Vector3(0, 1, 0),
			deltaYaw
		);

		// Vertical rotation (Pitch): rotate around camera's LOCAL X axis
		// Dragging down (dy > 0) should move camera UP, so we decrease pitch angle.
		const deltaPitch = -dy * sensitivity;
		const qPitch = new THREE.Quaternion().setFromAxisAngle(
			new THREE.Vector3(1, 0, 0), 
			deltaPitch
		);

		// Apply pitch locally (multiply) and yaw globally (premultiply)
		state.orientation.multiply(qPitch);
		state.orientation.premultiply(qYaw);

		update();
	};

	const onUp = (e: PointerEvent) => {
		if (e.pointerType === 'touch') {
			touchMap.delete(e.pointerId);
			if (touchMap.size < 2) {
				isTouchOrbit = false;
				lastTouchDistance = 0;
			}
			return;
		}
		if (e.button !== 2) return;
		state.isDown = false;
	};

	const onContextMenu = (e: Event) => {
		e.preventDefault(); // Prevent context menu on right click
	};

	const onWheel = (e: WheelEvent) => {
		e.preventDefault();
		const delta = Math.sign(e.deltaY);
		// Allow a slightly larger max radius for more zoom-out range
		state.radius = clamp(state.radius + delta * 0.6, maxZoomIn, maxZoomOut);
		update();
	};

	dom.addEventListener("pointerdown", onDown, { passive: true });
	dom.addEventListener("pointermove", onMove, { passive: true });
	dom.addEventListener("pointerup", onUp, { passive: true });
	dom.addEventListener("pointercancel", onUp, { passive: true });
	dom.addEventListener("wheel", onWheel, { passive: false });
	dom.addEventListener("contextmenu", onContextMenu);

	// Orbit via arrow keys
	const keys = {
		up: false,
		down: false,
		left: false,
		right: false,
	};

	const onKeyDown = (e: KeyboardEvent) => {
		if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
			e.preventDefault();
			if (e.key === "ArrowUp") keys.up = true;
			if (e.key === "ArrowDown") keys.down = true;
			if (e.key === "ArrowLeft") keys.left = true;
			if (e.key === "ArrowRight") keys.right = true;
		}
	};

	const onKeyUp = (e: KeyboardEvent) => {
		if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
			e.preventDefault();
			if (e.key === "ArrowUp") keys.up = false;
			if (e.key === "ArrowDown") keys.down = false;
			if (e.key === "ArrowLeft") keys.left = false;
			if (e.key === "ArrowRight") keys.right = false;
		}
	};

	window.addEventListener("keydown", onKeyDown, false);
	window.addEventListener("keyup", onKeyUp, false);

	update();

	const advance = (dt: number) => {
		const h = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
		const v = (keys.up ? 0 : 1) - (keys.down ? 0 : 1);
		if (h === 0 && v === 0) return;

		// Orbit speed
		const orbitSpeed = 2.8; // rad/sec

		// Detect upside-down to keep horizontal direction intuitive
		const upVec = new THREE.Vector3(0, 1, 0).applyQuaternion(state.orientation);
		const isUpsideDown = upVec.y < 0;

		const deltaYaw = (isUpsideDown ? 1 : -1) * h * orbitSpeed * dt;
		const deltaPitch = -v * orbitSpeed * dt;

		const qYaw = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), deltaYaw);
		const qPitch = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), deltaPitch);

		state.orientation.multiply(qPitch);
		state.orientation.premultiply(qYaw);

		update();
	};

	return {
		update,
		advance,
		destroy() {
			dom.removeEventListener("pointerdown", onDown);
			dom.removeEventListener("pointermove", onMove);
			dom.removeEventListener("pointerup", onUp);
			dom.removeEventListener("pointercancel", onUp);
			dom.removeEventListener("wheel", onWheel);
			dom.removeEventListener("contextmenu", onContextMenu);
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("keyup", onKeyUp);
		},
		setRadius(r: number) {
			state.radius = r;
			update();
		},
	};
}

export function createRubikGame(host: HTMLElement): RubikGame {
	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0x0b0f16);

	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
	
	// Ensure canvas has proper styling
	renderer.domElement.style.display = "block";
	renderer.domElement.style.width = "100%";
	renderer.domElement.style.height = "100%";
	
	host.appendChild(renderer.domElement);

	// Camera will be positioned by orbit controller
	const camera = new THREE.PerspectiveCamera(45, 1, 0.5, 1000);

	const orbit = createMiniOrbit(camera, renderer.domElement);
	
	// Force initial update to ensure camera is positioned correctly by orbit controller
	(orbit as any).update?.();

	// Lights
	const hemi = new THREE.HemisphereLight(0xffffff, 0x223355, 3);
	scene.add(hemi);

	const dir = new THREE.DirectionalLight(0xffffff, 2.5);
	dir.position.set(5, 8, 6);
	scene.add(dir);

	// Add fill light from below to illuminate bottom faces
	const fill = new THREE.DirectionalLight(0xffffff, 2.2);
	fill.position.set(-3, -5, -4);
	scene.add(fill);

	const root = new THREE.Group();
	scene.add(root);

	const cubies: Map<string, Cubie> = new Map();

	// RoundedBoxGeometry(width, height, depth, segments, radius)
	const cubieGeo = new RoundedBoxGeometry(0.96, 0.96, 0.96, 10, 0.11);

	const build = () => {
		root.clear();
		cubies.clear();

		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				for (let z = -1; z <= 1; z++) {
					const mats = makeCubieMaterials(x, y, z);

					const mesh = new THREE.Mesh(cubieGeo, mats);
					mesh.position.set(x * xSpacing, y * ySpacing, z * zSpacing);
					root.add(mesh);

					const c: Cubie = { mesh, coord: { x, y, z } };
					cubies.set(coordKey(c.coord), c);
				}
			}
		}
	};

	build();

	let raf = 0;
	let job: TurnJob | null = null;
	let animationSpeed = 5;

	const tmpGroup = new THREE.Group();
	scene.add(tmpGroup);

	const resize = () => {
		const w = host.clientWidth;
		const h = host.clientHeight;
		
		// Fallback if container has no size yet
		if (w === 0 || h === 0) return;
		
		renderer.setSize(w, h, false);
		camera.aspect = w / h;
		
		const minDim = Math.min(w, h);
		const aspectRatio = w / h;
		
		let targetFov: number;
		if (aspectRatio < 1) {
			targetFov = 50 + (1 - aspectRatio) * 15;
		} else {
			// Landscape mode (likely desktop)
			targetFov = 35 + Math.max(0, (1 - minDim / 600)) * 10;
		}
		
		// Clamp FOV to reasonable range
		camera.fov = Math.max(30, Math.min(70, targetFov));
		camera.updateProjectionMatrix();
	};

	const onResize = () => resize();

	const pickLayerCubies = (axis: "x" | "y" | "z", layer: number) => {
		const result: Cubie[] = [];
		for (const c of cubies.values()) {
			if (axis === "x" && c.coord.x === layer) result.push(c);
			if (axis === "y" && c.coord.y === layer) result.push(c);
			if (axis === "z" && c.coord.z === layer) result.push(c);
		}
		return result;
	};

	const attachToTmpGroup = (list: Cubie[]) => {
		// move the selected cubies under tmpGroup while preserving world transform
		tmpGroup.rotation.set(0, 0, 0);
		tmpGroup.position.set(0, 0, 0);
		tmpGroup.updateMatrixWorld(true);

		for (const c of list) {
			// manual detach and attach preserving world matrix:
			const worldPos = new THREE.Vector3();
			const worldQuat = new THREE.Quaternion();
			const worldScale = new THREE.Vector3();
			c.mesh.matrixWorld.decompose(worldPos, worldQuat, worldScale);

			root.remove(c.mesh);
			tmpGroup.add(c.mesh);
			c.mesh.position.copy(worldPos);
			c.mesh.quaternion.copy(worldQuat);
			c.mesh.scale.copy(worldScale);
		}
	};

	const reattachFromTmpGroup = (list: Cubie[]) => {
		// move back under root and snap positions to grid
		for (const c of list) {
			const worldPos = new THREE.Vector3();
			const worldQuat = new THREE.Quaternion();
			const worldScale = new THREE.Vector3();
			c.mesh.updateMatrixWorld(true);
			c.mesh.matrixWorld.decompose(worldPos, worldQuat, worldScale);

			root.add(c.mesh);
			c.mesh.position.copy(worldPos);
			c.mesh.quaternion.copy(worldQuat);
			c.mesh.scale.copy(worldScale);
		}

		// Convert world positions back to discrete coords
		// since we always rotate 90 degrees, coords remain integers
		cubies.clear();
		for (const c of listAllCubies()) {
			const p = c.mesh.position;
			const x = roundCoord(p.x / xSpacing);
			const y = roundCoord(p.y / ySpacing);
			const z = roundCoord(p.z / zSpacing);

			c.coord = { x, y, z };
			c.mesh.position.set(x * xSpacing, y * ySpacing, z * zSpacing);
			
			// Snap quaternion to nearest 90-degree orientation to prevent drift
			snapQuaternion(c.mesh.quaternion);
			
			cubies.set(coordKey(c.coord), c);
		}

		tmpGroup.clear();
		tmpGroup.rotation.set(0, 0, 0);
	};
	
	/**
	 * Snap a quaternion to the nearest 90-degree rotation.
	 */
	const snapQuaternion = (q: THREE.Quaternion) => {
		// Convert to rotation matrix
		const m = new THREE.Matrix4().makeRotationFromQuaternion(q);
		const e = m.elements;
		
		// Snap each basis vector to nearest axis
		const snapAxis = (x: number, y: number, z: number): [number, number, number] => {
			const ax = Math.abs(x), ay = Math.abs(y), az = Math.abs(z);
			if (ax >= ay && ax >= az) {
				return [Math.sign(x) || 1, 0, 0];
			} else if (ay >= ax && ay >= az) {
				return [0, Math.sign(y) || 1, 0];
			} else {
				return [0, 0, Math.sign(z) || 1];
			}
		};
		
		// Get the three basis vectors from rotation matrix
		// Column 0: X axis, Column 1: Y axis, Column 2: Z axis
		const xAxis = snapAxis(e[0]!, e[1]!, e[2]!);
		const yAxis = snapAxis(e[4]!, e[5]!, e[6]!);
		
		// Compute Z axis as cross product to ensure orthogonality
		const zAxis: [number, number, number] = [
			xAxis[1] * yAxis[2] - xAxis[2] * yAxis[1],
			xAxis[2] * yAxis[0] - xAxis[0] * yAxis[2],
			xAxis[0] * yAxis[1] - xAxis[1] * yAxis[0]
		];
		
		// Build snapped rotation matrix
		const snapped = new THREE.Matrix4().set(
			xAxis[0], yAxis[0], zAxis[0], 0,
			xAxis[1], yAxis[1], zAxis[1], 0,
			xAxis[2], yAxis[2], zAxis[2], 0,
			0, 0, 0, 1
		);
		
		q.setFromRotationMatrix(snapped);
	};

	const listAllCubies = () => {
		const all: Cubie[] = [];
		// root children are Meshes
		for (const child of root.children) {
			if (child instanceof THREE.Mesh) {
				// find matching cubie by object ref from current map, else rebuild wrapper
				let found: Cubie | null = null;
				for (const c of cubies.values()) {
					if (c.mesh === child) {
						found = c;
						break;
					}
				}
				if (!found) {
					// fallback
					found = { mesh: child, coord: { x: 0, y: 0, z: 0 } };
				}
				all.push(found);
			}
		}

		// also meshes possibly in tmpGroup during animation
		for (const child of tmpGroup.children) {
			if (child instanceof THREE.Mesh) {
				let found: Cubie | null = null;
				for (const c of cubies.values()) {
					if (c.mesh === child) {
						found = c;
						break;
					}
				}
				if (!found) found = { mesh: child, coord: { x: 0, y: 0, z: 0 } };
				all.push(found);
			}
		}

		// dedupe by mesh ref
		const unique = new Map<THREE.Mesh, Cubie>();
		for (const c of all) unique.set(c.mesh, c);
		return [...unique.values()];
	};

	const startTurn = (face: FaceMove, inverse = false) => {
		if (job) return; // prevent interrupting ongoing turn

		const base = FACE_TO_TURN[face];
		const dir: 1 | -1 = (inverse ? -base.dir : base.dir) as 1 | -1;

		job = {
			axis: base.axis,
			layer: base.layer,
			dir,
			angle: Math.PI / 2,
			progress: 0,
		};

		const layerCubies = pickLayerCubies(job.axis, job.layer);
		attachToTmpGroup(layerCubies);
	};

	const finishTurn = () => {
		if (!job) return;

		const turning: Cubie[] = [];
		for (const child of tmpGroup.children) {
			if (child instanceof THREE.Mesh) {
				let c: Cubie | undefined;
				for (const v of cubies.values()) {
					if (v.mesh === child) {
						c = v;
						break;
					}
				}
				if (!c) c = { mesh: child, coord: { x: 0, y: 0, z: 0 } };
				turning.push(c);
			}
		}

		reattachFromTmpGroup(turning);
		job = null;
	};

	const tick = (dt: number) => {
		if (!job) return;

		const speed = animationSpeed; // rad/sec
		const step = (speed * dt) / (Math.PI / 2); // normalized 0..1 per frame
		job.progress = Math.min(1, job.progress + step);

		const current = job.dir * job.angle * job.progress;

		if (job.axis === "x") tmpGroup.rotation.x = current;
		if (job.axis === "y") tmpGroup.rotation.y = current;
		if (job.axis === "z") tmpGroup.rotation.z = current;

		if (job.progress >= 1) {
			// snap
			if (job.axis === "x") tmpGroup.rotation.x = job.dir * job.angle;
			if (job.axis === "y") tmpGroup.rotation.y = job.dir * job.angle;
			if (job.axis === "z") tmpGroup.rotation.z = job.dir * job.angle;
			finishTurn();
		}
	};

	let last = performance.now();

	const loop = () => {
		raf = requestAnimationFrame(loop);
		const now = performance.now();
		const dt = Math.min(0.033, (now - last) / 1000);
		last = now;

		tick(dt);
		// advance orbit to support keyboard arrow orbiting (diagonal when multiple keys pressed)
		(orbit as any)?.advance?.(dt);
		renderer.render(scene, camera);
	};

	const onKey = (e: KeyboardEvent) => {
		const k = e.key.toLowerCase();
		const inverse = e.shiftKey;

		const map: Record<string, FaceMove> = {
			q: "Q",
			w: "W",
			e: "E",
			a: "A",
			s: "S",
			d: "D",
			z: "Z",
			x: "X",
			c: "C",
		};

		const face = map[k];
		if (!face) return;
		startTurn(face, inverse);
	};

	// Left-click drag to turn faces
	const raycaster = new THREE.Raycaster();
	const mouse = new THREE.Vector2();
	let dragState: DragState | null = null;

	/**
	 * Convert a 2D screen drag direction into a 3D world direction on the clicked face plane
	 */
	const screenToWorldDrag = (screenDrag: THREE.Vector2, faceNormal: THREE.Vector3): THREE.Vector3 => {
		// Get camera right and up vectors in world space
		const cameraRight = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
		const cameraUp = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion);
		
		// Project these onto the plane defined by the face normal
		const projectOntoPlane = (v: THREE.Vector3, n: THREE.Vector3): THREE.Vector3 => {
			return v.clone().sub(n.clone().multiplyScalar(v.dot(n)));
		};
		
		const rightOnPlane = projectOntoPlane(cameraRight, faceNormal).normalize();
		const upOnPlane = projectOntoPlane(cameraUp, faceNormal).normalize();
		
		// Combine based on screen drag direction
		const worldDrag = rightOnPlane.multiplyScalar(screenDrag.x)
			.add(upOnPlane.multiplyScalar(-screenDrag.y)); // negative because screen Y is inverted
		
		return worldDrag.normalize();
	};

	/**
	 * Determine which layer to turn based on face clicked, cubie position, and drag direction
	 */
	const determineTurnFromDrag = (
		faceNormal: THREE.Vector3,
		hitCoord: { x: number; y: number; z: number },
		worldDrag: THREE.Vector3
	): { axis: "x" | "y" | "z"; layer: number; clockwise: boolean } | null => {
		// The rotation axis is perpendicular to both the face normal and drag direction
		const rotationAxis = new THREE.Vector3().crossVectors(faceNormal, worldDrag).normalize();
		
		// Determine which principal axis this is closest to
		const absX = Math.abs(rotationAxis.x);
		const absY = Math.abs(rotationAxis.y);
		const absZ = Math.abs(rotationAxis.z);
		
		let axis: "x" | "y" | "z";
		let layer: number;
		let axisSign: number;
		
		if (absX >= absY && absX >= absZ) {
			axis = "x";
			layer = hitCoord.x;
			axisSign = Math.sign(rotationAxis.x);
		} else if (absY >= absX && absY >= absZ) {
			axis = "y";
			layer = hitCoord.y;
			axisSign = Math.sign(rotationAxis.y);
		} else {
			axis = "z";
			layer = hitCoord.z;
			axisSign = Math.sign(rotationAxis.z);
		}
		
		// Determine rotation direction based on cross product direction
		const clockwise = axisSign > 0;
		
		return { axis, layer, clockwise };
	};

	/**
	 * Start a layer turn with axis/layer/direction directly
	 */
	const startLayerTurn = (axis: "x" | "y" | "z", layer: number, clockwise: boolean) => {
		if (job) return;
		
		// Direction: positive = counter-clockwise when looking down the positive axis
		const dir: 1 | -1 = clockwise ? 1 : -1;
		
		job = {
			axis,
			layer,
			dir,
			angle: Math.PI / 2,
			progress: 0,
		};

		const layerCubies = pickLayerCubies(axis, layer);
		attachToTmpGroup(layerCubies);
	};

	const onPointerDown = (e: PointerEvent) => {
		// If this is a touch event and more than one touch is active, reserve
		// that interaction for orbit/pinch and don't begin a face drag.
		if (e.pointerType === 'touch' && activeTouchPointers.size > 1) return;
		if (e.button !== 0) return; // Only left click / single touch
		if (job) return; // Don't start new drag during animation

		const rect = renderer.domElement.getBoundingClientRect();
		mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
		mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

		raycaster.setFromCamera(mouse, camera);
		const intersects = raycaster.intersectObjects(root.children, false);

		if (intersects.length > 0) {
			const hit = intersects[0]!;
			const mesh = hit.object as THREE.Mesh;

			// Find the cubie
			let cubie: Cubie | null = null;
			for (const c of cubies.values()) {
				if (c.mesh === mesh) {
					cubie = c;
					break;
				}
			}

			if (cubie && hit.face) {
				// Get local face normal and transform to world space
				const localNormal = hit.face.normal.clone();
				const worldNormal = localNormal.applyQuaternion(mesh.quaternion).normalize();
				
				// Snap to nearest principal axis to avoid floating point drift
				const absX = Math.abs(worldNormal.x);
				const absY = Math.abs(worldNormal.y);
				const absZ = Math.abs(worldNormal.z);
				
				let faceNormal: THREE.Vector3;
				if (absX >= absY && absX >= absZ) {
					faceNormal = new THREE.Vector3(Math.sign(worldNormal.x), 0, 0);
				} else if (absY >= absX && absY >= absZ) {
					faceNormal = new THREE.Vector3(0, Math.sign(worldNormal.y), 0);
				} else {
					faceNormal = new THREE.Vector3(0, 0, Math.sign(worldNormal.z));
				}
				
				dragState = {
					active: true,
					startX: e.clientX,
					startY: e.clientY,
					faceNormal,
					hitCoord: { ...cubie.coord },
				};
				renderer.domElement.setPointerCapture(e.pointerId);
			}
		}
	};

	const onPointerMove = (e: PointerEvent) => {
		if (!dragState || !dragState.active) return;
		if (job) {
			dragState = null;
			return;
		}

		const dx = e.clientX - dragState.startX;
		const dy = e.clientY - dragState.startY;
		const threshold = 20; // pixels

		if (Math.abs(dx) > threshold || Math.abs(dy) > threshold) {
			const screenDrag = new THREE.Vector2(dx, dy);
			const worldDrag = screenToWorldDrag(screenDrag, dragState.faceNormal);
			const turnInfo = determineTurnFromDrag(dragState.faceNormal, dragState.hitCoord, worldDrag);

			if (turnInfo) {
				startLayerTurn(turnInfo.axis, turnInfo.layer, turnInfo.clockwise);
			}

			dragState = null;
		}
	};

	const onPointerUp = (e: PointerEvent) => {
		if (e.button !== 0) return;
		dragState = null;
	};

	renderer.domElement.addEventListener("pointerdown", onPointerDown, { passive: true });
	renderer.domElement.addEventListener("pointermove", onPointerMove, { passive: true });
	renderer.domElement.addEventListener("pointerup", onPointerUp, { passive: true });

	// Track active touch pointers globally so we can distinguish single-touch (face drag)
	// from multi-touch (orbit/pinch) interactions on mobile devices.
	const activeTouchPointers = new Set<number>();
	const trackTouchDown = (e: PointerEvent) => { if (e.pointerType === 'touch') activeTouchPointers.add(e.pointerId); };
	const trackTouchUp = (e: PointerEvent) => { if (e.pointerType === 'touch') activeTouchPointers.delete(e.pointerId); };
	window.addEventListener('pointerdown', trackTouchDown, true);
	window.addEventListener('pointerup', trackTouchUp, true);
	window.addEventListener('pointercancel', trackTouchUp, true);

	window.addEventListener("resize", onResize, false);
	window.addEventListener("keydown", onKey, false);

	resize();
	(orbit as any).update?.(); // Ensure camera position is correct
	loop();

	const reset = () => {
		if (job) return;
		build();
	};

	const turn = (m: FaceMove, inverse = false) => {
		startTurn(m, inverse);
	};

	const scramble = (n = 25) => {
		if (job) return;

		const moves: FaceMove[] = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
		const seq: Array<{ m: FaceMove | undefined; inv: boolean }> = [];
		
		for (let i = 0; i < n; i++) {
			const m = moves[Math.floor(Math.random() * moves.length)];
			const inv = Math.random() < 0.5;
			seq.push({ m, inv });
		}

		const run = () => {
			if (seq.length === 0) {
				// Restore animation speed when the scramble sequence is finished
				animationSpeed = oldSpeed;
				return;
			}
			if (job) return;

			const next = seq.shift()!;
			startTurn(next.m!, next.inv);

			// poll until finished
			const check = () => {
				if (!job) {
					run();
					return;
				}
				requestAnimationFrame(check);
			};
			check();
		};

		// Temporarily speed up animation for scramble
		const oldSpeed = animationSpeed;
		animationSpeed = 15;
		run();
	};

	const destroy = () => {
		cancelAnimationFrame(raf);
		window.removeEventListener("resize", onResize, false);
		window.removeEventListener("keydown", onKey, false);

		renderer.domElement.removeEventListener("pointerdown", onPointerDown);
		renderer.domElement.removeEventListener("pointermove", onPointerMove);
		renderer.domElement.removeEventListener("pointerup", onPointerUp);

		orbit.destroy();

		renderer.dispose();
		host.removeChild(renderer.domElement);

		// dispose materials we created
		const allMeshes: THREE.Mesh[] = [];
		root.traverse((obj: any) => {
			if (obj instanceof THREE.Mesh) allMeshes.push(obj);
		});

		for (const m of allMeshes) {
			const mat = m.material;
			if (Array.isArray(mat)) {
				for (const x of mat) x.dispose();
			} else {
				mat.dispose();
			}
		}

		cubieGeo.dispose();
	};

	return {
		reset,
		scramble,
		turn,
		destroy,
		setSpeed: (s: number) => {
			animationSpeed = s;
		},
	};
}
