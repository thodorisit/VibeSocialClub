const RecordJS = {
    duration : {
        default : 10000,
        time : 0,
    },
    record : {
        now : false,
        temporary : [],
        final : []
    },
    timeout_var : null,
    timestamps : {
        start : 0,
        end : 0,
        touchStart : 0,
        touchEnd : 0
    },
    start : function() {
        this.clearData();
        window.console.log('start-timeout');
        var currentTimestamp = Date.now();
        this.timestamps.start = currentTimestamp;
        this.timestamps.touchEnd = currentTimestamp;
        var vm = this;
        this.timeout_var = setTimeout(function(){
            if (vm.record.now) {
                vm.vibrateTouchEnd();
            }
            vm.record.final = vm.record.temporary;
            /**
             * Add 0 as first array element because vibration function goes "ON"-"OFF",
             * so the first element must be 0 to get "OFF"-"ON"
             *  */
            vm.record.final.unshift(0);
            //window.console.log("Temporary: \n" + vm.record.temporary);
            //window.console.log("Final: \n" + vm.record.final);
            var stringified_vibe = JSON.stringify(vm.record.final);
            window.location.href = window.envData.url + '/#/playback/'+stringified_vibe.substring(1, stringified_vibe.length-1);
            //window.navigator.vibrate(vm.record.final);
        },this.duration.time);
    },
    stop : function() {
        window.console.log('clear-timeout');
        clearTimeout(this.timeout_var);
    },
    vibrateTouchStart : function() {
        this.timestamps.touchStart = Date.now();
        this.record.now = true;
    },
    vibrateTouchEnd : function() {
        var currentTimestamp = Date.now();
        // Add the delay of the last touch to current touch
        this.record.temporary.push(Math.abs(this.timestamps.touchEnd - this.timestamps.touchStart));
        // Add vibration duration
        this.record.temporary.push(currentTimestamp - this.timestamps.touchStart);
        this.timestamps.touchEnd = currentTimestamp;
        this.record.now = false;
    },
    clearData : function() {
        this.duration.time = this.duration.default;
        this.record.temporary = [];
        this.timeout_var = null;
    }
}

export default RecordJS;