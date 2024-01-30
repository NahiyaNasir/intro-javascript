//task1
//Declare an array
/*Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array*/



const fruits=['banana', 'lichi',  'mango', 'guava', 'orange']
console.log(fruits[2]);
 fruits[1]='jambura';
console.log( fruits[1]);
console.log(fruits);
//task2
/*Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output*/

   const  touristDestinations=['sajeck','bandorbon','coxsbazer' ]
  console.log(touristDestinations);
   touristDestinations.push('rangamati');
   console.log(touristDestinations);
  touristDestinations.push('uk', 'india');
  console.log(touristDestinations);
  touristDestinations.pop();
  console.log(touristDestinations);
   //task3
  /* Checking Array Membership with ‘includes’
   Instructions:
   
   Create an array of books containing different book.
   
   Use the includes method to check if the array contains a javascript book.
   
   Print a message to the console indicating whether the element is present in the array or not.*/
      const books=['bangle', 'english', 'html' ];
      console.log(books.includes('javascript'));
    console.log('the element is not present in the array');
   //  task 4
    /*Checking if it's an Array
    Instructions:
    
    Create different variables, each containing either an array or a non-array value.
    
    Now use isArray to check if each variable is an array.
    
    Print a message to the console indicating whether each variable is an array or not.*/
       let num=[2, 4, 6,8, 10];
       let num4='[]';
       let food=[];
       console.log(Array.isArray(num));
       console.log('num is an array');
       console.log(Array.isArray(num4));
       console.log('num4 is not an array');
       console.log(Array.isArray(food));
      // task5
      /* Combining Arrays
 Instructions:

 Create two arrays of your choice.
 Use the concat method to combine the two arrays into a new array.
 Print both the original arrays and the combined array using console.log().*/
 
   let num3=[4, 6, 8,9 ];
   let num5=[9,6,7,0,];
   console.log(num3);
   console.log(num5);

   console.log(num3.concat(num5));
  
