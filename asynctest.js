// console.log("in async")

// async  function Hello(){

//     console.log("hello")
//     return 5;

// }

// Hello().then((x)=>{
//     console.log("the promise is ")
//     console.log(x)
// })


// async function getWeather(){

//     let bweather = new Promise((resolve,reject)=>{

//         console.log("in bweather")

//         setTimeout(()=>{
//             console.log("in bweather settime")
//             resolve(2500)
//         },2500) 
//     })



//     bweather
// }

// getWeather().then((x)=>{
//     console.log(x)
// })


// let p = new Promise((resolve, reject)=>{
    
//     setTimeout(()=>{
//         console.log("in settimeout ")
//         resolve("30")

//     },10000)
// })

// console.log(p)
// p.then((value)=>{
//     console.log("after resolving"+value)
// })
// console.log("outside")
// console.log(p);
// console.log(p);

// async function harry(){
//     console.log("harry")
//     return "hey"
// }

// harry().then((value)=>{
//     console.log(value)
// })



// let x = new Promise((resolve,reject)=>{
//     console.log("in x promise")
//     setTimeout(()=>{
//         console.log("starting")
//         resolve(25)
//     },5000)


// })

// x
// .then((value)=>{
//     console.log(value)
// })
// .finally(()=>{
//     console.log("x finally")
// })

// let y = new Promise((resolve,reject)=>{
//     console.log("in y promise")
//     setTimeout(()=>{
//         console.log("starting y ")
//         resolve(36)
//     },6000)
// })
// y.then((value)=>{
//     console.log(value)
// })
// y.finally(()=>{
//     console.log("y finally")
// })







async function getWeather(){

    let hyd = new Promise((resolve,reject)=>{
        console.log("startH")
        console.log("hyd weather")
        setTimeout(()=>{
        
        resolve(35)
        },9800)
        

    })

    let ban = new Promise((resolve,reject)=>{
        console.log("startB")
        console.log("ban weather")
        setTimeout(()=>{
            
            resolve(25)
        },7000)
        

    })

    let jai = new Promise((resolve,reject)=>{
        console.log("startJ")
        console.log("jai weather")
        setTimeout(()=>{
            
            resolve(35)
        },4000)
        

    })
    console.log("hyderabad weather is ")
   let HydW=  await hyd
   console.log(HydW);
   
   console.log("banglore weather is ")
   let BanW= await ban
   console.log(BanW)

   console.log("jaipur weather is ")
   let jaiW= await jai
   console.log(jaiW)
   return[HydW,BanW,jaiW]



    



}

console.log(getWeather())



