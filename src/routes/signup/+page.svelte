<script>
    import { Button } from "flowbite-svelte";
    import DropdownSet from "./DropdownSet.svelte";

    const preferences = new Object();

    const onMainOptionChanged = (prefName, option) => {
        preferences[prefName] = option;
    };

    const prefSelections = {
        "temperature": {name: "Temperature", options: ["Hot", "Mild", "Cold"], onOptionSelected: null},
        "humidity": {name: "Humidity", options: ["Wet", "Mild", "Dry"], onOptionSelected: null},
        "sunlight": {name: "Sunlight", options: ["Sunny", "Mild", "Shady"], onOptionSelected: null},
        "demographics": {name: "Demographics", options: ["Young", "Old"], onOptionSelected: null},
        "salary": {name: "Salary", options: ["Over 50,000", "Over 100,000", "Over 200,000"], onOptionSelected: null},
        "pto": {name: "PTO", options: ["High", "Medium", "Low"], onOptionSelected: null}
    };

    // make every pref selection have its reactive function use the "onMainOptionChanged" function
    for (const key in prefSelections) {
        prefSelections[key].onOptionSelected = (option) => onMainOptionChanged(key, option);
    }
    let onSignUp = async () => {
        console.log(preferences["temperature"]);
        var id = document.getElementsByName("id")[0].value;
        var password = document.getElementsByName("password")[0].value;
        console.log(id, password);

        console.log(preferences["temperature"], preferences["humidity"], preferences["sunlight"], preferences["demographics"], preferences["salary"], preferences["pto"]);
        const post = (await fetch("https://salarymatch.azurewebsites.net/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                password: password,
                temperature_preference: preferences["temperature"],
                humidity_preference: preferences["humidity"],
                sunlight_preference: preferences["sunlight"],
                demographic_preference: preferences["demographics"],
                salary_preference: preferences["salary"],
                pto_preference: preferences["pto"]
            })
        }).then(async data => {
            if (data.status == 200||data.status == 201) {
                console.log("success");
                window.location.href = "/login";
            } else {
                console.log("fail");
                console.log(data);
                alert("Sign up Failed")
            }

        }).catch(err => console.log('err')));
        
    };
</script>

<style>
    .prefs.card {
        width: 100%;
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
    .login-card {
        display: flex;
        align-items: center;
        align-self: center;
        justify-content: center;
        flex-direction: column;
        background-color: var(--card-color);
        box-shadow: 2px 2px 4px 0px rgba(34, 17, 66,0.4);
        padding: 15px;
    }
    .login-text {
        font-size: 25px;
    }
    form {
        width: 250px;
        height: 30px;
        background-color: rgb(188, 181, 223);
        margin: 10px;
        display: flex;
        flex-direction:row;
        align-items: center;
    }
    .icon-container {
        margin-left:5px;
        margin-right:5px;
        display: flex;
        align-items: center;
        height:100%;
        width: 30px;
    }
    input {
        height:100%;
        width: 100%;
        background-color: transparent;
        font-size: 14px;
        padding-left: 10px;
    }
    input:focus {
        background-color: rgb(216, 214, 250);
    }
    .button {
        background-color:rgb(142, 134, 230);
        padding: 5px;
        border-radius: 4px;
        box-shadow: 1px 1px 3px 0px rgba(34, 17, 66,0.4);
        margin: 8px;
        margin-left: 30px;
        margin-right: 30px;
    }
    /* .button > p {
        font-size: 12px;
        font-weight: bold;
    }
    .other-buttons-container {
        display: flex;
        flex-direction: row;
    }
    .bigger >  p {
        font-size: 16px;
    } */
</style>

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
        <button class="save-button" on:click={onSignUp}>
            <p>Save</p>
        </button>
    </div>
</div>
<div class="login-card">
    <p class="login-text">Sign Up</p>
    <form>
        <div class="icon-container">
            <span class="material-symbols-outlined">
                person
            </span>
        </div>
        <input name="id">
    </form>
    <form>
        <div class="icon-container">
            <span class="material-symbols-outlined">
                key
            </span>
        </div>
        <input name="password">
    </form>

    <div class="bigger button">
        <button on:click={onSignUp}>
            <p>
                Sign Up
            </p>
    </div>

    <div class="flex flex-col items-center">
        <div>Already done this?</div>
        <a href="/login"><Button gradient color="redToYellow" size="md" class="w-full">Log In</Button></a>
    </div>

</div>
