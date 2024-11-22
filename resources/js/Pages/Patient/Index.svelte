<script lang="ts">
    import autoAnimate from '@formkit/auto-animate';
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.svelte';
    import type Patients from '../../schemas/public/Patients';
    import UpdatePatientForm from './Partials/UpdatePatientForm.svelte';
    type Props = {
        patients: Patients[];
    };
    const { patients }: Props = $props();
</script>

<svelte:head>
    <title>Patient</title>
</svelte:head>

<AuthenticatedLayout>
    <div class="p-8">
        <div class="title mb-4">Patients</div>
        <ul class="flex flex-col gap-4" use:autoAnimate>
            {#each patients as patient}
                <li class="text-on-surface-2">
                    <p>First Name: {patient.first_name}</p>
                    <p>Last Name: {patient.last_name}</p>
                    <p>Email: {patient.email}</p>
                </li>
            {/each}
        </ul>
    </div>

    <div class="py-12">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden p-6 shadow-sm sm:rounded-lg">
                <UpdatePatientForm />
            </div>
        </div>
    </div>
</AuthenticatedLayout>
