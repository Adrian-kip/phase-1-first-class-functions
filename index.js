function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function namedFunction() {
        return 'This is a named function.'
    }
}
function returnsAnAnonymousFunction() {
    return function () {
        return 'This is an annonymous function.'
    }
}