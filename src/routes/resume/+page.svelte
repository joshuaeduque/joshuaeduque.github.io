<!-- The data prop should be an empty string by default but the compiler requires it for some reason -->
<PdfViewer
	url={resume}
	data={''}
	showButtons={['rotate', 'download']}
	showTopButton={false}
	downloadFileName={'JOSHUAEDUQUE RESUME.pdf'}></PdfViewer>

<script>
	import PdfViewer from 'svelte-pdf';

	import resume from '$lib/files/resume.pdf'
</script>
