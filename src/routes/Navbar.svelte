<script>
    import './styles.css';
    import { Avatar, Button, Dropdown, DropdownItem, Search } from 'flowbite-svelte';
    import {authToken} from '../auth'
    import {loggedIn} from '../auth'
    let notlogged = false;
    let noToken="";
    let logout = async () => {
        const post = (await fetch("https://salarymatch.azurewebsites.net/api/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: $authToken
        })
    }).then(async data => {
        if (data.status == 200||data.status == 201) {
            console.log("successful logout");
            loggedIn.set(notlogged);
            authToken.set(noToken);
            window.location.href = "/";
        } else {
            console.log("fail");
            alert("Logout Failed")
        }
        }).catch(err => console.log('err')));
    }; 

</script>

<style>
    :root {
        --nav-height: 35px;
    }
    @media screen and (max-width: 440px) {
        :root {
            --nav-height: 27px;
        }
    }
    nav {
        width: 100%;
        background-color: var(--card-color);
        position: fixed;
        display: flex;
        flex-wrap: nowrap;
        box-shadow: 0px 0px 5px rgb(34, 17, 66);
        z-index: 99999;
        align-items: center;
    }
    .navItem {
        margin-top: 6px;
        margin-bottom: 6px;

        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        margin-right: 10px;

        cursor: pointer;
    }

    .nav-text {
        padding-left:8px;
        padding-right:8px;
        font-weight: 500;
        font-size: calc(var(--nav-height) * 0.4);
    }
    .orange-hover:hover {
        border-radius: 10px;
        background-color: #FFC187;
    }
    .material-symbols-outlined {
        font-size: var(--nav-height);
    }
    .logo > a > img {
        width: var(--nav-height);
        height: var(--nav-height);
        background-color: #FFF7EA;
        border-width: 2px;
        border-color:orange;
        border-radius: 50%;
    }
</style>
<nav>
    <div class="navItem logo">
        <a href="/"><img src="/salary_match_logo.png" alt="" /></a>
    </div>
    <div class="navItem">
        <a href="/"><span class="material-symbols-outlined orange-hover"> home </span></a>
    </div>
    <div class="w-[50%] mr-auto">
        
    </div>
    {#if $loggedIn}
        <div class="navItem">
            <p class="nav-text orange-hover">
                <a href="/createjoboffer"> Add Offer
                </a>
            </p>
        </div>
        <div class="navItem">
            <p class="nav-text orange-hover">
                <a href="/UpdateOffer"> Update Offers
                </a>
            </p>
        </div>
        <div class="navItem">
            <p class="nav-text orange-hover">
                <a href="/compareOffers"> Compare Offers
                </a>
            </p>
        </div>
        <div class="navItem">
            <p class="nav-text orange-hover">
                <a href="/CompareWithOthers"> Compare With Others
                </a>
            </p>
        </div>

    {/if}
        <div class="navItem">
            <p class="nav-text orange-hover">
                <a href="/CityOptions"> Cities</a>
            </p>
        </div>
        <div class="navItem">
            <p class="nav-text orange-hover">
                <a href="/companies"> Companies</a>
            </p>
        </div>
        <div class="navItem">
            <p class="nav-text orange-hover">
                <a href="/state"> States</a>
            </p>
        </div>
    {#if $loggedIn}
        <div class="navItem">
            <p class="nav-text orange-hover">
                <a href="/profile"> Profile</a>
            </p>
        </div>
        <Avatar id="profile-pic" src="https://picsum.photos/200" alt="" class="rounded-full w-[50px] h-[50px] cursor-pointer mr-5"/>
        <!-- Dropdown menu -->
        <Dropdown placement="bottom" triggeredBy="#profile-pic" class="justify-items-end">
            <DropdownItem><a href="/profile">My Profile</a></DropdownItem>
            <DropdownItem on:click={logout}><a href="/">Log Out</a></DropdownItem>
        </Dropdown>
    {:else}
        <a href="/login"><Button gradient color="cyanToBlue" class="mr-5" size="xs">Log In</Button></a>
    {/if}
</nav>
