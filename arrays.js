// Write a function that accepts an array of 
// strings and console.logs each element using a for loop.
function logArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  
  }
  const myArray = ["apple", "banana", "cherry"];
logArrayElements(myArray);
  
}


// Write a function that accepts an array of numbers and uses
//  the forEach() method to console.log each number multiplied by 2.
function Numbers(numbers) {
    numbers.forEach(function(number) {
      console.log(number * 2);
    });
  }
  const numbers = [1, 2, 3, 4, 5];
  Numbers(numbers);

//   Write a function that takes in an array of numbers and consoles 
// the first four items multiplied by 8 and the last two added by 5.
//  Console the array with the new values

  function Array(arr) {
    for (let i = 0; i < 4; i++) {
      arr[i] *= 8;
    }
  
   
    const lastIndex = arr.length - 1;
    arr[lastIndex] += 5;
    arr[lastIndex - 1] += 5;
  
    
    console.log(arr);
  }
  const myArray = [2, 4, 6, 8, 10, 12];
Array(myArray); 

// Write a function that takes in the following array and
//  use a while loop to iterate and break when the item 
// is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];
function logArrayElements(arrNum) {
    let i = 0;
    while (i < arrNum.length) {
      if (i === 3) {
        break;
      }
      console.log(arrNum[i]);
      i++;
    }
  }
  let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
logArrayElements(arrNum);

// Write a function that takes in a an array of 
// strings and use a continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']
function Fruits(fruits) {
    for (let i = 0; i < fruits.length; i++) {
      if (i === 2) {
        continue;
      }
      console.log(fruits[i]);
    }
  }
  let fruits= ['apple','plum','banana','strawberries','kiwi'];
  Fruits(fruits);
    
