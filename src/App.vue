<template>
	<div class="page">
		<div class="header">
			<div class="title">Vuebik Cube</div>

			<div class="controls">
				<button @click="reset">reset</button>
				<button @click="scramble">scramble</button>
				<button @click="showTimer = true" :class="{ active: showTimer }">timer</button>

				<button @click="turn('Q')">Q</button>
				<button @click="turn('W')">W</button>
				<button @click="turn('E')">E</button>
				<button @click="turn('A')">A</button>
				<button @click="turn('S')">S</button>
				<button @click="turn('D')">D</button>
				<button @click="turn('Z')">Z</button>
				<button @click="turn('X')">X</button>
				<button @click="turn('C')">C</button>

				<div class="speed-wrap">
					<label>Speed: {{ speedDisplay }}</label>
					<input type="range" min="1" max="20" v-model.number="speedDisplay" @input="updateSpeed" />
				</div>
			</div>
		</div>

		<div class="canvasWrap" ref="host">
			<div class="hint">
				<div v-if="!isMobile">
					left drag on face to turn, right drag to orbit, scroll to zoom.
					keys:
					<span class="kbd">q w e a s d z x c</span>
					(shift = inverse)
					<br/>
					arrow keys: orbit camera (hold two for diagonal combined orbit)
				</div>
				<div v-if="isMobile">
					<p>Double tap to rotate, pinch to zoom.</p>
				</div>
				
			</div>
		</div>

		<Timer v-if="showTimer" @close="showTimer = false" />
	</div>
</template>

<style>
.speed-wrap {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	margin-left: 8px;
	font-size: 14px;
	background: rgba(255, 255, 255, 0.05);
	padding: 4px 8px;
	border-radius: 8px;
	border: 1px solid rgba(255, 255, 255, 0.1);
}

.speed-wrap input {
	width: 70px;
	cursor: pointer;
}
</style>

<script setup lang="ts">
import Timer from "./components/Timer.vue";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { createRubikGame } from "./game/cube";
import type { RubikGame, FaceMove } from "./game/utils";

const host = ref<HTMLElement | null>(null);
const showTimer = ref(false);
const speedDisplay = ref(5);
let game: RubikGame | null = null;

function reset() {
	game?.reset();
}

function scramble() {
	game?.scramble();
}

function updateSpeed() {
	game?.setSpeed(speedDisplay.value + 2);
}

function turn(face: FaceMove) {
	game?.turn(face);
}

const isMobile = computed(() => {
	const ua = navigator.userAgent;
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
});

onMounted(() => {
	if (!host.value) return;
	game = createRubikGame(host.value);
	game.setSpeed(speedDisplay.value + 2);

	// debugging
	(window as any).rubik = game;
});

onBeforeUnmount(() => {
	game?.destroy();
	game = null;
});
</script>