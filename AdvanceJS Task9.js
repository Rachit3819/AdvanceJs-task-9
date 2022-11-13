//Write a function and use 'call' to call the function

var obj={key:2}
var ans=function(a){
    return this.key+a
}
console.log(ans.call(obj,5))


//Write a program using apply

var obj={key:2}
var ans=function(a,b,c){
    return this.key+a+b+c
}
var arr=[3,5,7]
console.log(ans.apply(obj,arr))



//Write a program using bind

var obj={key:2}
var ans=function(a,b,c){
    return this.key+a+b+c
}
var xyz=ans.bind(obj)
console.log(xyz(1,2,3))


//Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.

var student={age:20}
var age=function(){
    return this.age
}
var bound=age.bind(student)
console.log(bound())





let multiply=function(x,y){
    return function(y){
        console.log(x*y)
    }   
}
let multiplyByThree=multiply(3)
multiplyByThree(5) 
let multiplyByFour=multiply(3)
multiplyByThree(6) 
let multipl=function(x,y){
    console.log(x*y)
}
let multiplyBy=multiply.bind(multiply,3)
multiplyBy(4)