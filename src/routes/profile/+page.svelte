<script>
	import Dropdown from "../Dropdown.svelte";
    import DropdownSet from "./DropdownSet.svelte";

    const preferences = new Object();

    const onMainOptionChanged = (prefName, option) => {
        preferences[prefName] = option;
    };

    const prefSelections = {
        "temperature": {name: "Temperature", options: ["Hot", "Mild", "Cold"], onOptionSelected: null},
        "humidity": {name: "Humidity", options: ["Wet", "Mild", "Dry"], onOptionSelected: null},
        "sunlight": {name: "Sunlight", options: ["Sunny", "Mild", "Shady"], onOptionSelected: null},
        "demographics": {name: "Demographics", options: ["A", "B", "C"], onOptionSelected: null},
        "salary": {name: "Salary", options: ["4 Figure", "5 Figure", "6 Figure"], onOptionSelected: null},
        "pto": {name: "PTO", options: ["High", "Medium", "Low"], onOptionSelected: null}
    };

    // make every pref selection have its reactive function use the "onMainOptionChanged" function
    for (const key in prefSelections) {
        prefSelections[key].onOptionSelected = (option) => onMainOptionChanged(key, option);
    }

    let onSave = () => {
        // save each item in preferences
        // note that every kind of preference (e.g., "pto") might not be in it
    };


</script>

<style>
    .prefs.card {
        width: 100%;
    }
    .main-title {
        margin-top: 25px;
        margin-bottom: 40px;
        margin-left: 60px;
        text-align: left;
        font-size: 40px;
        font-weight: bold;
    }
    .card-content {
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        width: 1050px;
    }

	@media (max-width: 1100px) {
		.card-content {
            width: 100%;
		}
	}
    .save-button {
        margin-left: auto;
        margin-right: 20px;
        background-color: rgb(174, 174, 232);
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 5px;
        box-shadow: 2px 2px 3px 0px rgba(75, 75, 75, 0.5);
    }

</style>

<h1 class="main-title">
    Your Profile
</h1>

<div class="prefs card">
    <div class="card-content">
        <DropdownSet groupTitle={"Weather"} prefSelections={[
            prefSelections["temperature"],
            prefSelections["humidity"],
            prefSelections["sunlight"]
        ]}  />
        <DropdownSet groupTitle={"Company"} prefSelections={[
            prefSelections["demographics"],
            prefSelections["salary"],
            prefSelections["pto"]
        ]}/>
        <button class="save-button" on:click={onSave}>
            <p>Save</p>
        </button>
    </div>
</div>
