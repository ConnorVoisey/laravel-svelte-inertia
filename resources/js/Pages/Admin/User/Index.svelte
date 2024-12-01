<script lang="ts">
    import autoAnimate from '@formkit/auto-animate';
    import type { UserWithRolesAndPermissions } from '../../../types';
    import { inertia } from '@inertiajs/svelte';
    import { route, current } from 'momentum-trail';
    type Props = {
        users: UserWithRolesAndPermissions[];
    };
    const { users }: Props = $props();
    console.log({ users });
</script>

<svelte:head>
    <title>Users</title>
</svelte:head>

<div class="p-8">
    <div class="title mb-4">List Users</div>
    <a href={route('users.create')} class="btn-primary" use:inertia={{ prefetch: true, cacheFor: 3000 }}>Create</a>
    <table>
        <thead>
            <tr>
                <th>Email</th>
                <th>Role</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {#each users as user}
                <tr>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.name}</td>
                    <td>
                        <a
                            href={route('users.show', { user })}
                            class="link"
                            use:inertia={{ prefetch: true, cacheFor: 3000 }}>Show</a
                        >
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
