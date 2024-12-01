<script lang="ts">
    import autoAnimate from '@formkit/auto-animate';
    import type { UserWithRolesAndPermissions } from '../../../types';
    import { inertia } from '@inertiajs/svelte';
    import { route, current } from 'momentum-trail';
    type Props = {
        user: UserWithRolesAndPermissions;
    };
    const { user }: Props = $props();
    console.log({ user });
</script>

<svelte:head>
    <title>Users</title>
</svelte:head>

<div class="p-8">
    <div class="flex justify-between gap-4">
        <h1 class="title mb-4">List Users</h1>
        <div class="flex gap-4">
            <a href={route('users.index')} class="btn-primary" use:inertia={{ prefetch: true, cacheFor: 3000 }}>List</a>
            <a href={route('users.create')} class="btn-primary" use:inertia={{ prefetch: true, cacheFor: 3000 }}
                >Create</a
            >
            <a href={route('users.edit', { user })} class="btn-primary" use:inertia={{ prefetch: true, cacheFor: 3000 }}
                >Edit</a
            >
        </div>
    </div>
    <p>{user.name}</p>
    <p>{user.email}</p>
</div>
