<script lang="ts">
    import autoAnimate from '@formkit/auto-animate';
    import { route } from 'momentum-trail';
    import type Permission from '../../../schemas/public/Permissions';
    import UpdateRoleForm from './Partials/UpdateRoleForm.svelte';
    import type { RoleWithPermissions } from '@/types';
    import { SvelteSet } from 'svelte/reactivity';
    import type { FormDataConvertible } from '@inertiajs/core';
    import { useForm } from '@inertiajs/svelte';
    type Props = {
        role: RoleWithPermissions;
        permissions: Permission[];
    };
    const props: Props = $props();
    const { role, permissions }: Props = $state(props);
    const roleActivePermissionIds = $state(new SvelteSet(role.permissions.map((per) => per.id)));

    type FormBody = {
        permissionIds: number[];
    };
    const formBegining: FormBody & Record<string, FormDataConvertible> = $derived({
        permissionIds: [...roleActivePermissionIds],
    });
    const form = useForm(formBegining);

    function onsubmit() {
        console.log({ formBegining });
        $form.permissionIds = [...roleActivePermissionIds];
        $form.put(route('roles.update', { role }), {
            preserveScroll: true,
            onSuccess: () => $form.reset(),
            onError: () => {},
        });
    }
</script>

<svelte:head>
    <title>Role</title>
</svelte:head>

<div class="p-8">
    <div class="title mb-4">Update Role: {role.name}</div>
    {#if $form.errors?.permissions}
        <p class="text-error">{$form.errors.permissions}</p>
    {/if}
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Applied</th>
            </tr>
        </thead>
        <tbody>
            {#each permissions as permission}
                <tr>
                    <td>{permission.name}</td>
                    <td>
                        {#if roleActivePermissionIds.has(permission.id)}
                            <button
                                onclick={() => {
                                    roleActivePermissionIds.delete(permission.id);
                                }}>Active</button
                            >
                        {:else}
                            <button
                                onclick={() => {
                                    roleActivePermissionIds.add(permission.id);
                                }}>Inactive</button
                            >
                        {/if}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
    <button class="btn-primary" onclick={onsubmit}>Save</button>
</div>

<div class="py-12">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 overflow-hidden p-6 shadow-sm sm:rounded-lg">
            <UpdateRoleForm />
        </div>
    </div>
</div>
