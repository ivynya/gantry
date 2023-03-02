import { writable } from "svelte/store";

export let example = writable({
  "id": "string",
  "name": "string",
  "organization": "string",

  "description": "string",
  "descriptionLong": "string",
  "startDate": "string",
  "endDate": "string",
  "upDate": "string",
  "tags": "array",

  "license": "array",

  "plugins": "object",

  "pastPositions": "array",

  "display": "string",
  "old": "boolean",
  "type": "array"
});