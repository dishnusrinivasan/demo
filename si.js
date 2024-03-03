var obj1 = { name: "person 1", age: 5 }; // name - "person 1" ,
var obj2 = { age: 5, name: "person 1" }; // age - 5 ,

flag = false;

if (Object.keys(obj1).length == Object.keys(obj2).length) {
    //pass
    for (let key in obj1) {
        if (obj1[key] == obj2[key]) {
            flag = true;
        } else {
            console.log("mmbu1");
            flag = false;
            break;
        }
    }
} else {
    console.log(flag);
}

console.log(flag);