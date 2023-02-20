import {writable, type Writable} from "svelte/store"
class CityStore {
    constructor(
        public city: Writable<string> = writable('')
    ) { }
}

// Export a single citystore object
export const cityStore = new CityStore();