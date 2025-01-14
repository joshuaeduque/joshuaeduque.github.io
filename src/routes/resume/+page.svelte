<div class="p-4">
	<p class="font-notosansmono-condensed font-bold">resume</p>
	<p class="font-notosansmono-condensed">
		You may have to scroll / zoom depending on your screen size
	</p>
	<button class="font-notosansmono-condensed underline hvr-sweep-to-right" on:click={downloadResume}>download</button>
	<canvas id="pdf-canvas"></canvas>
</div>

<!-- NOTE npm will throw an error about importing pdfjs when building -->
<!-- This is just because we build for GitHub pages in the build folder -->
<!-- When running locally, it'll default to the package in node_modules -->

<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	import resume from '$lib/files/resume.pdf';

	import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';
	import worker from 'pdfjs-dist/legacy/build/pdf.worker.mjs?url';

	let pdfData;

	function downloadResume() {
		if (!pdfData) return;

		const blobUrl = URL.createObjectURL(new Blob([pdfData], { type: 'application/pdf' }));
		const atag = document.createElement('a');
		if (!atag.click) {
			console.error('a.click() not supported');
			return;
		}

		atag.href = blobUrl;
		atag.target = '_parent';

		if ('download' in atag) {
			atag.download = 'JEDUQUE.pdf';
		}

		(document.body || document.documentElement).append(atag);

		atag.click();
		atag.remove();
	}

	onMount(() => {
		pdfjs.GlobalWorkerOptions.workerSrc = worker;

		const loadTask = pdfjs.getDocument(resume);
		loadTask.promise
			.then((pdf) => {
				pdf.getData().then((data) => {
					pdfData = data;
				});
				pdf.getPage(1).then((page) => {
					let viewport = page.getViewport({ scale: 1.0 });
					let outputScale = window.devicePixelRatio || 1;

					let canvas = document.getElementById('pdf-canvas');
					let context = canvas.getContext('2d');

					canvas.width = Math.floor(viewport.width * outputScale);
					canvas.height = Math.floor(viewport.height * outputScale);
					canvas.style.width = Math.floor(viewport.width) + 'px';
					canvas.style.height = Math.floor(viewport.height) + 'px';

					var transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

					var renderContext = {
						canvasContext: context,
						transform: transform,
						viewport: viewport
					};

					page.render(renderContext);
				});
			})
			.catch((reason) => {
				console.error(reason);
			});
	});
</script>
