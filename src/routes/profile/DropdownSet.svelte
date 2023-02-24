<script>
    export let groupTitle = "Default";
    export let prefSelections = [{name: "default_title", options: ["default_option"], onOptionSelected: (a)=>{}}];
	import Dropdown from "../Dropdown.svelte";

</script>

<style>
    .pref-type-title {
        text-align: left;
        margin-left: 10px;
        font-size: 25px;
        margin-bottom: 20px;
    }
    .pref-title {
        text-align: left;
        margin-left: 20px;
        font-size: 18px;
    }

    .prefs-container {
        width: 500px;
        margin: 10px;
    }
    .pref-type-container {
        display: flex;
        flex-wrap: wrap;
    }
</style>


<div class="prefs-container">
    <h1 class="pref-type-title">{groupTitle} Preferences</h1>
    <div class="pref-type-container">
        
        {#each prefSelections as prefSelection}
        <div>
            <h1 class="pref-title">{prefSelection.name}</h1>
            <Dropdown options={prefSelection.options} onOptionSelected={prefSelection.onOptionSelected}/>
        </div>
        {/each}
    </div>
</div>