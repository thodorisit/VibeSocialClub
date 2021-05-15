<template>
    <div>
        <div class="top-menu-container mb-3">
            <div class="top-menu-content">
                <img class="logo" src="img/logo.png"/>
                <router-link to="/" v-if="showNewVibeButton">
                    <div class="new-vibe-button font-weight-light">Νέος Παλμός</div>
                </router-link>
            </div>
            <div @click="goHistoryBack" v-if="showBackButton" class="d-block mb-5">
                <div class="new-vibe-button font-weight-light font-align-center">Επιστροφή</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopMenuComponent',
    props: {
        showNewVibe : String,
        showBack : String
    },
    watch: {
        showNewVibe: {
            immediate: true,
            deep: true,
            handler(newVal) {
                if (newVal == 'no') {
                    this.showNewVibeButton = false;
                }
            }
        },
        showBack: {
            immediate: true,
            deep: true,
            handler(newVal) {
                if (newVal == 'yes') {
                    this.showBackButton = true;
                }
            }
        },
    },
    mounted() {
    },
    data: function() {
        return {
            showNewVibeButton : true,
            showBackButton : false
        }
    },
    methods: {
        goHistoryBack : function() {
            window.history.back();
        }
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
    max-width: 100px;
    margin-top:20px;
}

.new-vibe-button { 
    position: relative;
    top:10px;
    padding:10px;
    border-radius: 20px;
    border: 1px rgba(255,255,255,0.8) solid;
    box-shadow:
        inset 0 0 20px rgba(255,255,255,0.5),
        0 0 20px rgba(255,255,255,0.5),
        -6px 0 10px rgba(255, 51, 0, 0.2),
        6px 0 10px rgba(251, 255, 0, 0.3);
}
</style>
