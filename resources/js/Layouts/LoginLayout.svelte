<script lang="ts">
    import type { Snippet } from 'svelte';

    let { children }: { children: Snippet } = $props();
</script>

<div class="grid h-svh items-center justify-center bg-surface-0">
    <!-- Page Content -->
    <main class="rounded-2xl bg-surface-2 p-8">
        {@render children()}
    </main>
</div>
