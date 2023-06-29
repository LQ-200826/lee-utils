function last(array, num) {
    if (!Array.isArray((array))) {
        throw new Error(`期望 array 是一个数组，但是得到的是 ${typeof array}`)
    }

    if (!num || num === 1) {
        return array[array.length - 1]
    }

    return array.slice(-Math.abs(num))
}

module.exports = last
