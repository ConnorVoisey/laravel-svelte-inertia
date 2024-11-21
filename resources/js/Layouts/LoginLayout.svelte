<script lang="ts">
    import type { Snippet } from 'svelte';

    let { children }: { children: Snippet } = $props();
</script>

<div class="grid h-svh items-center justify-center bg-surface-0">
    <!-- Page Content -->
    <main class="rounded-2xl bg-surface-2 p-8">
        {@render children()}
    </main>

    <div class="line bg-on-surface-0"></div>
</div>

<style lang="scss">
    .line {
        position: absolute;
        top: 10rem;
        height: 2px;
        width: 100%;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            transform: translateY(50%);
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background: primary(5);
            box-shadow: -0.5rem 0 1.5rem 0.5rem #fff;
            animation-duration: 3s;
            animation-name: move;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
        @keyframes move {
            from {
                left: 0%;
            }

            to {
                left: 100%;
            }
        }
    }
</style>
