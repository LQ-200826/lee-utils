const first = function (array, num) {
    if (!Array.isArray((array))) {
        console.log(typeof  array)
        throw new Error(`期望 array 是一个数组，但是得到的是 ${typeof array}`)
    }

    if (!num || num === 1) {
        return array[0]
    }

    return array.slice(0, num)
}

module.exports = first
