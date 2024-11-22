<script lang="ts">
    import { inertia, page, useForm } from '@inertiajs/svelte';
    import Input from '@/Components/Input.svelte';
    import Transition from 'svelte-transition';
    import { route } from 'momentum-trail';

    let {
        mustVerifyEmail,
        status,
    }: {
        mustVerifyEmail?: boolean;
        status?: string;
    } = $props();

    const user = $page.props.auth.user;
    const form = useForm({
        name: user.name,
        email: user.email,
    });

    function submit(e: SubmitEvent) {
        e.preventDefault();
        $form.patch(route('profile.update'));
    }
</script>

<section>
    <header>
        <h2 class="text-gray-900 dark:text-gray-100 text-lg font-medium">Profile Information</h2>

        <p class="text-gray-600 dark:text-gray-400 mt-1 text-sm">
            Update your account's profile information and email address.
        </p>
    </header>

    <form onsubmit={submit} class="mt-6 space-y-6">
        <div>
            <Input
                label="Name"
                type="text"
                class="mt-1 block w-full"
                bind:value={$form.name}
                required
                autofocus
                autocomplete="name"
                error={$form.errors.name}
            />
        </div>

        <div>
            <Input
                label="Email"
                type="email"
                class="mt-1 block w-full"
                bind:value={$form.email}
                required
                autocomplete="username"
                error={$form.errors.email}
            />
        </div>

        {#if mustVerifyEmail && user.email_verified_at === null}
            <p class="text-gray-800 dark:text-gray-200 mt-2 text-sm">
                Your email address is unverified.
                <button
                    use:inertia={{ href: route('verification.send'), method: 'post' }}
                    class="text-gray-600 hover:text-gray-900 focus:ring-indigo-500 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800 rounded-md text-sm underline focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                    Click here to re-send the verification email.
                </button>
            </p>

            {#if status === 'verification-link-sent'}
                <div class="text-green-600 dark:text-green-400 mt-2 text-sm font-medium">
                    A new verification link has been sent to your email address.
                </div>
            {/if}
        {/if}

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
