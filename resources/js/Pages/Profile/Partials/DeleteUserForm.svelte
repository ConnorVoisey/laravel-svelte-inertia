<script lang="ts">
    import { useForm } from '@inertiajs/svelte';
    import Modal from '@/Components/Modal.svelte';
    import Input from '@/Components/Input.svelte';
    import { route } from 'momentum-trail';

    let confirmingUserDeletion = $state(false);
    let passwordInput: Input;

    const form = useForm({
        password: '',
    });

    function closeModal() {
        confirmingUserDeletion = false;
        $form.reset();
    }

    function confirmUserDeletion() {
        confirmingUserDeletion = true;
        setTimeout(() => passwordInput?.focus(), 250);
    }

    function deleteUser() {
        $form.delete(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput?.focus(),
            onFinish: () => $form.reset(),
        });
    }
</script>

<section class="space-y-6">
    <header>
        <h2 class="text-gray-900 dark:text-gray-100 text-lg font-medium">Delete Account</h2>

        <p class="text-gray-600 dark:text-gray-400 mt-1 text-sm">
            Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting
            your account, please download any data or information that you wish to retain.
        </p>
    </header>

    <button onclick={confirmUserDeletion}>Delete Account</button>

    <Modal show={confirmingUserDeletion} onclose={closeModal}>
        <div class="p-6">
            <h2 class="text-gray-900 dark:text-gray-100 text-lg font-medium">
                Are you sure you want to delete your account?
            </h2>

            <p class="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                Once your account is deleted, all of its resources and data will be permanently deleted. Please enter
                your password to confirm you would like to permanently delete your account.
            </p>

            <div class="mt-6">
                <Input
                    label="Password"
                    bind:this={passwordInput}
                    bind:value={$form.password}
                    type="password"
                    class="mt-1 block w-3/4"
                    placeholder="Password"
                    onkeyup={(e: KeyboardEvent) => e.key === 'Enter' && deleteUser()}
                    error={$form.errors.password}
                />
            </div>

            <div class="mt-6 flex justify-end">
                <button onclick={closeModal}>Cancel</button>

                <button
                    class="ms-3 {$form.processing && 'opacity-25'}"
                    disabled={$form.processing}
                    onclick={deleteUser}
                >
                    Delete Account
                </button>
            </div>
        </div>
    </Modal>
</section>
