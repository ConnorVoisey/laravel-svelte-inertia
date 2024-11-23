<script lang="ts">
    import GuestLayout from '@/Layouts/GuestLayout.svelte';
    import Input from '@/Components/Input.svelte';
    import { inertia, useForm } from '@inertiajs/svelte';
    import { route } from 'momentum-trail';

    const form = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    function submit(e: SubmitEvent) {
        e.preventDefault();

        $form.post(route('register'), {
            onFinish: () => $form.reset('password', 'password_confirmation'),
        });
    }
</script>

<svelte:head>
    <title>Register</title>
</svelte:head>

<form onsubmit={submit} class="flex flex-col gap-4">
    <h1 class="title">Register</h1>
    <Input
        label="Name"
        type="text"
        bind:value={$form.name}
        error={$form.errors.name}
        required
        autofocus
        autocomplete="name"
    />
    <Input
        label="Email"
        id="email"
        type="email"
        bind:value={$form.email}
        error={$form.errors.email}
        required
        autocomplete="username"
    />
    <Input
        label="Password"
        type="password"
        bind:value={$form.password}
        error={$form.errors.password}
        required
        autocomplete="new-password"
    />
    <Input
        label="Confirm Password"
        type="password"
        bind:value={$form.password_confirmation}
        error={$form.errors.password_confirmation}
        required
        autocomplete="new-password"
    />

    <a use:inertia={{ prefetch: true }} href={route('login')} class="link"> Already registered? </a>
    <button class="btn-primary {$form.processing && 'opacity-25'}" disabled={$form.processing}> Register </button>
</form>
