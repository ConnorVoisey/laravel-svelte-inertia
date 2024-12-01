<script lang="ts">
    import autoAnimate from '@formkit/auto-animate';
    import { route } from 'momentum-trail';
    import type Permission from '../../../schemas/public/Permissions';
    import UpdateForm from './Partials/UpdateForm.svelte';
    import type { RoleWithPermissions } from '@/types';
    import { SvelteSet } from 'svelte/reactivity';
    import type { FormDataConvertible } from '@inertiajs/core';
    import { useForm } from '@inertiajs/svelte';
    import type { UsersForm } from './types';
    type Props = {
        roles: RoleWithPermissions[];
    };
    let form: UsersForm = $state(
        useForm({
            name: '',
            email: '',
        }),
    );

    function onsubmit(e: SubmitEvent) {
        e.preventDefault();
        $form.post(route('users.store'));
    }
</script>

<svelte:head>
    <title>User</title>
</svelte:head>

<form {onsubmit} class="flex flex-col gap-4 p-8">
    <h1 class="title">Create User</h1>
</form>

<div class="py-12">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 overflow-hidden p-6 shadow-sm sm:rounded-lg">
            <UpdateForm {onsubmit} bind:form />
        </div>
    </div>
</div>
