<script>
	import { onMount } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const duration = 1000;

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<section class="grid content-center p-4 w-screen max-w-full h-screen gap-y-6">
		<p
			in:fly={{ duration: duration, easing: expoOut, y: -100 }}
			class="font-librebarcode name-responsive"
		>
			JOSHUA DUQUE
		</p>

		<div in:fly={{ duration: duration, easing: expoOut, x: -100 }}>
			<p class="font-roboto header-responsive">ABOUT ME</p>
			<p class="font-roboto-mono text-responsive">
				My name's Joshua Duque and I'm a computer science student at UTSA. Software became my
				passion as a teen writing cheats for my favorite online video games. Now, I'd like to make
				it a career. While most of my work is for personal utility, I'd like to diversify in the
				future. Thank you for visiting and please enjoy.
			</p>
		</div>

		<div in:fly={{ duration: duration, easing: expoOut, x: 100 }}>
			<p class="font-roboto header-responsive">PROJECTS</p>
			<p class="font-roboto-mono text-responsive">Project Name</p>
			<p class="font-roboto-mono text-responsive">Project Name</p>
			<p class="font-roboto-mono text-responsive">Project Name</p>
			<p class="font-roboto-mono text-responsive">Project Name</p>
		</div>

		<div in:fly={{ duration: duration, easing: expoOut, y: 100 }} class="flex flex-row justify-center">
			<a href="https://github.com/joshuaeduque" target="_blank">
				<img class="github-responsive" src="/images/github-mark.svg" alt="GitHub logo" />
			</a>
		</div>
	</section>
{/if}

<style lang="postcss">
	.name-responsive {
		@apply text-6xl sm:text-7xl xl:text-8xl 3xl:text-9xl;
	}

	.header-responsive {
		@apply text-2xl sm:text-3xl xl:text-4xl 3xl:text-5xl;
	}

	.text-responsive {
		@apply text-lg sm:text-xl xl:text-2xl 3xl:text-3xl;
	}

	.github-responsive {
		@apply w-9 sm:w-11 xl:w-14 3xl:w-16;
	}
</style>
