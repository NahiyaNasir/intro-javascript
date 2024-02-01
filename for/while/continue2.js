
/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
   let n=55;
   while(n<85){
    n++;
     if(n%2==0){
        continue;
     }
     console.log(`odd number`,n)
   }
  