var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let ary = [];

for( let i=0; i < numbers.length; i++){ 

    if (numbers[i] % 2 === 0){
        ary.push(numbers[i])
    }   
}
console.log(ary)
