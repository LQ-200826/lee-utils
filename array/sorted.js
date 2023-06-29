
function defaultComparator(a, b) {
    return a - b
}

/**
 * 校验数组是否已经排序
 * @param array - 待校验的数组
 * @param comparator - 比较器
 */
function checkSort(array, comparator = defaultComparator) {
    if (!Array.isArray(array)) {
        throw new Error(`期望 array 是一个数组，但是得到的是 ${typeof array}`)
    }
    for (let i = 1, length = array.length; i < length; ++i) {
        if (comparator(array[i - 1], array[i]) > 0) {
            return false
        }
    }
    return  true
}

module.exports = checkSort
