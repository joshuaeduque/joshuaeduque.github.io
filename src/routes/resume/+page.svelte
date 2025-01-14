<div class="p-4">
	<p class="font-notosansmono-condensed font-bold">resume</p>
	<p class="font-notosansmono-condensed">
		You may have to scroll / zoom depending on your screen size
	</p>
	<canvas id="pdf-canvas"></canvas>
</div>

<!-- NOTE npm will throw an error about importing pdfjs when building -->
<!-- This is just because we build for GitHub pages in the build folder -->
<!-- When running locally, it'll default to the package in node_modules -->

<script>
	import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

	import resume from '$lib/files/resume.pdf';

	import worker from 'pdfjs-dist/legacy/build/pdf.worker.mjs?url';

	pdfjs.GlobalWorkerOptions.workerSrc = worker;

	const loadTask = pdfjs.getDocument(resume);
	loadTask.promise
		.then((pdf) => {
			pdf.getPage(1).then((page) => {
				let viewport = page.getViewport({ scale: 1.0 });
				let outputScale = window.devicePixelRatio || 1;

				let canvas = document.getElementById('pdf-canvas');
				// @ts-ignore
				let context = canvas.getContext('2d');

				// @ts-ignore
				canvas.width = Math.floor(viewport.width * outputScale);
				// @ts-ignore
				canvas.height = Math.floor(viewport.height * outputScale);
				// @ts-ignore
				canvas.style.width = Math.floor(viewport.width) + 'px';
				// @ts-ignore
				canvas.style.height = Math.floor(viewport.height) + 'px';

				var transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

				var renderContext = {
					canvasContext: context,
					transform: transform,
					viewport: viewport
				};

				// @ts-ignore
				page.render(renderContext);
			});
		})
		.catch((reason) => {
			console.error(reason);
		});
</script>
