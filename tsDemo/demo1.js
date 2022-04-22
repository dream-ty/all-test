// unknown 加 断言正确校验
function divide(param) {
    return param / 2;
}
// 元组
var arr1 = ['1', 2];
arr1[1] = 1;
// arr1[2] =1
// arr1.push(true)
arr1.push(1);
// arr1.pop(0)
function add1(x, y) {
    return x + y;
}
var add21 = function (x, y, z) {
    return x + y;
};
function add31(x, y) {
    if (x === void 0) { x = 100; }
    return x + y;
}
add31(undefined, 10);
// add31(null,10)   // 无法使用 void 0 为undefined
// add21 = () => { }
var add3 = add21;
add21 = function () { return 1; };
function aadd(x) {
    if (typeof x[0] === 'string') {
        return x.join();
    }
    if (typeof x[0] === 'number') {
        return x.reduce(function (acc, cur) { return acc + cur; });
    }
}
// 泛类型
function badd(x) {
    if (typeof x[0] === 'number') {
        return x.reduce(function (acc, cur) { return acc + cur; });
    }
    if (typeof x[0] === 'string') {
        return x.join();
    }
}
badd([12]);
badd(['1']);
