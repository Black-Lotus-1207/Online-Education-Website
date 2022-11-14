function check(){
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var q9=document.quiz.question9.value;
    var q10=document.quiz.question10.value;
    var result
    if(q1=="b")
        {c++}
    if(q2=="a")
        {c++}
    if(q3=="memory")   
        {c++}
    if(q4=="system bus")
        {c++}
    if(q5=="Central processing unit"){c++}
    if(q6=="I/O"){c++}
    if(q7=="control unit"){c++}
    if(q8=="Registers"){c++}
    if(q9=="CPU interconnection"){c++}
    if(q10=="ALU"){c++}
    document.write(c);
}