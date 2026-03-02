var arr=[1,2,3,4,5];
arr.forEach(function(val){
    console.log(val+ " is a number");
})

var newArr=arr.map(function(val){
    return val*2;
})
console.log(newArr);

const filteredArr=arr.filter(function(val){
    return val%2==0;
})
console.log(filteredArr);

var obj={
    name:"Sachin",
    age:20
}
console.log(obj.name);
console.log(obj['age']);
obj.freeze(age);//it remains 20 not able to change

function add(a,b,c,d){

}
console.log(add.length);//gives the number of parameter present in the function

async function abcd(){
    var blob = await fetch(`https://randomuser.me/api/`);
    var data = await blob.json();
    console.log(data.results);
}
abcd();


