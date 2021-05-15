<template>
    <div>
        <TopMenuComponent></TopMenuComponent>

        <div class="content width-90">
            <div class="d-block mt-5 font-weight-normal font-xxl pt-6 mb-6">
                <p>404 - There is nothing here!</p>
                <p>Well almost nothing, there are these two sentences and few buttons...</p>
            </div>
            <div class="d-flex align-items--center justify-content--center unselectable mt-6 information-box">
                <router-link to="/learn" class="d-inline-block col-16 font-align-center font-s p-2 notice-message">How it works</router-link>
                <router-link to="/contact" class="d-inline-block col-16 font-align-center font-s p-2 mt-3">
                    <div>Contact us</div>
                </router-link>
            </div>
            <div class="d-block content width-90 font-align-center mt-6">
                <a target="_blank" href="https://itsios.eu/">
                    <div class="font-sm color-white" style="opacity:0.7;">Developed by <span class="font-weight-bold">Thodoris Itsios.</span></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import GeneralMixins from '@/mixins/GeneralMixins.js'

export default {
    name: 'NoInternetComponent',
    mixins: [GeneralMixins],
    components: {
        
    },
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

<style scoped>
    .notice-message {
        border-radius: 5px;
        color: #FFFFFF;
        border: 1px rgba(255,255,255,0.8) solid;
        box-shadow:
            inset 0 0 20px rgba(255,255,255,0.5),
            0 0 20px rgba(255,255,255,0.5),
            -6px 0 10px rgba(255, 51, 0, 0.2),
            6px 0 10px rgba(251, 255, 0, 0.3);
    }
    .information-box {
        background:#cc9901;
        position: relative;
        overflow: hidden;
        margin:0 auto;
        padding-top:30px;
        padding-bottom:20px;box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);
        border-radius: 3px;
    }
</style>
