<script>
	import './styles.css';
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
        flex-wrap: wrap;
        box-shadow: 0px 0px 5px rgb(34, 17, 66);
    }
    .navItem {
        /* height: 50px; */
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
    .rightSideFlex {
        margin-left: auto;
    }
    .material-symbols-outlined {
        font-size: var(--nav-height);
    }
    .logo > img {
        width: var(--nav-height);
        height: var(--nav-height);
        background-color: #FFF7EA;
        border-width: 2px;
        border-color:orange;
        border-radius: 50%;
    }

    .profile-icon > img {
        width: var(--nav-height);
        height: var(--nav-height);
        border-radius: 50%;
    }

    .profile-icon > img:hover {
        border-width:2px;
        border-color:white;
    }

</style>
<nav>
    <div class="navItem logo">
		<img src="/salary_match_logo.png" alt="" />
    </div>
    <div class="navItem">
        <span class="material-symbols-outlined orange-hover"> home </span>
    </div>
    <div class="navItem">
        <span class="material-symbols-outlined orange-hover"> search </span>
    </div>
    <div class="navItem">
        <p class="nav-text orange-hover">
            <a href="/createjoboffer"> Add Offer
            </a>
        </p>
    </div>
    <div class="navItem">
        <p class="nav-text orange-hover">
            <a href="/CityOptions"> Other Thing</a>
        </p>
    </div>
    <div class="navItem profile-icon rightSideFlex">
        <img src="https://picsum.photos/200" alt=""/>
    </div>
</nav>