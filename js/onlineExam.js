//alert("great")

function sub(){
   // alert("great")
setTimeout(function(){
    //alert("great")

    const dis = document.querySelector(".display");
    const start = document.querySelector(".sub");
    let info = document.querySelector("#infomation")
// start.addEventListener("click",function(){
    //alert("great")  
    // document.querySelector("#infomation").innerHTML="Your time starts now"
       const question1 = document.onlineExam.q1.value; 
    
    
    const question2 = document.onlineExam.q2.value;
    //alert("question2")
    const question3 = document.onlineExam.q3.value; 
    const question4 = document.onlineExam.q4.value;
    const question5 = document.onlineExam.q5.value; 
    const question6 = document.onlineExam.q6.value;
    const question7 = document.onlineExam.q7.value; 
    const question8 = document.onlineExam.q8.value;
    const question9 = document.onlineExam.q9.value; 
    const question10 = document.onlineExam.q10.value;

    const question11 = document.onlineExam.q11.value; 
    const question12 = document.onlineExam.q12.value;
    const question13 = document.onlineExam.q13.value; 
    const question14 = document.onlineExam.q14.value;
    const question15 = document.onlineExam.q15.value; 
    const question16 = document.onlineExam.q16.value;
    const question17 = document.onlineExam.q17.value; 
    const question18 = document.onlineExam.q18.value;
    const question19 = document.onlineExam.q19.value; 
    const question20 = document.onlineExam.q20.value;
   // alert(question1)
   // to pass a message using an array
   let result = 0;
   let message =[ "National Assembly","June 12","360","109","Taiwo Akinkumi","Mary Slessor","2014","Ondo State","Baylsa State","Lagos State","1929","Ekiti State","Mungo Park","1973","Mississippi","New York","Russia","Ibadan","China","Australia"];

let score = ["Exellent","Good Attempt","Try Harder","pass","fail"]

if(question1===message[0]){
    result++;
}


if(question2===message[1]){
    result++;
}

if(question3===message[2]){
    result++;
}

if(question4===message[3]){
    result++;
}

if(question5===message[4]){
    result++;
}

if(question6===message[5]){
    result++;
}

if(question7===message[6]){
    result++;
}

if(question8===message[7]){
    result++;
}

if(question9===message[8]){
    result++;
}

if(question10===message[9]){
    result++;
}

if(question11===message[10]){
    result++;
}

if(question12===message[11]){
    result++;
}

if(question13===message[12]){
    result++;
}

if(question14===message[13]){
    result++;
}

if(question15===message[14]){
    result++;
}

if(question16===message[15]){
    result++;
}

if(question17===message[16]){
    result++;
}

if(question18===message[17]){
    result++;
}

if(question19===message[18]){
    result++;
}

 if(question20===message[19]){
    result++;
 }
// alert(result)
//verify how many question users got correctlly
//alert(result)

let verify;

if(result<5){
    verify=4;
}
else if(result>5 && result<=8){
    verify = 3;
}else if(result>8 && result<=10){
    verify = 2;
}else if(result>10 && result<=15){
    verify = 1;
}else if(result>15){
    verify = 0;
}
infomation.innerHTML =score[verify];
document.getElementById("answer").innerHTML = `YOU SCORED ${result}`;
if(result===5){
    document.getElementById("answer").innerHTML = "You scored"+result+"you failed,you have to repeat"
    display.classList.add("fail")
}else if(result>8 ){
    document.getElementById("answer").innerHTML = `You pass ${result}`
    display.classList.add("pass")
}else if(result>10){
    document.getElementById("answer").innerHTML =`TRY HEADER ${result}`
    display.classList.add("tryHarder")
}else if(result>12){
    document.getElementById("answer").innerHTML = `You made a good attempt ${result}`
    display.classList.add("goodAttempt")
}else if(result>15){

    document.getElementById("answer").innerHTML =`Exellence`
    display.classList.add(execllent)
}

},15000)



}