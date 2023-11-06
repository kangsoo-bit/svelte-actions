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

<Accordion collapsed>
  <AccordionItem>
    <div slot="item">Item 1</div>
    <div slot="content">content 1</div>
  </AccordionItem>
  <AccordionItem>
    <div slot="item">Item 2</div>
    <div slot="content">content 2</div>
  </AccordionItem>
  <AccordionItem>
    <div slot="item">Item 3</div>
    <div slot="content">content 3</div>
  </AccordionItem>
  <AccordionItem>
    <div slot="item">Item 4</div>
    <div slot="content">content 4</div>
  </AccordionItem>
</Accordion>
