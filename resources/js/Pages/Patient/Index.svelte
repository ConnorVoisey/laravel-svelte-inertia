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
    {#snippet header()}
        <h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Patient</h2>
    {/snippet}

    <div class="py-12">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div class="p-6 text-gray-900 dark:text-gray-100">Patients</div>
                <ul class="flex flex-col gap-4 p-6" use:autoAnimate>
                    {#each patients as patient}
                        <li class="text-gray-100">
                            <p>First Name: {patient.first_name}</p>
                            <p>Last Name: {patient.last_name}</p>
                            <p>Email: {patient.email}</p>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>

    <div class="py-12">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="overflow-hidden bg-white p-6 shadow-sm sm:rounded-lg dark:bg-gray-800">
                <UpdatePatientForm />
            </div>
        </div>
    </div>
</AuthenticatedLayout>
