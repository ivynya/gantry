import { writable } from "svelte/store";

export let example = writable({
  id: 'string',
  name: 'string',
  description: 'string',
  longDescription: 'string',
  startDate: 'string',
  endDate: 'string',
  tags: 'array',
  type: 'array'
});