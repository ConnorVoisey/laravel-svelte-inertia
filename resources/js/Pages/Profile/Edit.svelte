<script lang="ts">
    import DeleteUserForm from './Partials/DeleteUserForm.svelte';
    import UpdatePasswordForm from './Partials/UpdatePasswordForm.svelte';
    import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.svelte';

    let {
        mustVerifyEmail,
        status,
    }: {
        mustVerifyEmail?: boolean;
        status?: string;
    } = $props();
</script>

<svelte:head>
    <title>Profile</title>
</svelte:head>

<div class="py-12">
    <div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 p-4 shadow sm:rounded-lg sm:p-8">
            <UpdateProfileInformationForm {mustVerifyEmail} {status} />
        </div>

        <div class="bg-white dark:bg-gray-800 p-4 shadow sm:rounded-lg sm:p-8">
            <UpdatePasswordForm />
        </div>

        <div class="bg-white dark:bg-gray-800 p-4 shadow sm:rounded-lg sm:p-8">
            <DeleteUserForm />
        </div>
    </div>
</div>
