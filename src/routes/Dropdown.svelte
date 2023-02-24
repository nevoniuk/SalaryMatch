<script>
    export let options = ["default"];
    export let onOptionSelected = (a) => {};
    let dropped = false;
    let selectedOption = null;
    let dropdownClick = (args) => {
        dropped = !dropped;
    }
    let selectOption = (option) => {
        selectedOption = option;
        dropped = false;
        onOptionSelected(option);
    }
</script>

<style>
    .menu-options {
        width: 100%;
        position: relative;
        /* right: 0; */
        border-radius: 5px;
        background-color: rgb(240, 240, 240);
        box-shadow: 2px 2px 2px 0px rgba(77, 77, 77, 0.4);
        margin-left:auto;
        z-index: 10;
    }
    .menu-option {
        height: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menu-divider {
        background-color: rgb(211, 211, 211);
        height: 1px;
    }
    .menu {
        /* position: relative; */
        width: 200px;
        font-size: 13px;
        height: 30px;
        margin: 15px;
    }
    .menu-open-button {
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items:center;
        background-color: rgb(250, 250, 250);
        box-shadow: 2px 2px 2px 0px rgba(77, 77, 77, 0.4);
        right: 0;
        padding-left: 20px;
        padding-right: 20px;
        height: 100%;
        border-radius: 5px;
        margin-bottom: 7px;
        width: 100%;
    }
</style>


<div class="menu">
    <button  on:click={dropdownClick} type="button" class="menu-open-button" id="menu-button" aria-expanded="true" aria-haspopup="true">
        {selectedOption == null? "Options" : selectedOption}
        <svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
    </button>
    {#if dropped}
        <div class="menu-options">
            {#each options as option}
            <div class="menu-option">
                <a on:click={() => selectOption(option)} href="">{option}</a>
            </div>
            <div class="menu-divider"/>
            {/each}
        </div>
    {/if}
</div>