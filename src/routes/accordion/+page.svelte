<script lang="ts">
  import { Accordion, AccordionItem } from './accordionComponents';

  const items = [
    { item: 'item1', content: 'content1' },
    { item: 'item2', content: 'content2' },
    { item: 'item3', content: 'content3' },
    { item: 'item4', content: 'content4' },
    { item: 'item5', content: 'content5' },
    { item: 'item6', content: 'content6' },
  ];
</script>

<Accordion collapse>
  {#each items as item}
    <AccordionItem>
      <div slot="item">{item.item}</div>
      <div slot="content">{item.content}</div>
    </AccordionItem>
  {/each}
</Accordion>
