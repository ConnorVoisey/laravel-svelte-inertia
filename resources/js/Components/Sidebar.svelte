<script lang="ts">
    import { inertia, router, page } from '@inertiajs/svelte';
    import type { Component } from 'svelte';
    import ThemeSelector from './ThemeSelector.svelte';
    import { route } from '../../../vendor/tightenco/ziggy/src/js';
    import IconHome from '~icons/carbon/home';
    import IconHospitalBed from '~icons/carbon/hospitalBed';
    import IconUser from '~icons/carbon/user';

    let { isOpen }: { user: { id: number } | null; isOpen: boolean } = $props();

    type Link = { href: string; label: string; icon: Component; isActive: () => boolean };
    const links: Link[] = [
        {
            href: '/',
            icon: IconHome,
            label: 'Home',
            isActive: () => $page.url === '/',
        },
        {
            href: '/patient',
            icon: IconHospitalBed,
            label: 'Patient',
            isActive: () => $page.url.toLowerCase().startsWith('/patient'),
        },
    ];
</script>

{#snippet icon(link: Link)}
    <a href={link.href} use:inertia={{ prefetch: true, cacheFor: 3000 }} class:active={link.isActive()}>
        <link.icon width="100%" height="100%" />
        <span>{link.label}</span>
    </a>
{/snippet}
<div class="aside-wrapper">
    <aside>
        <a href="/" class="logo-img"
            ><img src="https://picsum.photos/200/50" alt="Logo" class="w-[200px] rounded-lg" /></a
        >
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
                        {@render icon(link)}
                    </li>
                {/each}
            </ul>
            <hr />
            <ul class="additional">
                <li>
                    <ThemeSelector />
                </li>
                {#if $page.props.auth?.user == null}
                    <a href={route('login')}>Log In</a>
                {:else}
                    <p>{$page.props.auth.user.name}</p>
                    {@render icon({
                        href: '/profile',
                        label: 'Profile',
                        icon: IconUser,
                        isActive: () => $page.url.toLowerCase().startsWith('/profile'),
                    })}
                    <button class="btn" onclick={() => router.post('logout')}>Log Out</button>
                {/if}
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
        padding: size(2) size(4);
        position: relative;
    }
    .logo-img {
        max-width: 13rem;
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
        gap: size(4);
        opacity: 0;
        transition: opacity 200ms;
        padding: size(4) size(4);
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
    #hamburger-toggle {
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
            padding: size(4);
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
            backdrop-filter: none;
        }
    }
    //--end region desktop
</style>
