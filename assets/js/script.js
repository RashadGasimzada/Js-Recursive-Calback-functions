let array = [1, 2, 3, 4, 5];

function createMap(array,lambda){

    let result = [];

    for (const item of array) {

        result.push(lambda(item))
    }
    return result;
}

function multiplyTwo(n){
    return n * 2
}

console.log(createMap(array,n => n*2));

let result = array.map(m => m);

console.log(result);

array[0] = 10;

console.log(array)

console.log(result);

console.log(array.map(m => m * 2));

 array.forEach((n,i) => {

    console.log(n + " " +i);
});