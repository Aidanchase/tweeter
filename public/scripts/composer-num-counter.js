$(document).ready(function () {
    $(".text-area").on("input", function (event) {
         let tweetLength = $(this).val().length;  //find input length
        let remainingLength = 140 - tweetLength;
        $(this).siblings("#counter").text(remainingLength);
        let status;
        if (remainingLength < 0) {
            status = "over";
        } else if (remainingLength <= 10) {
            status = "warning";
        } else {
            status = "normal";
        }
        $(this).siblings("#counter").attr("data-status", status);
    });
});