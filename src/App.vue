<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
            
        }
    }
</script>

<style>
    html {
        font-size:16px;
    }
    * {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    body {
        background:#0f0f0f;
        padding:0;
        margin:0;
        font-family: Arial;
        word-wrap: break-word;
        color: #ffffff;
    }
    a {
        text-decoration: none;
        color:inherit;
    }
    .unselectable {
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .loading-gradient {
        animation-duration: 1.8s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderLoadingGradient;
        animation-timing-function: linear;
        background: #FFFFFF;
        background: linear-gradient(to right, #f5f5f5 8%, #FFFFFF 38%, #f5f5f5 54%);
        background-size: 1000px 640px;
        position: relative;
    }
    @keyframes placeHolderLoadingGradient{
        0%{
            background-position: -468px 0
        }
        100%{
            background-position: 468px 0
        }
    }

    .bg-blue-gradient {
        background-color: #045de9;
        background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 100%);
    }
    .bg-grey-gradient {
        background-color: #ffffff;
        background-image: linear-gradient(315deg, #f7f7f7 0%, #ffffff 100%);
    }

    .color-white {color:#FFFFFF;}
    .color-black {color:#313131;}
    
    .border-radius-2 {border-radius: 2px;}
    .border-radius-4 {border-radius: 4px;}

    .border-radius-6 {border-radius: 6px;}
    .border-radius-6-top-left {border-top-left-radius: 6px;}
    .border-radius-6-bottom-left {border-bottom-left-radius: 6px;}
    .border-radius-6-top-right {border-top-right-radius: 6px;}
    .border-radius-6-bottom-right {border-bottom-right-radius: 6px;}

    .shadow-1 {
        box-shadow: 0 1px 2px rgba(0,0,0,0.02), 
                    0 2px 4px rgba(0,0,0,0.02), 
                    0 4px 8px rgba(0,0,0,0.02), 
                    0 8px 16px rgba(0,0,0,0.02),
                    0 16px 32px rgba(0,0,0,0.02), 
                    0 32px 64px rgba(0,0,0,0.02);
    }
    .shadow-2 {
        box-shadow: 0 1px 1px rgba(0,0,0,0.05), 
              0 2px 2px rgba(0,0,0,0.05), 
              0 4px 4px rgba(0,0,0,0.05), 
              0 8px 8px rgba(0,0,0,0.05), 
              0 16px 16px rgba(0,0,0,0.05), 
              0 32px 32px rgba(0,0,0,0.05);
    }


.load-more {
    position: relative;
    display: flex;
}
.load-more--btn {
    position: relative;
    display: block;
    width:80%;
    margin:0 auto;
    border-radius: 6px;
}


.content {
    display: block;
    position: relative;
    width:100%;
    margin: 0 auto;
}
.width-90 {
    margin:0 auto;
    width:90%;
    max-width:1200px;
}
.divider {
    display:block;
    width:30%;
    height:1px;
    margin-left:35%;
    margin-top:30px;
    border-top:1px #dfd7d7 solid;
}





.m-0 {margin:0px;}
.m-1 {margin:6px;}
.m-2 {margin:12px;}
.m-3 {margin:18px;}
.m-4 {margin:24px;}
.m-5 {margin:30px;}
.m-6 {margin:36px;}
.mt-0 {margin-top:0px;}
.mt-1 {margin-top:6px;}
.mt-2 {margin-top:12px;}
.mt-3 {margin-top:18px;}
.mt-4 {margin-top:24px;}
.mt-5 {margin-top:30px;}
.mt-6 {margin-top:36px;}
.mb-0 {margin-bottom:0px;}
.mb-1 {margin-bottom:6px;}
.mb-2 {margin-bottom:12px;}
.mb-3 {margin-bottom:18px;}
.mb-4 {margin-bottom:24px;}
.mb-5 {margin-bottom:30px;}
.mb-6 {margin-bottom:36px;}
.ml-0 {margin-left:0px;}
.ml-1 {margin-left:6px;}
.ml-2 {margin-left:12px;}
.ml-3 {margin-left:18px;}
.ml-4 {margin-left:24px;}
.ml-5 {margin-left:30px;}
.ml-6 {margin-left:36px;}
.mr-0 {margin-right:0px;}
.mr-1 {margin-right:6px;}
.mr-2 {margin-right:12px;}
.mr-3 {margin-right:18px;}
.mr-4 {margin-right:24px;}
.mr-5 {margin-right:30px;}
.mr-6 {margin-right:36px;}

.p-0 {padding:0px;}
.p-1 {padding:6px;}
.p-2 {padding:12px;}
.p-3 {padding:18px;}
.p-4 {padding:24px;}
.p-5 {padding:30px;}
.p-6 {padding:36px;}
.pt-0 {padding-top:0px;}
.pt-1 {padding-top:6px;}
.pt-2 {padding-top:12px;}
.pt-3 {padding-top:18px;}
.pt-4 {padding-top:24px;}
.pt-5 {padding-top:30px;}
.pt-6 {padding-top:36px;}
.pb-0 {padding-bottom:0px;}
.pb-1 {padding-bottom:6px;}
.pb-2 {padding-bottom:12px;}
.pb-3 {padding-bottom:18px;}
.pb-4 {padding-bottom:24px;}
.pb-5 {padding-bottom:30px;}
.pb-6 {padding-bottom:36px;}
.pl-0 {padding-left:0px;}
.pl-1 {padding-left:6px;}
.pl-2 {padding-left:12px;}
.pl-3 {padding-left:18px;}
.pl-4 {padding-left:24px;}
.pl-5 {padding-left:30px;}
.pl-6 {padding-left:36px;}
.pr-0 {padding-right:0px;}
.pr-1 {padding-right:6px;}
.pr-2 {padding-right:12px;}
.pr-3 {padding-right:18px;}
.pr-4 {padding-right:24px;}
.pr-5 {padding-right:30px;}
.pr-6 {padding-right:36px;}

.font-weight-light {font-weight: 100;/*font-family: 'roboto-light';*/}
.font-weight-normal {font-weight: 500;/*font-family: 'roboto-regular';*/}
.font-weight-bold {font-weight: 900;/*font-family: 'roboto-black';*/}

.font-align-left {text-align: left;}
.font-align-center {text-align: center;}
.font-align-right {text-align: right;}

.font-xxxl {font-size:2.5em;}
.font-xxl {font-size:1.75em;}
.font-xl {font-size:1.44em;}
.font-l {font-size:1.18em;}
.font-m {font-size:0.93em;}
.font-sm {font-size:0.81em;}
.font-xs {font-size:0.63em;}

.d-block {display: block;}
.d-inline-block {display: inline-block;}
.d-inline {display: inline;}
.d-flex{display: flex;flex-wrap: wrap;}
.d-none{display: none;}

.justify-content--center{justify-content: center;}
.justify-content--start{justify-content: start;}
.justify-content--end{justify-content: end;}
.justify-content--flex-start{justify-content: flex-start;}
.justify-content--flex-end{justify-content: flex-end;}
.justify-content--left{justify-content: left;}
.justify-content--right{justify-content: right;}
.justify-content--normal{justify-content: normal;}
.justify-content--space-between{justify-content: space-between;}
.justify-content--space-evenly{justify-content: space-evenly;}
.justify-content--space-around{justify-content: space-around;}
.justify-content--safe-center{justify-content: safe center;}
.justify-content--unsafe-center{justify-content: unsafe center;}
.justify-content--inherit{justify-content: inherit;}
.justify-content--initial{justify-content: initial;}
.justify-content--unset{justify-content: unset;}

.align-items--normal {align-items: normal;}
.align-items--stretch {align-items: stretch;}
.align-items--center {align-items: center;}
.align-items--start {align-items: start;}
.align-items--end {align-items: end;}
.align-items--flex-start {align-items: flex-start;}
.align-items--flex-end {align-items: flex-end;}
.align-items--baseline {align-items: baseline;}
.align-items--first-baseline {align-items: first baseline;}
.align-items--last-baseline {align-items: last baseline;}
.align-items--safe-center {align-items: safe center;}
.align-items--unsafe-center {align-items: unsafe center;}
.align-items--inherit {align-items: inherit;}
.align-items--initial {align-items: initial;}
.align-items--unset {align-items: unset;}

.align-content--center {align-content: center;}
.align-content--start {align-content: start;}
.align-content--end {align-content: end;}
.align-content--flex-start {align-content: flex-start;}
.align-content--flex-end {align-content: flex-end;}
.align-content--normal {align-content: normal;}
.align-content--baseline {align-content: baseline;}
.align-content--first-baseline {align-content: first baseline;}
.align-content--last-baseline {align-content: last baseline;}
.align-content--space-between {align-content: space-between;}
.align-content--space-around {align-content: space-around;}
.align-content--space-evenly {align-content: space-evenly;}
.align-content--stretch {align-content: stretch;}
.align-content--safe-center {align-content: safe center;}
.align-content--unsafe-center {align-content: unsafe center;}
.align-content--inherit {align-content: inherit;}
.align-content--initial {align-content: initial;}
.align-content--unset {align-content: unset;}

.flex-direction--column {flex-direction: column;}

.row {position: relative;margin:0 auto;width: 90%;}
.row [class^="col"] {/*margin: 0.5rem 2%;*/min-height: 0.125rem;}

.col-1 {width: 5%;}
.col-2 {width: 10%;}
.col-3 {width: 15%;}
.col-4 {width: 20%;}
.col-5 {width: 25%;}
.col-6 {width: 30%;}
.col-7 {width: 35%;}
.col-8 {width: 40%;}
.col-9 {width: 45%;}
.col-10 {width: 50%;}
.col-11 {width: 55%;}
.col-12 {width: 60%;}
.col-13 {width: 65%;}
.col-14 {width: 70%;}
.col-15 {width: 75%;}
.col-16 {width: 80%;}
.col-17 {width: 85%;}
.col-18 {width: 90%;}
.col-19 {width: 95%;}
.col-20 {width: 100%;}
.hide-sm {display: block;}
.hide-xl {display: none;}
@media only screen and (max-width: 800px) {
    .col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,
    .col-13,.col-14,.col-15,.col-16,.col-17,.col-18,.col-19,.col-20 {width: 100%;}
    .hide-sm {display: none;}
    .hide-xl {display: block;}
}

.overflow-hidden {overflow: hidden;}
.overflow-x-hidden {overflow-x: hidden;}
</style>
