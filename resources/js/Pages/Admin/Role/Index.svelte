<script lang="ts">
    import autoAnimate from '@formkit/auto-animate';
    import type { RoleWithPermissions } from '../../../types';
    import UpdateRoleForm from './Partials/UpdateRoleForm.svelte';
    import { inertia } from '@inertiajs/svelte';
    import { route, current } from 'momentum-trail';
    type Props = {
        roles: RoleWithPermissions[];
    };
    const { roles }: Props = $props();
    console.log({ roles });
</script>

<svelte:head>
    <title>Roles</title>
</svelte:head>

<div class="p-8">
    <div class="title mb-4">List Roles</div>
    <ul class="flex flex-col gap-4" use:autoAnimate>
        {#each roles as role}
            <li class="text-on-surface-2">
                <a class="link" use:inertia={{ prefetch: true, cacheFor: 3000 }} href={route('roles.edit', role)}>
                    <p>{role.name} {role.permissions.length} Permissions</p>
                </a>
            </li>
        {/each}
    </ul>
</div>

<div class="py-12">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 overflow-hidden p-6 shadow-sm sm:rounded-lg">
            <UpdateRoleForm />
        </div>
    </div>
</div>
