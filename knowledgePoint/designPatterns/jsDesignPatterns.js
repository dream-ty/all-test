// 工厂模式
var BicycleShop = function(){};
BicycleShop.prototype = {
    constructor: BicycleShop,
    /*
    * 买自行车这个方法
    * @param {model} 自行车型号
    */
    sellBicycle: function(model){
        var bicycle = this.createBicycle(mode);
        // 执行A业务逻辑
        bicycle.A();

        // 执行B业务逻辑
        bicycle.B();

        return bicycle;
    },
    createBicycle: function(model){
        throw new Error("父类是抽象类不能直接调用，需要子类重写该方法");
    }
};

