var sorted = require('../index').sorted
var first = require('../index').first
var expect = require('chai').expect

describe('获取数组前 n 项', function () {
    it('获取第一项，返回第一项元素', function () {
        expect(first([1,2,3])).to.be.equal(1)
        expect(first([1,2,3], 1)).to.be.equal(1)
    })

    it('获取前 3 项，返回前 3 项元素数组', function () {
        expect(first([1,2,3,4,5,6,7,8], 3)).to.deep.equal([1,2,3])
    })

    it('非数组', function() {
        expect((function() {
            first()
        })).to.throw('期望 array 是一个数组，但是得到的是 undefined')
    })
})


describe('检测数组是否排序', function () {
    it('正序排序', function () {
        expect(sorted([1, 2, 3])).to.be.equal(true)
    })

    it('倒序排序', function () {
        expect(sorted([3, 2, 1], function (a, b) {
            return b - a
        })).to.be.equal(true)
    })

    it('非排序数组', function () {
        expect(sorted([1, 3, 2])).to.be.equal(false)
    })

    it('非数组', function() {
        expect((function() {
            sorted(1)
        })).to.throw('期望 array 是一个数组，但是得到的是 number')
        // expect(sorted.bind(null, 1)).to.throw('期望 array 是一个数组，但是得到的是 number')
    })
})


