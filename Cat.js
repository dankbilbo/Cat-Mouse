class Cat{
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }
    mew(){
        return `mew mew`;
    }
    catchRat(rat){
        if(this.maxSpeed > rat.maxSpeed){
            return true;
        }
        return false;
    }
    eatRat(rat){
        let oldWeight = this.weight;
        if(this.catchRat(rat) == true && rat.status == true){
            this.weight += rat.weight;
        }
        alert(`can nang cua ${this.name} la : ${oldWeight} can nang moi sau khi an ${rat.name} : ${this.weight}`);
    }
    setName(name){
        this.name = name;
    }
    setWeight(weight){
        this.weight = weight;
    }
    setMaxSpeed(maxSpeed){
        this.maxSpeed = maxSpeed;
    }
}
let cat = new Cat();
cat.setName("Tom");
cat.setWeight(100);
cat.setMaxSpeed(20);
cat.eatRat(rat);

