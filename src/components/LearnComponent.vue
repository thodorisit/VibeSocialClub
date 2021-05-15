<template>
    <div>
        <TopMenuComponent show-new-vibe="no" show-back="yes"></TopMenuComponent>

        <div class="content width-90 mt-6">
            <div class="d-block mt-5 font-weight-normal font-xxl pt-6">
                How it works
            </div>
            <div class="d-block mt-5 font-weight-normal font-m">
                <div class="font-xl font-weight-bold mt-4">New Vibe</div>
                Press the "New Vibe" button and then the "Start Recording" button will be shown. After the first touch on the "Start Recording" button, you will have 10 seconds to create your own unique sequence of vibrations. As soon as the 10 seconds time frame ends, you will be redirected to the next page through which you will be able to playback the vibe you recorded or you will have the chance to share it.
                
                <div class="font-xl font-weight-bold mt-4">Fell the Vibe</div>
                In this page, there is a "Feel the Vibe" button and by clicking it you are able to feel the sequence of vibrations as it was previously recorded either by you or by your beloved ones.

                <div class="font-xl font-weight-bold mt-4">Note:</div>
                Don't forget to enable the vibration if you want to <b>feel the vibe</b>!
            </div>

            <div class="d-block content width-90 font-align-center mt-6 mb-6">
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
</style>
