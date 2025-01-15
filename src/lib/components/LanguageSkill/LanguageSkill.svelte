<script>
    let { text, children } = $props();
</script>

<div class="w-fit flex gap-1 items-center">
    <div class="w-8">
        {@render children()}
    </div>
    <p class="font-notosansmono-condensed">{text}</p>
</div>