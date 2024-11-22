<script lang="ts">
    import GuestLayout from '@/Layouts/GuestLayout.svelte';
    import Input from '@/Components/Input.svelte';
    import { route } from 'momentum-trail';
    import { useForm } from '@inertiajs/svelte';

    const form = useForm({
        password: '',
    });

    function submit(e: SubmitEvent) {
        e.preventDefault();

        $form.post(route('password.confirm'), {
            onFinish: () => $form.reset(),
        });
    }
</script>

<svelte:head>
    <title>Confirm Password</title>
</svelte:head>

<GuestLayout>
    <div class="text-gray-600 dark:text-gray-400 mb-4 text-sm">
        This is a secure area of the application. Please confirm your password before continuing.
    </div>

    <form onsubmit={submit}>
        <div>
            <Input
                label="Password"
                type="password"
                class="mt-1 block w-full"
                bind:value={$form.password}
                required
                autocomplete="current-password"
                autofocus
                error={$form.errors.password}
            />
        </div>

        <div class="mt-4 flex justify-end">
            <button class="ms-4 {$form.processing && 'opacity-25'}" disabled={$form.processing}>Confirm</button>
        </div>
    </form>
</GuestLayout>
