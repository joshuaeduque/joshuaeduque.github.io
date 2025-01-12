{#if mounted}
	<div class="h-screen p-4 grid content-evenly sm:grid-cols-2 sm:items-center">
		<div class="h-fit flex justify-center">
			<div class="flex flex-col justify-center gap-4">
				<p class="font-librebarcode text-7xl">JOSHUA DUQUE</p>
				<p class="font-notosansmono-condensed">
					cs major at utsa that's loved tech from a young age.
				</p>
				<p class="font-notosansmono-condensed">also a full stack developer.</p>
				<p class="font-notosansmono-condensed">i really like sony's playstation 3.</p>
				<p class="font-notosansmono-condensed underline">
					<a href="https://google.com" target="_blank">about me</a>
				</p>
				<div class="flex gap-4">
					<a href="https://github.com/joshuaeduque" target="_blank">
						<img class="w-10 contrast-200 transition hover:scale-105" src={githubIcon} alt="GitHub icon" />
					</a>
					<a href="mailto:joshuaeduque@gmail.com">
						<img class="w-10 contrast-200 transition hover:scale-105" src={emailIcon} alt="Email icon" />
					</a>
				</div>
			</div>
		</div>
		<div class="h-fit flex flex-col gap-4">
			<p class="font-notosansmono-condensed font-bold">projects</p>
			<div>
				<p class="font-notosansmono-condensed underline">
					<a href="https://github.com/joshuaeduque/ps3mapi" target="_blank">PS3MAPI</a>
				</p>
				<p class="font-notosansmono-condensed">Remote communications library for Sony's PlayStation 3 written in C#</p>
			</div>

			<div>
				<p class="font-notosansmono-condensed underline">
					<a href="https://devpost.com/software/futurefocus" target="_blank">FutureFocus</a>
				</p>
				<p class="font-notosansmono-condensed">Groq AI powered career planner awarded best use of Terraform at RowdyHacks X</p>
			</div>

			<div>
				<p class="font-notosansmono-condensed underline">
					<a href="https://github.com/joshuaeduque/dragonscroll" target="_blank">DragonScroll</a>
				</p>
				<p class="font-notosansmono-condensed">Offline personal book logger for Android using Room DB and SharedPreferences libraries</p>
			</div>
		</div>
	</div>
{/if}

<script>
	import { onMount } from 'svelte';

	import githubIcon from '$lib/images/github-icon.svg';
	import emailIcon from '$lib/images/email-icon.svg';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>
