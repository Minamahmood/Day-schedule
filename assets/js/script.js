var currentDate = moment().format("MM/DD/YYYY");

var timeArr = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

function updatetime() {
    var currentTime = moment().format("H");
    $("#theDate").append(currentDate);
    console.log(currentTime);
    for (var i = 0; i < timeArr.length; i++) {
        if (parseInt(timeArr[i]) == currentTime) {
            console.log("present", timeArr[i]);
            $("#" + i).attr("style", "background-color:green");
        } else if (parseInt(timeArr[i]) > currentTime) {
            console.log("fututar", timeArr[i]);
            $("#" + i).attr("style", "background-color:white");
        } else if (parseInt(timeArr[i]) < currentTime) {
            console.log("past", timeArr[i]);
            $("#" + i).attr("style", "background-color:lightpink");
        }
    }
}
updatetime();
$(".rowBtn").on("click", function() {
    var currentTime = $(this).parent().attr("id");
    var dayPlan = $(this).parent().find("input").val();
    localStorage.setItem(currentTime, dayPlan);
});
$("#time").each(function() {
    var currentTime = $(this).attr("input");
    var dayPlan = localStorage.getItem(currentTime);
    $(this).find("id").val(dayPlan);
});