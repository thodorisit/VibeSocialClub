const VibrateMiddleware = {
    availability : function() {
        if ("vibrate" in navigator) {
            return true;
        } else {
            return false;
        }
    }
}

export default VibrateMiddleware;