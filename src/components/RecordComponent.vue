<template>
    <div>
        <TopMenuComponent></TopMenuComponent>

        <div class="d-block content width-90 pb-6"></div>

        <div id="_record__vibrate_button" class="d-none justify-content--center unselectable mt-6 mb-4">
            <div @touchstart="vibrateTouchStart" @touchend="vibrateTouchEnd" class="d-flex justify-content--center align-items--center vibrate-button">
                <div class="d-block font-weight-light">Vibrate</div>
            </div>
        </div>
        <div id="_record__start_recording_button" class="d-flex justify-content--center unselectable mt-6 mb-4">
            <div @click="startRecording" class="d-flex justify-content--center align-items--center vibrate-button">
                <div class="d-block">Start<br/>Recording</div>
            </div>
        </div>

        <div class="d-flex justify-content--center mt-6 pt-6">
             <div class="recording-line">
                 <div class="recording-line--black"></div>
                 <div id="_recording_line__loaded" class="recording-line--loaded"></div>
             </div>
        </div>

        <div class="d-block content width-90 font-align-center mt-6">
            <a target="_blank" href="https://itsios.eu/">
                <div class="font-sm color-white pt-6" style="opacity:0.5;">Crafted by <span class="font-weight-bold">Thodoris Itsios.</span></div>
            </a>
        </div>

    </div>
</template>

<script>
import GeneralMixins from '@/mixins/GeneralMixins.js'
import RecordJS from '@/helpers/RecordJS.js'
export default {
    name: 'RecordComponent',
    mixins: [GeneralMixins],
    components: {
    },
    mounted() {
        //Disable right click for debugging purpose
        //document.addEventListener('contextmenu', event => event.preventDefault());
    },
    data: function() {
        return {
            record : {
                final : []
            }
        }
    },
    methods: {
        startRecording : function() {
            document.getElementById("_record__start_recording_button").classList.remove('d-flex');
            document.getElementById("_record__start_recording_button").classList.add('d-none');
            document.getElementById("_record__vibrate_button").classList.remove('d-none');
            document.getElementById("_record__vibrate_button").classList.add('d-flex');
            document.getElementById("_recording_line__loaded").classList.add('animation');
            RecordJS.start();
        },
        stopRecording : function() {
            RecordJS.stop();
        },
        vibrateTouchStart : function() {
            RecordJS.vibrateTouchStart();
        },
        vibrateTouchEnd : function() {
            RecordJS.vibrateTouchEnd();
        }
    }
}
</script>

