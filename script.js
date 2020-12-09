const readline = require("readline");
const inp = readline.createInterface({
  input: process.stdin
});
  const userInput=[];


inp.on("line", (data) => {
    userInput.push(data);
});
inp.on("close" ,() => {
   let a=parseInt(userInput[0]);
   let arr=["kalai","kavin","jeeva",9,12,15];
   let d=function(a,arr){
       let k=a%arr.length;
  let v=arr.slice(k);
  let r=arr.slice(0,k);
   return v.concat(r);
   };
   let output=d(a,arr);
  console.log("Rotated by anonymous function ",output);
    ((a,arr)=>{let k=a%arr.length;
   let v=arr.slice(k);
   let r=arr.slice(0,k);
   let d=v.concat(r);
  console.log("Rotated by iife",d);})(a,arr);
  let odd=function(a){
      let b=[];
      for(let i=0;i<a.length;i++)
      {
          a[i]=parseInt(a[i]);
      }
      for(let i=0;i<a.length;i++)
      {
         if(a[i]%2===1)
         {
             b.push(a[i]);
         }
      }
      return b;
  };
 let odd_num=odd(arr);
 console.log("oddnumder in an array using anonymous function ",odd_num);
 ((a)=>{
     let b=[];
      for(let i=0;i<a.length;i++)
      {
          a[i]=parseInt(a[i]);
      }
      for(let i=0;i<a.length;i++)
      {
         if(a[i]%2===1)
         {
             b.push(a[i]);
         }
      }
       console.log("oddnumder in an array using iife function ",b);
 })(arr);
 let g="google is better to use ";
 let up=function(a){
     let b=a.toUpperCase();
     return b;
 };
 let cap=up(g);
 console.log("To CAPs using anonymous function :",cap);
 ((a)=>{
     let b=a.toUpperCase();
     console.log("To CAPs using iife function:",b);
 })(g);
   let sum =function(a){
      let b=0;
      for(let i=0;i<a.length;i++)
      {
          a[i]=parseInt(a[i]);
      }
      for(let i=0;i<a.length;i++)
      {
          if(a[i]===parseInt(a[i]))
          {
                b=b+a[i];
          }
      }
      return b;
  };
  let total=sum(arr);
  console.log("Total using anonymous function :",total);
  ((a)=>{
      let b=0;
       for(let i=0;i<a.length;i++)
      {
          if(a[i]===parseInt(a[i]))
          {
                b=b+a[i];
          }
      }
      console.log("Total using iife function:",b)
  })(arr);
});
