{#if mounted}
	<div class="h-screen overflow-hidden p-4 grid content-evenly sm:grid-cols-2 sm:items-center">
		<div class="h-fit flex sm:justify-center">
			<div class="flex flex-col justify-center gap-4">
				<p
					transition:fly={{ y: -100, easing: expoOut, duration: 1000 }}
					class="font-librebarcode text-7xl">
					JOSHUA DUQUE
				</p>

				<div
					transition:fly={{ x: -100, easing: expoOut, duration: 1000 }}
					class="flex flex-col gap-4">
					<p class="font-notosansmono-condensed">
						cs major at utsa that's loved tech from a young age.
					</p>
					<p class="font-notosansmono-condensed">wannabe full stack developer.</p>
					<p class="font-notosansmono-condensed">i really like sony's playstation 3.</p>
					<p class="font-notosansmono-condensed underline w-fit hvr-sweep-to-right">
						<a href="https://google.com" target="_blank">about me</a>
					</p>
				</div>

				<div transition:fly={{ y: 100, easing: expoOut, duration: 1000 }} class="flex gap-4">
					<a href="https://github.com/joshuaeduque" target="_blank">
						<!-- Keep title and alt the same for accessibility -->
						<img
							class="w-10 contrast-200 transition hover:scale-110"
							src={githubIcon}
							title="GitHub link"
							alt="GitHub link" />
					</a>
					<a href="mailto:joshuaeduque@gmail.com">
						<img
							class="w-10 contrast-200 transition hover:scale-110"
							src={emailIcon}
							title="Email link"
							alt="Email link" />
					</a>
				</div>
			</div>
		</div>
		<div
			transition:fly={{ x: 100, easing: expoOut, duration: 1000 }}
			class="h-fit flex flex-col gap-4">
			<p class="font-notosansmono-condensed font-bold">projects</p>
			<div>
				<p class="font-notosansmono-condensed underline hvr-sweep-to-right">
					<a href="https://github.com/joshuaeduque/ps3mapi" target="_blank">PS3MAPI</a>
				</p>
				<p class="font-notosansmono-condensed">
					Remote communications library for Sony's PlayStation 3 written in C#
				</p>
			</div>

			<div>
				<p class="font-notosansmono-condensed underline hvr-sweep-to-right">
					<a href="https://devpost.com/software/futurefocus" target="_blank">FutureFocus</a>
				</p>
				<p class="font-notosansmono-condensed">
					Groq AI powered career planner awarded best use of Terraform at RowdyHacks X
				</p>
			</div>

			<div>
				<p class="font-notosansmono-condensed underline hvr-sweep-to-right">
					<a href="https://github.com/joshuaeduque/dragonscroll" target="_blank">DragonScroll</a>
				</p>
				<p class="font-notosansmono-condensed">
					Offline personal book logger for Android using Room DB and SharedPreferences libraries
				</p>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Sweep To Right */
	/* Thanks to https://github.com/IanLunn */
	.hvr-sweep-to-right {
		display: inline-block;
		vertical-align: middle;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		position: relative;
		-webkit-transition-property: color;
		transition-property: color;
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
	}
	.hvr-sweep-to-right:before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: black;
		-webkit-transform: scaleX(0);
		transform: scaleX(0);
		-webkit-transform-origin: 0 50%;
		transform-origin: 0 50%;
		-webkit-transition-property: transform;
		transition-property: transform;
		-webkit-transition-duration: 0.2s;
		transition-duration: 0.2s;
		-webkit-transition-timing-function: ease-out;
		transition-timing-function: ease-out;
	}
	.hvr-sweep-to-right:hover,
	.hvr-sweep-to-right:focus,
	.hvr-sweep-to-right:active {
		color: white;
	}
	.hvr-sweep-to-right:hover:before,
	.hvr-sweep-to-right:focus:before,
	.hvr-sweep-to-right:active:before {
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}
</style>

<script>
	import { onMount } from 'svelte';

	import githubIcon from '$lib/images/github-icon.svg';
	import emailIcon from '$lib/images/email-icon.svg';
	import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>