<style scoped>

    .recording-line {
        position: relative;
        width:80%;
        height:10px;
        background: #0f0f0f;
        border-radius: 5px;
    }
    .recording-line--black {
        position: absolute;
        width:100%;
        height:10px;
        background:#0f0f0f;
        border-radius: 5px;
        z-index: 2;
    }
    .recording-line--loaded {
        position: relative;
        display: block;
        height:10px;
        width:96%;
        left:2%;
        background-color: #0f0f0f;
        border-radius: 5px;
    }
    .recording-line--loaded.animation {
        box-shadow:
            inset 0 0 10px #fff,
            inset -5px 0 150px rgb(0, 255, 179),
            0 0 25px #fff,
            -6px 0 20px rgb(0, 26, 255),
            6px 0 20px rgb(0, 255, 13);
        -webkit-animation: recording-line--loaded 10s;
        -moz-animation: recording-line--loaded 10s;
        -o-animation: recording-line--loaded 10s;
        animation: recording-line--loaded 10s;
    }
    @keyframes recording-line--loaded {
        0% {
            width:0%;
        }
        100% {
            width:96%;
        }
    }

    .vibrate-button {
        position: relative;
        width:50vw;
        max-width: 50vh;
        height: 50vw;
        max-height: 50vh;
        border-radius: 50%;
        font-size: 20px;
        font-weight: 300;
        text-align: center;
        transition: 0.1s;
        -webkit-animation: vibrate-button-box-shadow--normal 2s infinite;
        -moz-animation: vibrate-button-box-shadow--normal 2s infinite;
        -o-animation: vibrate-button-box-shadow--normal 2s infinite;
        animation: vibrate-button-box-shadow--normal 2s infinite;
    }
    .vibrate-button:active {
        -webkit-animation: unset;
        -moz-animation: unset;
        -o-animation: unset;
        animation: unset;
        box-shadow:
            inset 0 0 25px #fff,
            inset 10px 0 40px rgb(0, 183, 255),
            inset -10px 0 40px rgb(0, 38, 255),
            inset 10px 0 150px rgb(229, 255, 0),
            inset -10px 0 150px rgb(0, 162, 255),
            0 0 25px #fff,
            -5px 0 40px rgb(0, 26, 255),
            5px 0 40px rgb(0, 183, 255);
        transition: 0.1s;
    }

    @keyframes vibrate-button-box-shadow--normal {
        0%, 100% {
            box-shadow:
                inset 0 0 25px #fff,
                inset 5px 0 20px rgb(94, 255, 0),
                inset -5px 0 20px rgb(0, 255, 213),
                inset 5px 0 50px rgba(0, 140, 255, 0.4),
                inset -5px 0 50px rgba(0, 255, 179, 0.4),
                0 0 25px #fff,
                -6px 0 20px rgb(0, 26, 255),
                6px 0 20px rgb(0, 255, 13);
        }
        50% {
            box-shadow:
                inset 0 0 13px #fff,
                inset 5px 0 40px rgb(0, 255, 213),
                inset -5px 0 40px rgb(94, 255, 0),
                inset 5px 0 75px rgb(0, 255, 179),
                inset -5px 0 75px rgb(0, 140, 255),
                0 0 13px #fff,
                -3px 0 40px rgb(0, 255, 13),
                3px 0 40px rgb(0, 26, 255);
        }
    }

    @-o-keyframes vibrate-button-box-shadow--normal {
        0%, 100% {
            box-shadow:
                inset 0 0 25px #fff,
                inset 5px 0 20px rgb(94, 255, 0),
                inset -5px 0 20px rgb(0, 255, 213),
                inset 5px 0 50px rgba(0, 140, 255, 0.4),
                inset -5px 0 50px rgba(0, 255, 179, 0.4),
                0 0 25px #fff,
                -6px 0 20px rgb(0, 26, 255),
                6px 0 20px rgb(0, 255, 13);
        }
        50% {
            box-shadow:
                inset 0 0 13px #fff,
                inset 5px 0 40px rgb(0, 255, 213),
                inset -5px 0 40px rgb(94, 255, 0),
                inset 5px 0 75px rgb(0, 255, 179),
                inset -5px 0 75px rgb(0, 140, 255),
                0 0 13px #fff,
                -3px 0 40px rgb(0, 255, 13),
                3px 0 40px rgb(0, 26, 255);
        }
    }

    @-moz-keyframes vibrate-button-box-shadow--normal {
        0%, 100% {
            box-shadow:
                inset 0 0 25px #fff,
                inset 5px 0 20px rgb(94, 255, 0),
                inset -5px 0 20px rgb(0, 255, 213),
                inset 5px 0 50px rgba(0, 140, 255, 0.4),
                inset -5px 0 50px rgba(0, 255, 179, 0.4),
                0 0 25px #fff,
                -6px 0 20px rgb(0, 26, 255),
                6px 0 20px rgb(0, 255, 13);
        }
        50% {
            box-shadow:
                inset 0 0 13px #fff,
                inset 5px 0 40px rgb(0, 255, 213),
                inset -5px 0 40px rgb(94, 255, 0),
                inset 5px 0 75px rgb(0, 255, 179),
                inset -5px 0 75px rgb(0, 140, 255),
                0 0 13px #fff,
                -3px 0 40px rgb(0, 255, 13),
                3px 0 40px rgb(0, 26, 255);
        }
    }

    @-webkit-keyframes vibrate-button-box-shadow--normal {
        0%, 100% {
            box-shadow:
                inset 0 0 25px #fff,
                inset 5px 0 20px rgb(94, 255, 0),
                inset -5px 0 20px rgb(0, 255, 213),
                inset 5px 0 50px rgba(0, 140, 255, 0.4),
                inset -5px 0 50px rgba(0, 255, 179, 0.4),
                0 0 25px #fff,
                -6px 0 20px rgb(0, 26, 255),
                6px 0 20px rgb(0, 255, 13);
        }
        50% {
            box-shadow:
                inset 0 0 13px #fff,
                inset 5px 0 40px rgb(0, 255, 213),
                inset -5px 0 40px rgb(94, 255, 0),
                inset 5px 0 75px rgb(0, 255, 179),
                inset -5px 0 75px rgb(0, 140, 255),
                0 0 13px #fff,
                -3px 0 40px rgb(0, 255, 13),
                3px 0 40px rgb(0, 26, 255);
        }
    }
</style>
