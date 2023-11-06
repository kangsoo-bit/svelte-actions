import { writable } from 'svelte/store';
import type {
  CollapseContext,
  AccordionOptions,
  ActiveId,
  ActiveIdContext,
} from './types';
import { getContext, setContext } from 'svelte';

const activeComponentId = writable<ActiveId>(null);

export function setAccordionOptions({ collapse }: AccordionOptions) {
  setContext<CollapseContext>('collapse', collapse);
  setContext<ActiveIdContext>('active', activeComponentId);
}

export function getAccordionOptions() {
  return {
    collapse: getContext<CollapseContext>('collapse') ?? true,
    activeComponentId: getContext<ActiveIdContext>('active') ?? null,
  };
}
