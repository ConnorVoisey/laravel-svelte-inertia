<script lang="ts">
    import Loading from '@/Components/Loading.svelte';
    import type { Snippet } from 'svelte';
    import { router } from '@inertiajs/svelte';

    let isLoading = $state(false);
    router.on('start', (event) => {
        console.log({ on: 'start', event });
        isLoading = true;
    });

    router.on('finish', (event) => {
        console.log({ on: 'finish', event });
        isLoading = false;
    });

    let { children }: { children: Snippet } = $props();
</script>

<div class="grid h-svh items-center justify-center bg-surface-0">
    {#if isLoading}
        <Loading />
    {/if}
    <!-- Page Content -->
    <main class="rounded-2xl bg-surface-2 p-8">
        {@render children()}
    </main>
</div>

<style>
    main {
        min-width: min(100vw, 350px);
        max-width: 500px;
    }
</style>
