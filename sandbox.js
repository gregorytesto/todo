let obj1 = {
    name:"Samantha"
}

let obj2 = {
    name:"Samantha"
}


let arr = [
    obj1,
    obj2
]

let newArr = [ ...arr ];

newArr[0].name = "Samantha2";

// console.log(newArr === arr);

console.log(arr[0], newArr[0]);
