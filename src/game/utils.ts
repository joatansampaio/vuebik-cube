import * as THREE from "three";

export type FaceMove = "Q" | "W" | "E" | "A" | "S" | "D" | "Z" | "X" | "C";
export type RubikGame = {
	reset: () => void;
	scramble: (n?: number) => void;
	turn: (m: FaceMove, inverse?: boolean) => void;
	destroy: () => void;
	setSpeed: (speed: number) => void;
};

export type Cubie = {
	mesh: THREE.Mesh;
	coord: { x: number; y: number; z: number };
};

export type TurnJob = {
	axis: "x" | "y" | "z";
	layer: number; // -1, 0, 1
	dir: 1 | -1;
	angle: number; // target angle (radians)
	progress: number; // 0..1
};

export type DragState = {
	active: boolean;
	startX: number;
	startY: number;
	faceNormal: THREE.Vector3;
	hitCoord: { x: number; y: number; z: number };
};

export const FACE_TO_TURN: Record<FaceMove, { axis: "x" | "y" | "z"; layer: number; dir: 1 | -1 }> = {
	Q: { axis: "y", layer:  1, dir:  1 },
	W: { axis: "y", layer:  0, dir:  1 },
	E: { axis: "y", layer: -1, dir:  1 },
	A: { axis: "x", layer: -1, dir:  1 },
	S: { axis: "x", layer:  0, dir:  1 },
	D: { axis: "x", layer:  1, dir:  1 },
	Z: { axis: "z", layer:  1, dir: -1 },
	X: { axis: "z", layer:  0, dir: -1 },
	C: { axis: "z", layer: -1, dir: -1 },
};

export function roundCoord(v: number) {
	// avoid float drift
	return Math.round(v);
}

export function coordKey(c: { x: number; y: number; z: number }) {
	return `${c.x},${c.y},${c.z}`;
}

export function makeCubieMaterials(x: number, y: number, z: number) {
	// box materials order in three:
	// +x, -x, +y, -y, +z, -z
	const black = makeStickerMaterial(0x0b0b0f);

	const right = x === 1 ? makeStickerMaterial(0xff3b30) : black; // red
	const left = x === -1 ? makeStickerMaterial(0xff9500) : black; // orange
	const up = y === 1 ? makeStickerMaterial(0xffffff)    : black; // white
	const down = y === -1 ? makeStickerMaterial(0xfff700) : black; // yellow
	const front = z === 1 ? makeStickerMaterial(0x34c759) : black; // green
	const back = z === -1 ? makeStickerMaterial(0x007aff) : black; // blue

	return [right, left, up, down, front, back];

	function makeStickerMaterial(color: number) {
	return new THREE.MeshStandardMaterial({
		color,
		roughness: 0.1,
		metalness: 0.15,
	});
}
}
