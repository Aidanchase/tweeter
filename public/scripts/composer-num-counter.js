$(document).ready(function () {
    $(".text-area").on("input", function (event) {
        let tweetLength = $(this).val().length; //find input length
        let remainingLength = 140 - tweetLength;
        $(this).siblings("#counter").text(remainingLength); //displays counter on  new tweet  container
        let status;
        if (remainingLength < 0) { //sets status based on char count to change color
            status = "over";
        } else if (remainingLength <= 10) {
            status = "warning";
        } else {
            status = "normal";
        }
        $(this).siblings("#counter").attr("data-status", status);
    });
});