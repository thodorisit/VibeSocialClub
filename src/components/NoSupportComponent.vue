<template>
    <div>
        <TopMenuComponent></TopMenuComponent>

        <div class="content width-90">
            <div class="d-block mt-5 font-weight-normal font-xxl pt-6 mb-6">
                Your device can't... vibrate!
            </div>
            <div class="d-block content width-90 font-align-center">
                <a target="_blank" href="https://itsios.eu/">
                    <div class="font-sm color-white" style="opacity:0.5;">Crafted by <span class="font-weight-bold">Thodoris Itsios.</span></div>
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
</style>
