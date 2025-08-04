<script>
	import { Github, Linkedin, Mail } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="h-screen content-center" in:fade>
		<div class="grid justify-center gap-x-4 gap-y-4 md:gap-x-16">
			<div class="col-1">
				<p class="font-barcode text-6xl">JOSHUA DUQUE</p>
			</div>
			<div class="col-1">
				<p class="font-roboto-mono">San Antonio, TX | fullstack developer</p>
			</div>
			<div class="col-1 md:col-2 md:row-start-3 md:row-end-5">
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
			<div class="col-1">
				<p class="font-roboto text-xl">skills</p>
				<ul class="list-inside list-disc font-roboto-mono">
					<li>C#, Python, TypeScript, SQL</li>
					<li>Desktop, web, mobile development</li>
					<li>Internal tooling automation</li>
					<li>Embedded systems</li>
				</ul>
			</div>
			<div class="col-1 grid gap-1">
				<p class="font-roboto text-xl">contact me</p>
				<div class="flex gap-1">
					<Linkedin />
					<p class="font-roboto-mono underline">
						<a href="https://linkedin.com/in/joshua-d-9117a5352" target="_blank">linkedin</a>
					</p>
				</div>
				<div class="flex gap-1">
					<Github />
					<p class="font-roboto-mono underline">
						<a href="https://github.com/joshuaeduque" target="_blank">github</a>
					</p>
				</div>
				<div class="flex gap-1">
					<Mail />
					<p class="font-roboto-mono underline">
						<a href="mailto:joshuaeduque@gmail.com">email</a>
					</p>
				</div>
			</div>
		</div>
	</div>
{/if}
