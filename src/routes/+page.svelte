<script lang="ts">
	import { onMount } from 'svelte';
	import ElbowLeftUp from '~icons/ph/arrow-elbow-left-up';
	import Email from '~icons/ph/envelope';
	import GitHub from '~icons/ph/github-logo';
	import Linkedin from '~icons/ph/linkedin-logo';
	import Resume from '~icons/ph/notebook';

	const connections = [
		{ icon: Email, label: 'email', href: 'mailto:joshuaeduque@gmail.com' },
		{ icon: GitHub, label: 'github', href: 'https://github.com/joshuaeduque' },
		{ icon: Linkedin, label: 'linkedin', href: 'https://linkedin.com/in/joshua-d-9117a5352' },
		{ icon: Resume, label: 'resume', href: '/secret' }
	] as const;

	const experiences = [
		{
			title: 'Lucien™ - Lucien Technologies',
			text: 'Migrated ISM project to offshoot company Lucien Technologies as a founding member. Currently developing hardware, software, and server architecture. Enjoying the startup life.'
		},
		{
			title: 'IRYS Security Module (ISM) - IRYS Technologies',
			text: "Operated directly under IRYS Technologies' CTO to kickstart development of a patent-pending, hardware-based language classification engine."
		},
		{
			title: 'Bus Schedule Automation - Better Futures + VIA',
			text: "Collaborated with VIA Metropolitan Transit's technical team to develop internal tooling that automates the creation of bus schedules in the city of San Antonio, Texas."
		}
	] as const;

	let mounted = $state(false);

	onMount(async () => {
		if (document.fonts?.ready) {
			await document.fonts.ready;
		}
		mounted = true;
	});
</script>

{#if mounted}
	<div id="top" class="mx-auto flex w-full max-w-2xl flex-col gap-y-8 p-4">
		<!-- title -->
		<div>
			<h1 class="font-barcode text-6xl">JOSHUA DUQUE</h1>
			<p>Austin, Texas | fullstack developer</p>
		</div>

		<!-- connect + skills -->
		<div class="grid items-start gap-y-8 md:grid-cols-2">
			<div>
				<h2 class="font-medium">connect</h2>
				<ul>
					{#each connections as connection (connection.label)}
						<li>
							<a class="group" href={connection.href} target="_blank" rel="noopener noreferrer">
								<span class="inline-flex items-center gap-1">
									<connection.icon aria-hidden="true" />
									<span class="group-hover:underline">{connection.label}</span>
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h2 class="font-medium">skills</h2>
				<ul class="list-inside list-disc">
					<li>C#, Python, TypeScript, SQL</li>
					<li>Web, mobile, desktop apps</li>
					<li>Embedded systems</li>
					<li>Automation tooling</li>
				</ul>
			</div>
		</div>

		<!-- experience -->
		<div class="flex flex-col">
			<h2 class="font-medium">experience</h2>
			<div class="flex flex-col gap-2">
				{#each experiences as experience (experience.title)}
					<div>
						<p class="font-medium">{experience.title}</p>
						<p>
							{experience.text}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- about me -->
		<div>
			<h2 class="font-medium">about me</h2>
			<p>
				Hi, my name's Josh. I'm a developer based in Austin, Texas who got his start in the console
				hacking scene. I studied Computer Science at the University of Texas at San Antonio then
				joined the Better Futures Institute Spring 2025 cohort to give back to the city. Afterwards,
				I was picked up by Better Futures' sibling company IRYS Technologies, and the rest is
				history :&rpar;
			</p>
		</div>

		<div class="flex justify-end md:hidden">
			<a class="group flex items-center gap-1" href="#top">
				<ElbowLeftUp aria-hidden="true" />
				<span class="group-hover:underline">back to top</span>
			</a>
		</div>
	</div>
{/if}
