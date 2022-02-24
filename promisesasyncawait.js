function myDisplayer(some) {
    console.log(some)
}
let myPromise = new Promise(function (myResolve, myReject) {
    let x = 50;
    count = 0
    let arr = [2, 3, 5, 7]
    for (let item of arr) {
        for (i = 0; i <= x; i++) {
            if (i % item == 0) {
                count++
            }
        }
    }
    if (count > 13) {
        myResolve("sucess");
    } else {
        myReject("Error");
    }
});
myPromise.then(
    function (value) {
        myDisplayer(value);
    },
    function (error) {
        myDisplayer(error);
    }
);


async function Display_name() {
    let myPromise = new Promise(function(resolve, reject) {
        let x=0
      if (x==0){
          resolve("Hello")
      }
      else{
          reject("you are rejected")
      }
    });
    console.log(await myPromise)
  }
  
 Display_name();




const isSticksFound = true;
const isLighterFound = true;

const gathering = () => {
    return new Promise((resolve, reject) => {
        isSticksFound ? resolve("Sticks Gathered") : reject("Sticks Not Found")
    })
}
const arranging = () => {
    return new Promise((resolve, reject) => {
       isSticksFound ? resolve("Sticks Arranged") : reject("Sticks not-Arranged")
    })
}
const lighting = () => {
    return new Promise((resolve, reject) => {
        isLighterFound ? resolve("Campfire Lighted") : reject("Lighter Not Found")
    })
}

const res = async () => {
    const fire = await gathering()
    console.log(fire)
    const arrange = await arranging()
    console.log(arrange)
    const light = await lighting()
    console.log(light)
}
res()

let user_pin_1 = 1234
let org_pin = 0220
let name = "Chandu Senapathi"
let figure_pin = () => {
    return new Promise((resolve, reject) => {

        if (user_pin_1 == org_pin) {
            resolve(`Welcome my dear ${name}`)
        } else {
            reject(`You entered wrong pin my dear ${name}`)
        }
    })
}

let call_pin = async () => {
    try {
        let res = await figure_pin()
        console.log(res)
    }catch{
        console.log("error")
    }
}
call_pin()