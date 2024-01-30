// task 2
//BMI CALCULATE
  const weight=62;
  const height=1.74; //meter e convert 
  const BMI=weight/ Math.pow(height,2)  ;
  console.log(BMI);
 if(BMI<18.5){
  console.log('you are under weight');
 }
 else if (BMI<18.5){
    console.log('you are normal');
 }
 else if(BMI>=18.5 && BMI<=24.9){
    console.log('you are over weight');
 }

 else{
    console.log('you are obese');
 }


   // task 3
   //grade calculate
    const grade=60;
    if(grade>=90 &&grade<=100){
      console.log('A');
    }
    else if(grade>=80 && grade<=89){
      console.log('B');

    }
    else if(grade>=70&& grade<=79){
      console.log('C');
    }
   else if(grade>=60 && grade<=69){
    console.log('D');
   }
   else if(grade>=0 && grade<=59){
    console.log('F');
   }
  //task5
  //use if else condition
 let num1=7;
  let num2=9;
  let result=num1+num2;
 /* if(num1>num2){
    console.log(num1*2);
  }
else{
  console.log(result);
}*/
  // ternary operator
   
 num1=num1>num2? console.log(num1*2):console.log(result)
  //task 6
  let ticket=800;
  let age=70;
  const student=true;
  if(age<10){
    console.log('free')
  }
  else if(student){
    //50% discount
     let discount=ticket *50/100;
 let payment=ticket-discount;
console.log(payment);
}
  else if(age >=60 && !student){
    //15% discount
    let discount=ticket *15/100;
    let payment=ticket-discount;
    console.log(payment);
  }
 
  else{
    console.log(ticket);
  }
   //task 1
 /* Free Drinks
  - Burger more than 500tk: free Coke
  - Else Coke: 30tk
*/

  
  let burgerPrice=700;
  if(burgerPrice>500){
    console.log("free coke");
  }
  else{
    console.log('coke: 30tk');
  }