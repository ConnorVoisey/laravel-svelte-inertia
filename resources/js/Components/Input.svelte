<script lang="ts">
    import { onMount } from 'svelte';
    import type { HTMLInputAttributes } from 'svelte/elements';
    import { uuidv7 } from 'uuidv7';

    let {
        id = uuidv7(),
        name = id,
        label,
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

<div class="flex flex-col">
    {#if label}
        <label for={id} class="label">{label}</label>
    {/if}
    <input
        {id}
        {name}
        {...attrs}
        class="rounded-md border-on-surface-2 bg-surface-0 shadow-sm focus:border-primary-5 focus:ring-primary-5"
        bind:value
        bind:this={input}
    />
    {#if error}
        <p class="error-text">
            {error}
        </p>
    {/if}
</div>

<style lang="scss">
    input {
        transition: border 200ms;
    }
</style>
