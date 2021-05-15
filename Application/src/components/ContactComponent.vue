<template>
    <div>
        <TopMenuComponent show-new-vibe="no" show-back="yes"></TopMenuComponent>

        <div class="content width-90 mt-6">
            <div class="d-block mt-5 font-weight-normal font-l pt-6">
                <div class="font-sm">If you want to report any issues related to this project, feel free to open a GitHub issue.</div>
                <div class="font-xl mt-4">:)</div>
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
