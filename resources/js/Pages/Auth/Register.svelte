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

<GuestLayout>
    <form onsubmit={submit}>
        <div>
            <Input
                label="Name"
                type="text"
                class="mt-1 block w-full"
                bind:value={$form.name}
                error={$form.errors.name}
                required
                autofocus
                autocomplete="name"
            />
        </div>

        <div class="mt-4">
            <Input
                label="Email"
                id="email"
                type="email"
                class="mt-1 block w-full"
                bind:value={$form.email}
                error={$form.errors.email}
                required
                autocomplete="username"
            />
        </div>

        <div class="mt-4">
            <Input
                label="Password"
                type="password"
                class="mt-1 block w-full"
                bind:value={$form.password}
                error={$form.errors.password}
                required
                autocomplete="new-password"
            />
        </div>

        <div class="mt-4">
            <Input
                label="Confirm Password"
                type="password"
                class="mt-1 block w-full"
                bind:value={$form.password_confirmation}
                error={$form.errors.password_confirmation}
                required
                autocomplete="new-password"
            />
        </div>

        <div class="mt-4 flex items-center justify-end">
            <a
                use:inertia
                href={route('login')}
                class="text-gray-600 hover:text-gray-900 focus:ring-indigo-500 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800 rounded-md text-sm underline focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
                Already registered?
            </a>

            <button class="ms-4 {$form.processing && 'opacity-25'}" disabled={$form.processing}> Register </button>
        </div>
    </form>
</GuestLayout>
