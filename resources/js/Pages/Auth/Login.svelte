<script lang="ts">
    import Checkbox from '@/Components/Checkbox.svelte';
    import Input from '@/Components/Input.svelte';
    import { inertia, useForm } from '@inertiajs/svelte';
    import { route } from 'momentum-trail';

    let {
        canResetPassword,
        status,
    }: {
        canResetPassword?: boolean;
        status?: string;
    } = $props();

    const form = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e: SubmitEvent) => {
        e.preventDefault();

        $form.post(route('login'), {
            onFinish: () => $form.reset('password'),
        });
    };
</script>

<svelte:head>
    <title>Log in</title>
</svelte:head>

{#if status}
    <div class="text-green-600 mb-4 text-sm font-medium">
        {status}
    </div>
{/if}

<form onsubmit={submit} class="flex flex-col gap-4">
    <h1 class="title">Login</h1>
    <Input
        type="email"
        class="mt-1 block w-full"
        bind:value={$form.email}
        required
        autofocus
        autocomplete="username"
        label="Email"
        error={$form.errors.email}
    />
    <Input
        label="Password"
        id="password"
        type="password"
        class="mt-1 block w-full"
        bind:value={$form.password}
        required
        autocomplete="current-password"
        error={$form.errors.password}
    />

    <div class="block">
        <label class="flex items-center">
            <Checkbox name="remember" bind:checked={$form.remember} />
            <span class="text-gray-600 dark:text-gray-400 ms-2 text-sm">Remember me</span>
        </label>
    </div>

    <div class="mt-4 flex items-center justify-between">
        <a
            href="/register"
            use:inertia
            class="text-gray-600 hover:text-gray-900 focus:ring-indigo-500 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800 rounded-md text-sm underline focus:outline-none focus:ring-2 focus:ring-offset-2"
            >Register</a
        >
        {#if canResetPassword}
            <a
                use:inertia
                href={route('password.request')}
                class="text-gray-600 hover:text-gray-900 focus:ring-indigo-500 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800 rounded-md text-sm underline focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
                Forgot your password?
            </a>
        {/if}

        <button class="ms-4 {$form.processing && 'opacity-25'}" disabled={$form.processing}>Log in</button>
    </div>
</form>
