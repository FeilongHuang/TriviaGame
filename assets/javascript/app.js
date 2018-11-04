$("#content2").hide();
$("#start").on('click',startgame)

function startgame(){
    clearstart();
    timeleft();
    loadquestion();
};
function clearstart (){
    $("#content1").html("");
}
var TimeoutId;
var IntervalId;
var count=90;
function timeleft(){
    IntervalId=setInterval(time,1000)
};
function time(){
        count--;
        $("#timer").html("Time Rmaining: "+count+" Seconds");
    }
function loadquestion(){
$("#content2").show();
}
function getresult(){
    TimeOutId=setTimeout(90*1000)

};
$("#done").on('click',getresult)
 
//点击start跳转到开始，
//开始马上就进行倒计时，倒计时结束时出结果
//倒计时要用settimeout+功能，结束的功能就是得出结果并且跳转
//