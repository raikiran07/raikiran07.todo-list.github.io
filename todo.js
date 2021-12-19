'use-strict';

let jobs = [];
let begin = true;

const startBtn = document.getElementById("btn-start");

function add(){

  const des = prompt("enter job description:");
  console.log(des);
  jobs.push(des);
  if(des!=null){
      add();
  }
  else{
      jobs.pop();
  }
  
//   console.log(jobs);
}


function del(){
   if(jobs.length!=0){
    const desNum = prompt("enter the number:");
    const numIndex = desNum - 1;
    jobs.splice(numIndex,1)
    // console.log(jobs);
   }
   else{
       prompt("list is empty");
       
   }

}

function showList(){
    
    if(jobs.length==0){
        console.log("list is empty!");
    }
    else {
        console.log(jobs)
    }
}

function start(){
   const ans = prompt( `1.add a job \n 2.delete a job \n3.show the list \n4.close the app`);
   if(ans==1){
       add();
   }
   else if(ans==2){
       del();
   }
   else if(ans==3){
       for(let i=0;i<jobs.length;i++){
           console.log(`${i+1} : ${jobs[i]}`);
       }
   }
   else{
       begin = false;
   }
}




startBtn.addEventListener('click',function(){
    // startBtn.innerText = "Running...";

    while(begin){

    start();
}
})
