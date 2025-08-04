<script lang="ts">
	import { Github, Linkedin, Mail } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	interface ContactItem {
		icon: any;
		text: string;
		link: string;
	}

	const contacts: ContactItem[] = [
		{
			icon: Linkedin,
			text: 'linkedin',
			link: 'https://linkedin.com/in/joshua-d-9117a5352'
		},
		{
			icon: Github,
			text: 'github',
			link: 'https://github.com/joshuaeduque'
		},
		{
			icon: Mail,
			text: 'email',
			link: 'mailto:joshuaeduque@gmail.com'
		}
	];
</script>

{#if mounted}
	<div class="h-screen content-center" in:fade>
		<div class="grid justify-center gap-x-4 gap-y-4 md:gap-x-16">
			<div class="col-1" in:fly={{ y: -50, easing: expoOut }}>
				<p class="font-barcode text-6xl">JOSHUA DUQUE</p>
			</div>
			<div class="col-1" in:fly={{ y: -50, easing: expoOut }}>
				<p class="font-roboto-mono">San Antonio, TX | fullstack developer</p>
			</div>
			<div class="col-1 md:col-2 md:row-start-3 md:row-end-5" in:fly={{ x: 50, easing: expoOut }}>
				<p class="font-roboto text-xl">experience</p>
				<div class="grid gap-4">
					<div>
						<p class="font-roboto-mono font-medium">Cybersec. Hardware Apprentice</p>
						<p class="font-roboto-mono">IRYS Technologies</p>
						<p class="font-roboto-mono">May 2025 - present</p>
					</div>
					<div>
						<p class="font-roboto-mono font-medium">Data Automation & QA Intern</p>
						<p class="font-roboto-mono">VIA Metropolitan Transit</p>
						<p class="font-roboto-mono">Feb 2025 - May 2025</p>
					</div>
					<div>
						<p class="font-roboto-mono font-medium">Civic Tech. Scholar</p>
						<p class="font-roboto-mono">Better Futures Institute</p>
						<p class="font-roboto-mono">Feb 2025 - May 2025</p>
					</div>
				</div>
			</div>
			<div class="col-1" in:fly={{ x: -50, easing: expoOut }}>
				<p class="font-roboto text-xl">skills</p>
				<ul class="list-inside list-disc font-roboto-mono">
					<li>C#, Python, TypeScript, SQL</li>
					<li>Desktop, web, mobile development</li>
					<li>Internal tooling automation</li>
					<li>Embedded systems</li>
				</ul>
			</div>
			<div class="col-1 grid gap-1" in:fly={{ y: 50, easing: expoOut }}>
				<p class="font-roboto text-xl">contact me</p>
				{#each contacts as contact}
					<div class="flex gap-1">
						<contact.icon />
						<p class="font-roboto-mono underline">
							<a href={contact.link} target="_blank">{contact.text}</a>
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
