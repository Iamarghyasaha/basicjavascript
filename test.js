class Engine{
    constructor(parameter){
        this.parameter = parameter;
    }
}
class Tires{
    constructor(parameter){
        this.parameter = parameter;
    }
}
class Car{
    engine;
    tires;
    constructor(engine,tires){
        this.engine = engine;
        this.tires = tires;
    }
}
var myEngine = new Engine('para')
var myTires = new Tires('para');
var myCar = new Car(myEngine,myTires);
console.log(myCar.tires);
console.log("this  is for master test")
