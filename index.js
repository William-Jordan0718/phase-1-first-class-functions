function receivesAFunction(callBack) {

    return callBack()
}

receivesAFunction(callBack)

function returnsANamedFunction() {
    return namedFunction()
}

returnsANamedFunction()