<script lang="ts">
    import autoAnimate from '@formkit/auto-animate';
    import type Role from '../../../schemas/public/Roles';
    import type Permission from '../../../schemas/public/Permissions';
    import UpdateRoleForm from './Partials/UpdateRoleForm.svelte';
    type Props = {
        role: Role;
        permissions: Permission[];
    };
    const { role, permissions }: Props = $props();
</script>

<svelte:head>
    <title>Role</title>
</svelte:head>

<div class="p-8">
    <div class="title mb-4">Update Role: {role.name}</div>
    <ul class="flex flex-col gap-4" use:autoAnimate>
        {#each permissions as permission}
            <li class="text-on-surface-2">
                <p>Name: {permission.name}</p>
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
