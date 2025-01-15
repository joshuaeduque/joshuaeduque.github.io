{#if mounted}
	<div
		in:fade={{ delay: 150 }}
		class="min-h-screen overflow-hidden p-4 grid content-evenly sm:grid-cols-2 sm:items-center">
		<div class="h-fit flex sm:justify-center">
			<div class="flex flex-col justify-center gap-4">
				<div in:fly={{ y: -100, easing: expoOut, duration: flyDuration, opacity: 0.001 }}>
					<!-- Apparently adding opacity to transitions fixes some choppiness -->
					<p class="font-librebarcode text-7xl">JOSHUA DUQUE</p>
					<p class="font-notosansmono-condensed">San Antonio, TX | joshuaeduque@gmail.com</p>
				</div>

				<div
					in:fly={{ x: -100, easing: expoOut, duration: flyDuration, opacity: 0.001 }}
					class="flex flex-col gap-4">
					<p class="font-notosansmono-condensed">cs undergraduate at utsa.</p>
					<p class="font-notosansmono-condensed">full stack developer.</p>
					<p class="font-notosansmono-condensed underline w-fit hvr-sweep-to-right">
						<a href="/resume">resume</a>
					</p>
				</div>

				<div
					in:fly={{ y: 100, easing: expoOut, duration: flyDuration, opacity: 0.001 }}
					class="flex gap-4">
					<a href="https://github.com/joshuaeduque" target="_blank">
						<!-- Keep title and alt the same for accessibility -->
						<img
							class="w-10 brightness-0 transition hover:scale-110"
							src={githubIcon}
							title="GitHub link"
							alt="GitHub link" />
					</a>
					<a href="mailto:joshuaeduque@gmail.com">
						<img
							class="w-10 transition hover:scale-110"
							src={emailIcon}
							title="Email link"
							alt="Email link" />
					</a>
				</div>
			</div>
		</div>
		<div
			in:fly={{ x: 100, easing: expoOut, duration: flyDuration, opacity: 0.001 }}
			class="h-fit flex flex-col gap-4">
			<div class="flex flex-col gap-4">
				<p class="font-notosansmono-condensed font-bold">skills</p>
				<div class="flex flex-row flex-wrap gap-4">
					{#each skills as skill}
						<div class="w-fit flex gap-1 items-center">
							<img class="w-8" alt={skill.alt} src={skill.src} />
							<p class="font-notosansmono-condensed">{skill.text}</p>
						</div>
					{/each}
				</div>
			</div>
			<div class="flex flex-col gap-4">
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
	</div>
{/if}

<script>
	import { onMount } from 'svelte';

	import githubIcon from '$lib/images/github-icon.svg';
	import emailIcon from '$lib/images/email-icon.svg';
	import { fade, fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import { text } from '@sveltejs/kit';

	const skills = [
		{
			alt: 'C# logo',
			text: 'C#',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg'
		},
		{
			alt: 'Python logo',
			text: 'Python',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
		},
		{
			alt: 'JavaScript logo',
			text: 'JavaScript',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
		},
		{
			alt: 'SQL logo',
			text: 'SQL',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg'
		},
		{
			alt: 'Svelte logo',
			text: 'Svelte',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg'
		}
	];

	const flyDuration = 1000;

	let mounted = false;

	onMount(async () => {
		await document.fonts.ready;
		mounted = true;
	});
</script>
