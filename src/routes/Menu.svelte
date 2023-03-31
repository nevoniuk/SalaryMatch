<script>
    export let options = ["default"];
    export let dropped = false;
	export let header;
</script>

<style>
    .menu-options {
        width: 100%;
        position: relative;
        /* right: 0; */
        border-radius: 5px;
        background-color: rgb(240, 240, 240);
        box-shadow: 2px 2px 2px 0px rgba(77, 77, 77, 0.4);
        z-index: 10;
		height: 220px;
		padding: 5px;
    }
    .menu-option {
        height: 220px;
        width: 100%;
        display: flex;
        align-items: center;
		padding-top: 0px;
    }
    .menu {
        /* position: relative; */
        width: 160px;
        font-size: 13px;
        height: 1px;
    }
	#menu-options > * {
		padding: 2px;
	}
   
</style>


<div class="menu">
    {#if dropped}
        <div class="menu-options">
            {#each options as option}
            <div class="menu-option">
                <p>{option}</p>
            </div>
            {/each}
        </div>
    {/if}
</div>