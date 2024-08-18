//singleton
// Object.create


//object literals

const sym = Symbol("abc")

// console.log(typeof sym);

const jsuser ={
    name:'hitesh',
    location :'jaipur',
    lastlogindays:['monday','saturday'],
    isonline:false,
    [sym]:25,
    //adding function in object
    greetinginside:function()
    {
            console.log("inside the js user");
            
    }

}

// console.log(jsuser.name); 
jsuser.name="hiteshchoudhary.com"
// console.log(jsuser["isonline"]);
// console.log(jsuser);

// console.log(typeof sym);
// console.log("now printing jsuser.sym");
// console.log(typeof jsuser.sym);//undefined 
// console.log(typeof jsuser[sym]);

// Object.freeze(jsuser)
// jsuser.location="new"
 console.log(jsuser);


// jsuser.greeting = function(){
//     console.log("hey js user");
    
// }


// jsuser.greetingtwo=function(){
//     console.log(`hey js user two ${this.location} and ${this.isonline}`);
    
// }
// console.log(jsuser.greeting());
// console.log("second execution");
// console.log(jsuser.greetingtwo());
console.log("++++++++++++++++++++++++++++");
console.log(jsuser);
console.log("+++++++++++++++++++++++++++++++++++++++++");
console.log(jsuser.greetinginside());
console.log("++++++++++++++++++");
jsuser.greetingout1=function()
{
    console.log("out1");
    
}
console.log(jsuser);
console.log("++++++++");
console.log(jsuser.greetingout1());




















