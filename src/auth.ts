import { persisted } from "svelte-local-storage-store";

export const authToken = persisted("authToken", "");