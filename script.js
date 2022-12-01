//FIRST HOMEWORK


const array = [1, 2, 3, 5, -7, 8, -2];
const positiveNums = array.filter((num)=> num>0)
console.log(positiveNums);

const totalSum = positiveNums.reduce((a, b)=> {
    return a+b;
},0);

console.log(totalSum);


//SECOND HOMEWORK


const namearr = ['veronika', 'nina', 'luca', 'veronika', 'andrea', 'luca'];
const matchingNames = namearr.reduce((a,b)=> 
{return { ...a, [b]: (a[b] || 0) + 1 };
}, {});

console.log(matchingNames);


//THIRD ONE

class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
      this.speed = 0;
      this.motion = "the car is not moving";
    }
    check_motion() {
      if (this.speed > 0) {
        return (this.motion = " Car is moving");
      } else {
        return (this.motion = "Car is not moving");
      }
    }
    accelerate(speed) {
      this.speed = this.speed + speed;
      return this.speed;
    }
    brake(speed) {
      this.speed = this.speed - speed;
      return this.speed;
    }
    emergency_brake() {
       (this.speed = 0);
       return (this.speed = 0);
    }
    status() {
      return `${this.brand} ${this.model} ${myCar.check_motion()} ${this.speed} km/h `;
    }
  }
  const myCar = new Car("somecar", "somecarname");
  myCar.speed = 0;
  console.log(`"check_motion"`, myCar.check_motion());
  console.log(`"brake"`, myCar.brake(13));
  console.log(`"accelerate"`, myCar.accelerate(15));
  console.log( `"myCar"`, myCar.status());



//HOMEWORK 4


const firstNum = 5;
const secondNum= 5;

// const firstNum = 0;
// const secondNum= 0;
// const firstNum = 13;
// const secondNum= 8;

// const firstNum =90;
// const secondNum=19;

// const firstNum =90;
// const secondNum=197;

const addAsync=new Promise((resolve,reject)=>{
    if(firstNum > secondNum){
        resolve(`${firstNum} ნაკლებია, ვიდრე ${secondNum}`)
    }
    else if(firstNum < secondNum){
        resolve(`${secondNum} მეტია, ვიდრე  ${firstNum}`)
    }
    else if(firstNum === secondNum){
        resolve(`${secondNum} უდრის ${firstNum}`)
    }
    else{
        reject("sorry, SMTH went wrong!")
    }
})

.then((resolve)=>console.log(resolve))
.catch((error)=>console.log(error))



//EDITED VERSION HOMEWORK 4 




const firstNum = 5;
const secondNum= 5;

// const firstNum = 0;
// const secondNum= 0;
// const firstNum = 13;
// const secondNum= 8;

// const firstNum =90;
// const secondNum=19;

// const firstNum =90;
// const secondNum=197;

const addSync = (a,b) => {
    return new Promise((resolve, reject)=>{
        if(firstNum > secondNum){
                    resolve(`${firstNum} ნაკლებია, ვიდრე ${secondNum}`)
                }
                else if(firstNum < secondNum){
                    resolve(`${secondNum} მეტია, ვიდრე  ${firstNum}`)
                }
                else if(firstNum === secondNum){
                    resolve(`${secondNum} უდრის ${firstNum}`)
                }
                else{
                    reject("sorry, SMTH went wrong!")
                }
            })
            
            .then((resolve)=>console.log(resolve))
            .catch((error)=>console.log(error))
    
}
