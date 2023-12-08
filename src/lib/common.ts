function IsEqualArrays(a: [any] | [], b: [any] | []): boolean {
    if ((a === b) || (a == null && b == null) || (Array.isArray(a) && a.length == 0 && Array.isArray(b) && b.length == 0)) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        //for object id
        if (typeof a[i] != typeof b[i]) return false;

        if (typeof a[i] == 'object') {
            if (JSON.stringify(a[i]) != JSON.stringify(b[i]))
                return false;
        }
        else if (a[i] !== b[i]) return false;
    }
    return true;
}

export {
    IsEqualArrays
}