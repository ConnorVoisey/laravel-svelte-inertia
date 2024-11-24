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

<div class="py-8">
    <div class="mx-auto max-w-7xl space-y-8 sm:px-6 lg:px-8">
        <div class="card">
            <UpdateProfileInformationForm {mustVerifyEmail} {status} />
        </div>

        <div class="card">
            <UpdatePasswordForm />
        </div>

        <div class="card">
            <DeleteUserForm />
        </div>
    </div>
</div>
