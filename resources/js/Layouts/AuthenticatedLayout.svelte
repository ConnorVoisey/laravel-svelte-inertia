<script lang="ts">
    import type { Snippet } from 'svelte';
    import Sidebar from '@/Components/Sidebar.svelte';
    import type { User } from '../types';

    let { children, user }: { children: Snippet; user: User } = $props();

    let showingNavigationDropdown = $state(false);
</script>

<div class="wrapper">
    <div class="side-bar">
        <Sidebar isOpen={true} />
    </div>

    <!-- Page Content -->
    <div class="h-full overflow-auto">
        <main class="content-width">
            {@render children()}
        </main>
    </div>

    <div class="line bg-on-surface-0"></div>
</div>

<style lang="scss">
    .wrapper {
        height: 100svh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: max-content 1fr;
    }
    @media (min-width: 780px) {
        .side-bar {
            margin-bottom: 0;
        }
        .wrapper {
            grid-template-columns: max-content 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: 'side-bar content';
        }
    }
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
