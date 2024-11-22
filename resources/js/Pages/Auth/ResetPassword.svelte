<script lang="ts">
    import GuestLayout from '@/Layouts/GuestLayout.svelte';
    import Input from '@/Components/Input.svelte';
    import { route } from 'momentum-trail';
    import { useForm } from '@inertiajs/svelte';

    let { email, token }: { email: string; token: string } = $props();

    const form = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    function submit(e: SubmitEvent) {
        e.preventDefault();

        $form.post(route('password.store'), {
            onFinish: () => $form.reset('password', 'password_confirmation'),
        });
    }
</script>

<svelte:head>
    <title>Reset Password</title>
</svelte:head>

<GuestLayout>
    <form onsubmit={submit}>
        <div>
            <Input
                label="Email"
                type="email"
                class="mt-1 block w-full"
                bind:value={$form.email}
                required
                autofocus
                autocomplete="username"
                error={$form.errors.email}
            />
        </div>

        <div class="mt-4">
            <Input
                label="Password"
                type="password"
                class="mt-1 block w-full"
                bind:value={$form.password}
                required
                autocomplete="new-password"
                error={$form.errors.password}
            />
        </div>

        <div class="mt-4">
            <Input
                label="Confirm Password"
                type="password"
                class="mt-1 block w-full"
                bind:value={$form.password_confirmation}
                required
                autocomplete="new-password"
                error={$form.errors.password_confirmation}
            />
        </div>

        <div class="mt-4 flex items-center justify-end">
            <button class={$form.processing && 'opacity-25'} disabled={$form.processing}>Reset Password</button>
        </div>
    </form>
</GuestLayout>
