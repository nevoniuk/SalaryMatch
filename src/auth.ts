import { persisted } from "svelte-local-storage-store";

export const authToken = persisted<string>("authToken", "");
export const loggedIn = persisted<boolean>("loggedIn", false);