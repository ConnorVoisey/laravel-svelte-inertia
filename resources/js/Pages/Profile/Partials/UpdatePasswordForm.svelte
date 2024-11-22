<script lang="ts">
    import { useForm } from '@inertiajs/svelte';
    import Input from '@/Components/Input.svelte';
    import Transition from 'svelte-transition';
    import { route } from 'momentum-trail';

    let passwordInput: Input;
    let currentPasswordInput: Input;

    const form = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    function updatePassword(e: SubmitEvent) {
        e.preventDefault();
        $form.put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => $form.reset(),
            onError: () => {
                if ($form.errors.password) {
                    $form.reset('password', 'password_confirmation');
                    passwordInput?.focus();
                }
                if ($form.errors.current_password) {
                    $form.reset('current_password');
                    currentPasswordInput?.focus();
                }
            },
        });
    }
</script>

<section>
    <header>
        <h2 class="text-gray-900 dark:text-gray-100 text-lg font-medium">Update Password</h2>

        <p class="text-gray-600 dark:text-gray-400 mt-1 text-sm">
            Ensure your account is using a long, random password to stay secure.
        </p>
    </header>

    <form onsubmit={updatePassword} class="mt-6 space-y-6">
        <div>
            <Input
            label="Current Password"
                bind:this={currentPasswordInput}
                bind:value={$form.current_password}
                type="password"
                class="mt-1 block w-full"
                autocomplete="current-password"
                error={$form.errors.current_password}
            />
        </div>

        <div>
            <Input
                label="New Password"
                bind:this={passwordInput}
                bind:value={$form.password}
                type="password"
                class="mt-1 block w-full"
                autocomplete="new-password"
                error={$form.errors.password}
            />
        </div>

        <div>
            <Input
                label="Confirm Password"
                bind:value={$form.password_confirmation}
                type="password"
                class="mt-1 block w-full"
                autocomplete="new-password"
                error={$form.errors.password_confirmation}
            />
        </div>

        <div class="flex items-center gap-4">
            <button disabled={$form.processing}>Save</button>

            <Transition
                show={$form.recentlySuccessful}
                enter="transition ease-in-out"
                enterFrom="opacity-0"
                leave="transition ease-in-out"
                leaveFrom="opacity-0"
            >
                <p class="text-gray-600 dark:text-gray-400 text-sm transition ease-in-out">Saved.</p>
            </Transition>
        </div>
    </form>
</section>
