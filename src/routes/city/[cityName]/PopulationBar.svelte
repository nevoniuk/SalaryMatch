<script>
    export let total = 100;
    export let subsetTotal = 90;
    export let subsetName = "Default";
    let frac = subsetTotal / total;
    let displayNumInBar = frac > 0.04;
    export let showSubsetTotal = true;
</script>

<style>
    .bar-outer {
        width: 300px;
        height: 17px;
        background-color: lightskyblue;
        border-radius: 7px;
        margin: 5px;
    }
    .bar-inner {
        height: 100%;
        border-radius: 7px;
        background-color: blue;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .subset-count-text {
        font-size: 13px;
    }
    .inner-bar-text {
        color: white;
        font-size: 10px;
    }
</style>

<div>
    <p>{subsetName} Population 
        {#if showSubsetTotal}
        - 
        <span class="subset-count-text">{Math.ceil(subsetTotal)}k</span>
        {/if}
    </p>
    <div class="bar-outer">
        <div class="bar-inner" style="width:{(frac) * 100}%">
            {#if displayNumInBar}
                <p class="inner-bar-text">{Math.ceil(frac * 100)}%</p>
            {/if}
        </div>
    </div>
</div>