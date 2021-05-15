const Str = {
    isNotEmpty : function(str) {
        if (str == null || str == undefined || str == '') {
            return false;
        }
        return Boolean(str.trim());
    },
    validateEmail : function(email) {
        var regPattern = /\S+@\S+\.\S+/;
        return regPattern.test(email);
    },
    validateIsInteger : function(value) {
        var value_parsed = parseInt(value, 10);
        if (isNaN(value_parsed)) {
            return false;
        } else {
            return value_parsed;
        }
    }
}

export default Str;