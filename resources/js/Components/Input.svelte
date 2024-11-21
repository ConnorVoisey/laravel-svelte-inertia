<script lang="ts">
    import { onMount } from 'svelte';
    import type { HTMLInputAttributes } from 'svelte/elements';
    import { uuidv7 } from 'uuidv7';

    let {
        id = uuidv7(),
        name = id,
        label,
        class: className,
        value = $bindable(),
        error,
        ...attrs
    }: HTMLInputAttributes & {
        value?: string | null;
        label?: string;
        id?: string;
        error?: string;
    } = $props();

    let input: HTMLInputElement;

    export function focus() {
        input?.focus();
    }

    onMount(() => {
        if (attrs.autofocus && input) {
            input.focus();
        }
    });
</script>

<div>
    {#if label}
        <label for={id} class="text-sm font-medium text-on-surface-1 {className}">{label}</label>
    {/if}
    <input
        {id}
        {name}
        {...attrs}
        class="rounded-md border-on-surface-2 bg-surface-1 shadow-sm focus:border-primary-5 focus:ring-primary-5 {className}"
        bind:value
        bind:this={input}
    />
    {#if error}
        <p class="text-sm text-error-5">
            {error}
        </p>
    {/if}
</div>
