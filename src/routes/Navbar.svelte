<style>
    nav {
        /* height: 60px; */
        width: 100%;
        background-color: #D8D9EE;
        position: fixed;
        display: flex;
        flex-wrap: wrap;
        box-shadow: 0px 0px 5px rgb(34, 17, 66);
    }
    .logo {
        width: 40px;
        margin-left: 20px;
        margin-right: 40px;
    }
    .navItem {
        height: 50px;
        margin-top: auto;
        margin-bottom: auto;
        /* background-color: red; */
    }
    .homeIcon {
        width: 40px;
        margin-right: 30px;
        /* height: 40px; */
        /* height:  */
    }
    .searchIcon {
        width: 40px;
        margin-right: 30px;
    }
    .verticalDivider {
        width: 2px;
        height: 40px;
        margin-top: 5px;
        background-color: #9E9FBA;
    }

    .textContainer {
        margin:0;
        margin-left:10px;
        padding-left:8px;
        padding-right:8px;
        margin-right:10px;
        border-radius: 10px;
        text-align: center;
        vertical-align: middle;
        margin-top: 12px;
        line-height: 26px;
        background-color: #FFC187;
    }
    .rightSideFlex {
        /* height: 40px; */
        width: 50px;
        margin-left: auto;
        background-color: green;
    }
    

</style>
<nav>
    <div class="navItem logo">
        logo
    </div>
    <div class="navItem homeIcon">
        HOME
    </div>
    <div class="navItem searchIcon">
        Search
    </div>
    <div class="navItem">
        <div class="verticalDivider"></div>
    </div>
    <div class="navItem textEntry">
        <p class="textContainer">
            Add Offer
        </p>
    </div>
    <div class="navItem textEntry">
        <p class="textContainer">
            Some Other Thing 
        </p>
    </div>
    <div class="navItem rightSideFlex">
        profile
    </div>
</nav>