<script lang="ts">
	import type { Component } from 'svelte';
	import { onMount } from 'svelte';
	import type { SVGAttributes } from 'svelte/elements';
	import { fade, fly } from 'svelte/transition';
	import DownRightArrow from '~icons/ph/arrow-elbow-down-right';
	import UpLeftArrow from '~icons/ph/arrow-elbow-left-up';
	import Egg from '~icons/ph/egg';
	import Email from '~icons/ph/envelope-simple';
	import GitHub from '~icons/ph/github-logo';
	import LinkedIn from '~icons/ph/linkedin-logo';
	import Loader from '~icons/svg-spinners/bars-fade';

	let loading = $state(true);
	let ready = $state(false);

	onMount(async () => {
		if (document.fonts?.ready) {
			await document.fonts.ready;
		}
		await new Promise((r) => setTimeout(r, 1000));
		loading = false;
	});

	const links: {
		icon: Component<SVGAttributes<SVGSVGElement>>;
		label: string;
		href: string;
		secret?: boolean;
	}[] = [
		{
			icon: LinkedIn,
			label: 'linkedin',
			href: 'https://linkedin.com/in/joshua-d-9117a5352'
		},
		{
			icon: GitHub,
			label: 'github',
			href: 'https://github.com/joshuaeduque'
		},
		{
			icon: Email,
			label: 'email',
			href: 'mailto:joshuaeduque@gmail.com'
		},
		{
			icon: Egg,
			label: 'secret',
			href: '/secret',
			secret: true
		}
	];

	const experience: { title: string; employer: string; subemployer?: string; duration: string }[] =
		[
			{
				title: 'Junior Hardware Engineer',
				employer: 'Lucien Technologies',
				duration: 'May 2026 - present'
			},
			{
				title: 'Cybersecurity Hardware Apprentice',
				employer: 'IRYS Technologies',
				duration: 'June 2025 - May 2026'
			},
			{
				title: 'Data Automation + QA',
				employer: 'Better Futures Institute',
				subemployer: 'VIA Metropolitan Transit',
				duration: 'February 2025 - May 2025'
			}
		];

	const impacts: { title: string; employer: string; description: string }[] = [
		{
			title: 'Lucien™',
			employer: 'Lucien Technologies',
			description:
				'Joined founding developer team of Lucien Technologies in transition from IRYS Security Module to Lucien™.'
		},
		{
			title: 'IRYS Security Module',
			employer: 'IRYS Technologies',
			description:
				'Operated directly under company CTO to kickstart embedded development of IRYS Security Module project.'
		},
		{
			title: 'Schedule Automation',
			employer: 'VIA Metropolitan Transit',
			description:
				'Collaborated with VIA Metropolitan Transit technical team to develop internal bus schedule automation tooling.'
		}
	];

	const aboutme =
		"Hi, my name's Josh. I'm a developer based in Austin, Texas who got his start in the console hacking scene. I studied Computer Science at the University of Texas at San Antonio, then joined the Better Futures Institute Spring 2025 cohort to give back to the city. Afterwards, I was picked up by Better Futures' sibling company IRYS Technologies, and the rest is history :)";
</script>

{#if loading}
	<div class="flex h-screen animate-fade-in items-center justify-center">
		<span out:fade onoutroend={() => (ready = true)}>
			<Loader />
		</span>
	</div>
{/if}

{#if ready}
	<!-- HERO -->
	<section class="flex min-h-screen items-center justify-center p-4">
		<div class="grid w-full max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
			<!-- HEADER (spans full width) -->
			<div class="md:col-span-2" in:fly={{ y: -100 }}>
				<p class="font-barcode text-5xl md:text-6xl">JOSHUA DUQUE</p>
				<p class="font-mono">Austin, Texas | fullstack developer</p>
			</div>

			<!-- LEFT COLUMN -->
			<div class="grid gap-8" in:fly={{ x: -100 }}>
				<!-- skills -->
				<div>
					<p class="text-xl">skills</p>
					<ul class="list-inside list-disc font-mono">
						<li>C#, Python, TypeScript, SQL</li>
						<li>Desktop, web, mobile development</li>
						<li>Internal tooling automation</li>
						<li>Embedded systems</li>
					</ul>
				</div>

				<!-- contact me -->
				<div>
					<p class="text-xl">contact me</p>
					<ul class="grid gap-2">
						{#each links as link (link.label)}
							<li
								class="w-fit font-mono {link.secret
									? 'opacity-0 transition-opacity hover:opacity-100'
									: ''}"
							>
								<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
								<a
									href={link.href}
									target="_blank"
									class="flex w-fit items-center gap-2 hover:underline"
								>
									<link.icon class="inline" />
									<span>{link.label}</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<!-- RIGHT COLUMN -->
			<div class="grid gap-8" in:fly={{ x: 100 }}>
				<!-- experience -->
				<div>
					<p class="text-xl">experience</p>
					<div class="grid gap-4">
						{#each experience as exp (exp.employer)}
							<div class="font-mono">
								<p class="font-medium">{exp.title}</p>
								<p>{exp.employer}</p>

								{#if exp.subemployer}
									<p class="pl-4 text-sm">
										<DownRightArrow class="relative -top-1 inline" />
										{exp.subemployer}
									</p>
								{/if}

								<p>{exp.duration}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- BELOW HERO CONTENT -->
	<section class="flex justify-center px-4 py-8">
		<div class="grid w-full max-w-3xl gap-12">
			<!-- impacts -->
			<div>
				<p class="text-xl">impacts</p>
				<div class="grid gap-4 font-mono">
					<!-- example project -->
					{#each impacts as impact (impact.description)}
						<div>
							<p class="font-medium">
								{impact.title} <span class="font-normal opacity-60">- {impact.employer}</span>
							</p>
							<p class="text-sm">{impact.description}</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- optional extra section -->
			<div>
				<p class="text-xl">about</p>
				<p class="font-mono text-sm leading-relaxed">
					{aboutme}
				</p>
			</div>
		</div>
	</section>

	<!-- FOOTER -->
	<footer class="flex justify-center px-4 pt-8 pb-4">
		<div class="w-full max-w-3xl">
			<div class="text-right font-mono text-sm">
				<a href="#top" class="inline-flex items-center gap-2 hover:underline">
					<UpLeftArrow />
					<span>back to top</span>
				</a>
			</div>
		</div>
	</footer>
{/if}
