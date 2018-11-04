$("#content2").hide();
$("#content3").hide();
//start game
$("#start").on('click',startgame)

function startgame(){
    timeleft();
    loadquestion();
};
var IntervalId;
var count=90;
function timeleft(){
    IntervalId=setInterval(timecount,1000)
};
function timecount(){
    count--;
    $("#timer").html("Time Rmaining: "+count+" Seconds");
    if(count===0){
        getresult();
        clearInterval(IntervalId);
    }
}
function loadquestion(){
$("#content1").hide();
$("#content2").show();
}
var correctanswer=0;
var incorrecanswer=0;
var unansweredquestion=0;
$("#correct").html("Correct Answer: "+correctanswer);
$("#incorrect").html("Incorrect Answer: "+incorrecanswer);
$("#unanswered").html("Unanswered: "+unansweredquestion);

$("#done").on('click',getresult);
//get result
function getresult(){
    $("#content2").hide();
    $("#content3").show();
    clearInterval(IntervalId);
var userchoice=[
    $('input[name="radio_1"]:checked').val(),
    $('input[name="radio_2"]:checked').val(),
    $('input[name="radio_3"]:checked').val(),
    $('input[name="radio_4"]:checked').val(),
    $('input[name="radio_5"]:checked').val(),
    ]
for(var i=0;i<userchoice.length;i++){
    if(userchoice[i]==="1"){
        correctanswer++;
        $("#correct").html("Correct Answer: "+correctanswer);
    }
    else if(userchoice[i]==="0"){
        incorrecanswer++;
        $("#incorrect").html("Incorrect Answer: "+incorrecanswer);
    }
    else{
        unansweredquestion++;
        $("#unanswered").html("Unanswered: "+unansweredquestion);
    }
}
    };