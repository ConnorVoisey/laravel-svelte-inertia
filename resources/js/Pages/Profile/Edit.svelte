<script lang="ts">
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.svelte';
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

<AuthenticatedLayout>
    {#snippet header()}
        <h2 class="text-gray-800 dark:text-gray-200 text-xl font-semibold leading-tight">Profile</h2>
    {/snippet}

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
</AuthenticatedLayout>
