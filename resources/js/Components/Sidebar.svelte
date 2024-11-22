<script lang="ts">
    import { router } from '@inertiajs/svelte';
    import type { Component } from 'svelte';
    let { user = $bindable(), isOpen }: { user: { id: number } | null; isOpen: boolean } = $props();

    router.on('navigate', () => {
        isOpen = false;
    });

    const links: { href: string; label: string; icon: Component }[] = [
        {
            href: '/',
            icon: null,
            label: 'Home',
        },
    ];
</script>

<div class="aside-wrapper">
    <aside>
        <a href="/" class="logo-img"><img src="https://picsum.photos/300/200" alt="Logo" /></a>
        <input type="checkbox" id="hamburger-toggle" aria-hidden="true" bind:checked={isOpen} />
        <label for="hamburger-toggle" class="menu" aria-hidden="true">
            <svg class="open-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                ><title>open menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg
            >
            <svg class="close-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                ><title>close menu</title><path
                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                /></svg
            >
        </label>
        <nav>
            <ul>
                {#each links as link}
                    <li>
                        <a href={link.href} class:active={$page.route.id?.includes(link.basePageId)}
                            ><svelte:component this={link.icon} /><span>{link.label}</span></a
                        >
                    </li>
                {/each}
                <li>
                    <button class="btn" on:click={logout}>Logout</button>
                </li>
            </ul>
            <hr />
            <ul class="additional">
                <li>
                    <ThemeSelector bind:isDarkTheme />
                </li>
            </ul>
        </nav>
    </aside>
</div>

<style lang="scss">
    // -- start region: All styling
    .aside-wrapper {
        background-color: surface(1);
    }
    aside {
        color: on-surface(1);
        display: flex;
        justify-content: space-between;
        padding: size(4);
        position: relative;
    }
    .logo-img {
        max-width: 13rem;
        padding: size(2) 0;
        border-bottom: solid 2px primary(5);
    }
    .menu {
        svg {
            width: size(8);
            fill: on-surface(1);
        }
    }
    .additional {
        gap: size(4);
        justify-content: center;
    }
    nav {
        position: absolute;
        z-index: 20;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        gap: size(8);
        opacity: 0;
        transition: opacity 200ms;
        padding: size(8) size(4);
        backdrop-filter: blur(0.6em);
        pointer-events: none;
        background-color: surface(0, 0.8);

        ul {
            display: flex;
            flex-direction: column;
            gap: size(4) size(8);
        }
    }
    a {
        display: flex;
        align-items: flex-end;
        gap: size(4);
        position: relative;
        width: max-content;
        transition: color 200ms;
        &:hover,
        &.active {
            color: primary(5);
            :global(svg) {
                fill: primary(5);
            }
        }
        &::after {
            background-color: primary(5);
            @include pseudo;
            height: 2px;
            width: 0;
            transition: width 200ms;
            bottom: 0;
        }
        &:hover::after,
        &:focus::after {
            width: 100%;
        }
        :global(svg) {
            width: size(7);
            fill: on-surface(1);
            transition: fill 200ms;
        }
    }
    // -- end region: all styling

    // -- start region: mobile

    .close-btn {
        display: none;
    }
    #hamburger-toggle:checked {
        & ~ nav {
            opacity: 1;
            pointer-events: all;
        }
        & ~ label {
            .close-btn {
                display: flex;
            }
            .open-btn {
                display: none;
            }
        }
    }
    // -- end region mobile

    // --start region desktop
    @media (min-width: 780px) {
        .aside-wrapper {
            height: 100%;
        }
        aside {
            display: flex;
            flex-direction: column;
            gap: size(4);
        }
        label[for='hamburger-toggle'] {
            display: none;
        }
        nav {
            grid-area: nav;
            position: static;
            opacity: 1;
            pointer-events: all;
            height: max-content;
            justify-content: space-between;
            padding: 0;
            background-color: transparent;
        }
    }
    //--end region desktop
</style>
