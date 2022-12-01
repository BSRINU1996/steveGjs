console.log("hello, good morning!");
let arr = [ 1,2,3,4,5,6,7,8,9,'srinu',"madhu", "bali"];
let ele = arr.at(9);
console.log(ele);

let arr1 = [89,45,37];
let arr3 = arr1+arr
console.log(arr3);
document.write(arr3)
console.log(typeof arr3)
console.log(arr3.at(-7));
str = "srinu";
console.log(str.at(-4))

//The join() method also joins all array elements into a string.

//It behaves just like toString(), but in addition you can specify the separator:
const fruits  = ["apple", "orange", "banana"];
console.log(fruits.join("@"));
console.log(fruits.toString())
let Arr = [1,2,3,4,5,6];
console.log(Arr.toString())

//object methods
let westeros = {
    cersei: 'Lannister',
    arya: 'Stark',
    jon: 'Snow',
    brienne: 'Tarth',
    daenerys: 'Targaryen',
    theon: 'Greyjoy',
    jorah: 'Mormont',
    margaery: 'Tyrell',
    sandor: 'Clegane',
    samwell: 'Tarly',
    ramsay: 'Bolton'
}
let keysArr = Object.keys(westeros);
console.log(keysArr);
console.log( typeof keysArr);
let valArr = Object.values(westeros);
console.log(valArr);
console.log(typeof valArr);
let nestobj = Object.entries(westeros)
console.log(nestobj);
console.log(nestobj[0]);
console.log(nestobj[6]);
console.log(nestobj[4].length);


//NODELIST................


const myNodelist = document.querySelectorAll("p");

 document.getElementById("demo").innerHTML = "The innerHTML of the second paragraph is: " + myNodelist[4].innerHTML;
console.log(myNodelist);
console.log(myNodelist[4]);
console.log(myNodelist[3])
console.log(myNodelist[2]);
console.log(myNodelist[1]);
console.log(myNodelist[0]);
console.log(myNodelist.length);
for(let i= 0 ; i<myNodelist.length ; i++){
    if (i > 3){
        myNodelist[i].style.color = "red";

    }
    else{




        
        myNodelist[i].style.color = "green";

    }
}
/*
A NodeList may look like an array, but it is not.

You can loop through a NodeList and refer to its nodes by index.

But, you cannot use Array methods like push(), pop(), or join() on a NodeList.

*/
// console.log([1,2,3,4,5].pop());

// console.log([1,2,3,4].push(2));


//classes
//Constructot function

function Javascript(methods){
    this.methods = "arraymethods"
}
let jsm =  new Javascript("unshiftmethod");
console.log(jsm);