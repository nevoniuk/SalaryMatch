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
    .bigger >  p {
        font-size: 16px;
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
        <input>
    </form>
    <form>
        <div class="icon-container">
            <span class="material-symbols-outlined">
                key
            </span>
        </div>
        <input>
    </form>

    <div class="bigger button">
        <p>
            Sign In
        </p>
    </div>
    <div class="other-buttons-container">
        <div class="button">
            <p>Forgot Password</p>
        </div>
        <div class="button">
            <p>Create Account</p>
        </div>
    </div>
</div>