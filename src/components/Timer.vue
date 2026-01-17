<template>
	<div class="timer-window" :style="{ left: x + 'px', top: y + 'px' }" @pointerdown="startDrag">
		<div class="timer-header">
			<span>TIMER</span>
			<button class="close-btn" @click="$emit('close')">×</button>
		</div>
		<div class="timer-display">
			{{ formatTime(elapsed) }}
		</div>
		<div class="timer-controls">
			<button @click="toggle">{{ running ? 'PAUSE' : 'START' }}</button>
			<button @click="resetTimer">RESET</button>
		</div>
	</div>
</template>

<style scoped>
.timer-window {
	position: fixed;
	background: rgba(11, 15, 22, 0.85);
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 12px;
	padding: 16px;
	color: #fff;
	user-select: none;
	width: 200px;
	backdrop-filter: blur(8px);
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
	z-index: 1000;
	font-family: monospace;
}

.timer-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;
	cursor: grab;
	font-weight: 700;
	font-size: 0.85em;
	letter-spacing: 0.1em;
	color: rgba(255, 255, 255, 0.6);
}

.timer-header:active {
	cursor: grabbing;
}

.close-btn {
	background: none;
	border: none;
	color: rgba(255, 255, 255, 0.4);
	cursor: pointer;
	font-size: 1.5em;
	padding: 0;
	line-height: 0.5;
	display: flex;
	align-items: center;
}

.close-btn:hover {
	color: #fff;
	background: none;
}

.timer-display {
	font-size: 2.2em;
	text-align: center;
	margin: 12px 0 20px 0;
	color: #64d2ff;
	font-weight: 500;
	text-shadow: 0 0 20px rgba(100, 210, 255, 0.3);
}

.timer-controls {
	display: flex;
	gap: 8px;
	justify-content: center;
}

.timer-controls button {
	flex: 1;
	padding: 8px 0;
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 6px;
	background: rgba(255, 255, 255, 0.1);
	color: #eee;
	font-size: 0.8em;
	cursor: pointer;
	transition: all 0.2s;
	font-family: inherit;
	font-weight: 600;
}

.timer-controls button:hover {
	background: rgba(255, 255, 255, 0.2);
	border-color: rgba(255, 255, 255, 0.4);
}

.timer-controls button:active {
	background: rgba(255, 255, 255, 0.05);
	transform: translateY(1px);
}
</style>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue';

const props = defineProps<{
	initialX?: number;
	initialY?: number;
}>();

defineEmits(['close']);

const x = ref(props.initialX ?? window.innerWidth - 240);
const y = ref(props.initialY ?? 80);

const running = ref(false);
const startTime = ref(0);
const elapsed = ref(0);
let animationFrame: number;

function tick() {
	if (!running.value) return;
	const now = performance.now();
	elapsed.value = now - startTime.value;
	animationFrame = requestAnimationFrame(tick);
}

function toggle() {
	if (running.value) {
		// Pause
		running.value = false;
		cancelAnimationFrame(animationFrame);
	} else {
		// Start
		running.value = true;
		startTime.value = performance.now() - elapsed.value;
		tick();
	}
}

function resetTimer() {
	running.value = false;
	cancelAnimationFrame(animationFrame);
	elapsed.value = 0;
}

function formatTime(ms: number) {
	const totalSeconds = Math.floor(ms / 1000);
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	const centis = Math.floor((ms % 1000) / 10);
	return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centis.toString().padStart(2, '0')}`;
}

let dragging = false;
let startDragX = 0;
let startDragY = 0;

function startDrag(e: PointerEvent) {
	if ((e.target as HTMLElement).tagName === 'BUTTON') return;

	dragging = true;
	startDragX = e.clientX - x.value;
	startDragY = e.clientY - y.value;
	(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

	window.addEventListener('pointermove', onDrag);
	window.addEventListener('pointerup', stopDrag);
}

function onDrag(e: PointerEvent) {
	if (!dragging) return;
	x.value = e.clientX - startDragX;
	y.value = e.clientY - startDragY;
}

function stopDrag() {
	dragging = false;
	window.removeEventListener('pointermove', onDrag);
	window.removeEventListener('pointerup', stopDrag);
}

onUnmounted(() => {
	cancelAnimationFrame(animationFrame);
	window.removeEventListener('pointermove', onDrag);
	window.removeEventListener('pointerup', stopDrag);
});
</script>
