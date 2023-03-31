<script>
    import { Button } from 'flowbite-svelte';
    import {authToken} from '../../auth'
    import {loggedIn} from '../../auth'
    let onSignIn = async () => {
        var id = document.getElementsByName("id")[0].value;
        var password = document.getElementsByName("password")[0].value;

        var token;
        const post = (await fetch("https://salarymatch.azurewebsites.net/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                password: password
            })
        }).then(async data => {
            token = await data.text()
            if (data.status == 200||data.status == 201) {
                authToken.set(token.replaceAll('"', ''))
                loggedIn.set(true);
                window.location.href = "/";
            } else {
                alert("Login Failed")
            }

        }).catch(err => console.log('err')));
    }; 


</script>
<style>

    .login.card {
        display: flex;
        align-items: center;
        align-self: center;
        justify-content: center;
        flex-direction: column;
        margin: 100px;
        margin-left: 30px;
        margin-right: 30px;
        padding-bottom: 60px;
        padding-top: 40px;
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
    .button > p {
        font-size: 12px;
        font-weight: bold;
    }
    .other-buttons-container {
        display: flex;
        flex-direction: row;
    }
</style>
<div class="login card">
    <p class="login-text">Login</p>
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

    <div class="other-buttons-container">
        <Button gradient color="purpleToBlue" size="md" class="w-full" on:click={onSignIn}>
            <p>Sign In</p>
        </Button>
    </div>
    <div class="other-buttons-container">
        <a href="/reset"><Button gradient color="purpleToBlue" size="md" class="w-full">Forgot Password</Button></a>
    </div>
    <div class="flex flex-col items-center">
        <div class="text-base">First time?</div>
        <a href="/signup"><Button gradient color="purpleToBlue" size="md" class="w-full">Sign Up</Button></a>
    </div>
</div>