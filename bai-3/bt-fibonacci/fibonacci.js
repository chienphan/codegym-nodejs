const getFibonacciNumber = n => {
    let f0 = 0;
    let f1 = 1;
    let fn = 1;

    if (n <= 0) {
        return -1;
    } else if (n == 1) {
        return f0;
    } else if ( n == 2) {
        return f1;
    } else {
        for (let i = 3; i < n; i++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn;
}

module.exports = getFibonacciNumber