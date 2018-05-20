var value = {};

/**
 * Check string is a number or not. Not ignoring spaces.
 * @param {*} value 
 */
value.stringIsNumber = (value) => {
    if (value instanceof String) {
       return !Number.isNaN(value);
    }
    return false;
}


export default connection;