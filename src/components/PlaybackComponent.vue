<template>
    <div>
        <TopMenuComponent></TopMenuComponent>

        <div class="d-block content width-90 pb-6"></div>

        <div class="d-flex justify-content--center unselectable mt-6 mb-4">
            <div @click="playVibe" class="d-flex justify-content--center align-items--center vibrate-button">
                <div class="d-block font-weight-light">Feel<br/>the VIBE</div>
            </div>
        </div>

        <div class="d-flex justify-content--center flex-direction--column align-content--center width-90 unselectable mt-6 mb-4">
            <div class="d-block font-l font-weight-light mt-6 color-white">Share your vibe</div>
            <div class="d-block">
                <div class="d-inline-block mt-2 icon"> 
                    <svg @click="sharePostFacebook" class="svg-share-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
                </div>
                <div class="d-inline-block mt-2 ml-2 icon"> 
                    <svg @click="sharePostMessenger" class="svg-share-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-7-19.5c-4.418 0-8 3.316-8 7.407 0 2.332 1.163 4.411 2.981 5.769v2.824l2.724-1.495c.727.201 1.497.31 2.295.31 4.418 0 8-3.317 8-7.408s-3.582-7.407-8-7.407zm.795 9.975l-2.037-2.173-3.975 2.173 4.372-4.642 2.087 2.173 3.926-2.173-4.373 4.642z"/></svg>
                </div>
                <div class="d-inline-block mt-2 ml-2 icon">
                    <svg @click="sharePostTwitter" class="svg-share-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg>
                </div>
                <div class="d-inline-block mt-2 ml-2 icon">
                    <svg @click="sharePostLinkedin" class="svg-share-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div class="d-inline-block mt-2 ml-2 icon">
                    <svg @click="sharePostEmail" class="svg-share-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm10.282 1.472c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601-4.967 0-7.744 3.149-7.744 7.073 0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z"/></svg>
                </div>
                <div class="d-inline-block mt-2 ml-2 icon">
                    <svg @click="sharePostClipboard" class="svg-share-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/></svg>
                </div>
            </div>
        </div>

        <div class="d-block content width-90 font-align-center">
            <a target="_blank" href="https://itsios.eu/">
                <div class="font-sm color-white pt-2" style="opacity:0.5;">Crafted by <span class="font-weight-bold">Thodoris Itsios.</span></div>
            </a>
        </div>

    </div>
</template>

<script>
import GeneralMixins from '@/mixins/GeneralMixins.js'
export default {
    name: 'PlaybackComponent',
    mixins: [GeneralMixins],
    props: {
        vibe:  String,
    },
    watch: {
        vibe: {
            immediate: true,
            deep: true,
            handler(newVal) {
                this.shareUrl = window.envData.url + '/#/playback/' + newVal;
                this.record.final = JSON.parse('['+newVal+']');
            }
        }
    },
    mounted() {
        //Disable right click for debugging purpose
        //document.addEventListener('contextmenu', event => event.preventDefault());
    },
    data: function() {
        return {
            shareUrl : "",
            record : {
                final : []
            }
        }
    },
    methods: {
        playVibe : function() {
            window.console.log(this.record.final);
            window.navigator.vibrate(0);
            window.navigator.vibrate(this.record.final);
        },
        sharePostFacebook : function() {
            var social_link = 'fb://faceweb/f?href=https://www.facebook.com/sharer/sharer.php?u='+this.shareUrl;
            window.open(social_link, "_system");
        },
        sharePostMessenger : function() {
            var social_link = 'fb-messenger://share/?link='+this.shareUrl;
            window.open(social_link, "_system");
        },
        sharePostTwitter : function() {
            var social_link = 'twitter://post?message='+this.shareUrl;
            window.open(social_link, "_system");
        },
        sharePostLinkedin : function() {
            var social_link = 'https://www.linkedin.com/sharing/share-offsite/?url='+this.shareUrl;
            window.open(social_link, "_system");
        },
        sharePostEmail : function() {
            window.open("mailto:?subject=VIBE social club&body="+this.shareUrl, "_system");
        },
        sharePostClipboard : function() {
            var hidden_input = document.createElement("input");
            document.body.appendChild(hidden_input);
            hidden_input.setAttribute("id", "hidden_input__clipboard_id");
            //hidden_input.setAttribute("hidden", "true");
            document.getElementById("hidden_input__clipboard_id").value = this.shareUrl;
            hidden_input.select();
            document.execCommand("copy");
            document.body.removeChild(hidden_input);
            //this.clipboard.status = "Αντιγράφηκε";
        }
    }
}
</script>

<style scoped>
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
            -moz-box-shadow:
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
            -moz-box-shadow:
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
            -webkit-box-shadow:
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
            -webkit-box-shadow:
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

    .svg-share-icon {
        fill: #ffffff;
        width: 30px;
        height: 30px;
    }
</style>
