    

    /* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
    let sum=0;
  for(let a=1; a<=150; a++){
     sum=sum+a;
      console.log(sum);
      if(sum>100){
        break;
      }
  }
