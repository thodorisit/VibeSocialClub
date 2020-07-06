<template>
    <div>
        <div class="top-menu-container mb-3">
            <div class="top-menu-content">
                <img class="logo" src="img/logo.svg"/>
                <router-link to="/">
                    <div class="new-vibe-button font-weight-light">New Vibe </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopMenuComponent',
    mounted() {
    },
    data: function() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>

.top-menu-container {
    position:relative;
    background: transparent;
    width:90%;
    max-width:1200px;
    margin-left:5%;
    top:0;
    height:65px;
    padding:0px 0px;
    z-index:15555;
}

.top-menu-content {
    position: relative;
    display: flex;
    align-items:center;
    align-content: center;
    justify-content: space-between;
    width:90%;
    max-width: 1120px;
    margin:0 auto;
}

@media only screen and (max-width: 1100px) {
    .top-menu-content {
        width:100%;
        max-width: unset;
    }
}

.logo {
    position: relative;
    display: inline-block;
    width: 50%;
    max-width: 140px;
    margin-top:20px;
}

.new-vibe-button { 
    position: relative;
    top:10px;
    padding:10px;
    border-radius: 20px;
    box-shadow:
                inset 2px 0 10px rgba(94, 255, 0, 0.1),
                inset -2px 0 10px rgba(0, 255, 213, 0.1),
                inset 2px 0 75px rgba(0, 140, 255, 0.1),
                inset -2px 0 75px rgba(0, 255, 179, 0.1),
                0 0 1px #fff,
                -3px 0 30px rgba(0, 26, 255, 0.3),
                3px 0 5px rgba(0, 255, 13, 0.3);
}
</style>
