<script lang="ts">
    import { useForm } from '@inertiajs/svelte';
    import Input from '@/Components/Input.svelte';
    import Transition from 'svelte-transition';
    import type { PatientsInitializer, PatientsMutator } from '../../../schemas/public/Patients';
    import { route } from 'momentum-trail';
    import type { FormDataConvertible } from '@inertiajs/core';

    const { first_name = $bindable(), last_name = $bindable(''), email = $bindable('') }: PatientsMutator = $props();

    const formBegining: PatientsInitializer & Record<string, FormDataConvertible> = {
        first_name,
        last_name,
        email,
        arr: [1, 2, 3],
        obj: {
            foo: {
                nested: true,
            },
            bar: [1, 2, 3],
        },
        avatar: null,
    };
    const form = useForm(formBegining);
    let file: File;

    function onsubmit(e: SubmitEvent) {
        e.preventDefault();
        $form.post(route('patient.store'), {
            preserveScroll: true,
            onSuccess: () => $form.reset(),
            onError: () => {
                // if ($form.errors.password) {
                //     $form.reset('password', 'password_confirmation');
                //     passwordInput?.focus();
                // }
                // if ($form.errors.current_password) {
                //     $form.reset('current_password');
                //     currentPasswordInput?.focus();
                // }
            },
        });
    }
</script>

<section>
    <form {onsubmit} class="space-y-6">
        <input type="file" oninput={(e) => ($form.avatar = e.target.files[0])} />
        {#if $form.progress}
            <progress value={$form.progress.percentage} max="100">
                {$form.progress.percentage}%
            </progress>
        {/if}

        <Input
            label="First Name"
            error={$form.errors.first_name}
            bind:value={$form.first_name}
            type="text"
            class="mt-1 block w-full"
        />
        <Input
            label="Last Name"
            error={$form.errors.last_name}
            bind:value={$form.last_name}
            type="text"
            class="mt-1 block w-full"
        />
        <Input
            label="Email"
            error={$form.errors.email}
            bind:value={$form.email}
            type="email"
            class="mt-1 block w-full"
            autocomplete="email"
        />

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
