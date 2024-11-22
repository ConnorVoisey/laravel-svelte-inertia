<script lang="ts">
    import GuestLayout from '@/Layouts/GuestLayout.svelte';
    import Input from '@/Components/Input.svelte';
    import { route } from 'momentum-trail';
    import { useForm } from '@inertiajs/svelte';

    let { status }: { status?: string } = $props();

    const form = useForm({
        email: '',
    });

    function submit(e: SubmitEvent) {
        e.preventDefault();

        $form.post(route('password.email'));
    }
</script>

<svelte:head>
    <title>Forgot Password</title>
</svelte:head>

<GuestLayout>
    <div class="text-gray-600 dark:text-gray-400 mb-4 text-sm">
        Forgot your password? No problem. Just let us know your email address and we will email you a password reset
        link that will allow you to choose a new one.
    </div>

    {#if status}
        <div class="text-green-600 dark:text-green-400 mb-4 text-sm font-medium">
            {status}
        </div>
    {/if}

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

        <div class="mt-4 flex items-center justify-end">
            <button class={$form.processing && 'opacity-25'} disabled={$form.processing}>
                Email Password Reset Link
            </button>
        </div>
    </form>
</GuestLayout>
