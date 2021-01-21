$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings("textarea").val();
        var time = $(this).siblings("textarea").attr("data-military");

        localStorage.setItem(time, text);
    });

   //var currentHour = moment().hours();

   $("textarea").each(function(){

        var textAreaTime = parseInt($(this).attr("data-military"));

        if (textAreaTime < currentHour){
            $(this).addClass("past");
        } else if (textAreaTime === currentHour){
            $(this).addClass("present"); 
        } else {
            $(this).addClass("future");
        }
    })

    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
});