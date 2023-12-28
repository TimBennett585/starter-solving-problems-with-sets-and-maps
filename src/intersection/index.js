function intersection(a, b) {
    let temp = new Map();
    let tempSet = new Set();


    for (let i = 0; i < a.length; i++) {
        temp.set(a[i]);
    }

    for (let i = 0; i < b.length; i++) {
        if (temp.has(b[i])) {
            tempSet.add(b[i]);
        }
    }

    let result = [...tempSet];
    return result;
}

module.exports = intersection;
