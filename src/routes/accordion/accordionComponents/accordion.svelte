<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  export let collapsed = false;
  const activeComponentId = writable(0);

  setContext('collapsed', collapsed);
  setContext('active', activeComponentId);
</script>

<div class="accordion">
  <slot />
</div>

<style>
  .accordion {
    width: var(--accordion-width, 60ch);
    padding: var(--accordion-padding, 1rem);
    color: var(--accordion-color, hsl(220 10% 90%));
    background-color: var(--accordion-background-color, hsl(220 10% 20%));
    border-radius: var(--accordion-border-radius, 4px);
    box-shadow: var(--accordion-box-shadow, 0px 1px 20px hsl(220 10% 8%));
  }
</style>
