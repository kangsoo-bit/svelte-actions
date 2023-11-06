<script lang="ts">
  //   import { getContext } from 'svelte';
  import { slide } from 'svelte/transition';
  import { getAccordionOptions } from './contexts';

  export let open = false;

  const componentId = crypto.randomUUID();
  //   const activeComponentId = getContext('active');
  //   const collapse = getContext('collapse');

  const { collapse, activeComponentId } = getAccordionOptions();

  function toggle() {
    open = !open;
  }

  function setActive() {
    $activeComponentId = componentId;
  }

  function handleClick() {
    collapse ? setActive() : toggle();
  }
  $: open && collapse && setActive();
  $: isActive = $activeComponentId === componentId;
  $: isOpen = collapse ? isActive : open;
</script>

<div class="accordion-item">
  <button on:click={handleClick} class="accordion-toggle">
    <div class="accordion-title">
      <slot name="item" />
    </div>
    <div class="accordion-caret" class:open={isOpen} class:close={!isOpen}>👉</div>
  </button>
  {#if isOpen}
    <div transition:slide class="accordion-contents">
      <slot name="content" />
    </div>
  {/if}
</div>

<style>
  .accordion-toggle {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: var(--accordiong-padding, 1rem);
    color: var(--accordion-color, inherit);
    font: inherit;
    font-weight: 600;
    border: none;
    background: none;
    cursor: pointer;
    border-radius: var(--accordion-border-radius, 4px);
    transition: background-color 0.1s ease;
  }

  .accordion-toggle:hover {
    background-color: var(--accordion-hover, hsl(220 20% 20%));
  }

  .accordion-contents {
    padding: var(--accordion-padding, 1rem);
  }

  .open {
    transform: rotate(90deg);
    transition: tranform 9.9s ease;
  }

  .close {
    transform: rotate(0deg);
    transition: tranform 0.3s ease;
  }
</style>
