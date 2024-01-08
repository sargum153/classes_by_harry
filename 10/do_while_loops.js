// do while loops execute at least once
/*syntax:= 
    do{
        code to be executed
    }
     while (condition)*/

     let n = prompt("Enter the value of n")
     n = Number.parseInt(n)
     let i = 0;
     do {
        console.log(i)
        i++;
     } 
     while (i<n)

     // Write a sample program demostrationg do while loops

     const numbers=[1,2,3,4,5,6];
     let index=0;
     do {
        console.log(numbers[index]);
        index++;
     }
      while(index < numbers.length)