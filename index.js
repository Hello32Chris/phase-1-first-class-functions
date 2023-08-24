function receivesAFunction(thing) {
    thing();
};

function returnsANamedFunction() {
    return function thing() {
        console.log('hello');
    }
};

function returnsAnAnonymousFunction() {
    return function () {};
};