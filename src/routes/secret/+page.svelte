<script lang="ts">
	import { onMount } from 'svelte';

	let playing = $state(false);
	let audio: HTMLAudioElement;

	onMount(() => {
		audio = new Audio('/rickroll.mp3');
		audio.volume = 0.05;
		audio.loop = true;
		audio
			.play()
			.then(() => (playing = true))
			.catch(() => {});
	});

	function toggle() {
		if (playing) {
			audio.pause();
		} else {
			audio.play();
		}
		playing = !playing;
	}
</script>

<div class="flex h-screen flex-col items-center justify-center gap-4">
	<img src="/rickroll.webp" alt="Rick roll" />
	<button class="font-mono hover:underline" onclick={toggle}>
		{playing ? 'disable music' : 'enable music'}
	</button>
</div>
