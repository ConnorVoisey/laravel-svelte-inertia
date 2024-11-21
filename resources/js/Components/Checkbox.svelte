<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements';
    import { uuidv7 } from 'uuidv7';

    let {
        id = uuidv7(),
        label,
        checked = $bindable(false),
        class: className,
        ...attrs
    }: HTMLInputAttributes & {
        checked?: boolean;
        label?: string;
    } = $props();
</script>

<input
    {id}
    {...attrs}
    type="checkbox"
    bind:checked
    class="border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800 rounded shadow-sm {className}"
/>
