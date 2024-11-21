<script lang="ts">
    import { useForm } from '@inertiajs/svelte';
    import InputError from '@/Components/InputError.svelte';
    import InputLabel from '@/Components/InputLabel.svelte';
    import PrimaryButton from '@/Components/PrimaryButton.svelte';
    import TextInput from '@/Components/TextInput.svelte';
    import Transition from 'svelte-transition';
    import type { PatientsInitializer, PatientsMutator } from '../../../schemas/public/Patients';
    import { route } from 'momentum-trail';
    import type { FormDataConvertible } from '@inertiajs/core';

    const { first_name = $bindable(), last_name = $bindable(''), email = $bindable('') }: PatientsMutator = $props();

    const formBegining: PatientsInitializer & Record<string, FormDataConvertible> = {
        first_name,
        last_name,
        email,
    };
    const form = useForm(formBegining);

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
        <div>
            <InputLabel for="first_name" value="First Name" />

            <TextInput id="first_name" bind:value={$form.first_name} type="text" class="mt-1 block w-full" />

            <InputError message={$form.errors.first_name} class="mt-2" />
        </div>
        <div>
            <InputLabel for="last_name" value="Last Name" />
            <TextInput id="last_name" bind:value={$form.last_name} type="text" class="mt-1 block w-full" />
            <InputError message={$form.errors.last_name} class="mt-2" />
        </div>

        <div>
            <InputLabel for="email" value="Email" />

            <TextInput
                id="email"
                bind:value={$form.email}
                type="email"
                class="mt-1 block w-full"
                autocomplete="email"
            />

            <InputError message={$form.errors.password} class="mt-2" />
        </div>

        <div class="flex items-center gap-4">
            <PrimaryButton disabled={$form.processing}>Save</PrimaryButton>

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
