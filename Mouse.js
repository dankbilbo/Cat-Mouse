class Rat{
    constructor(name, weight, maxSpeed, status) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
        this.status = status;
    }
    yell(){
        return `chit chit`;
    }
    setName(name){
        this.name = name;
    }
    setWeight(weight){
        this.weight = weight;
    }
    setSpeed(maxSpeed){
        this.maxSpeed = maxSpeed;
    }
    setStatus(status){
        this.status = status;
    }
}
let rat = new Rat();
rat.setName("jerry");
rat.setStatus(true);
rat.setSpeed(10);
rat.setWeight(50);
let jerryTalk = rat.yell();
console.log(jerryTalk);