$(document).ready(function () {
    $(".text-area").on("input", function (event) {
        //find input lengtt
        let tweetLength = $(this).val().length;
        console.log(tweetLength);
        let remainingLength = 140 - tweetLength;
        console.log(remainingLength);
        $(this).siblings("#counter").text(remainingLength);
        let status;
        if (remainingLength < 0) {
            status = "over";
        } else if (remainingLength <= 10) {
            status = "warning";
        } else {
            status = "normal";
        }
        $(this).siblings(".counter").attr("data-status", status);
    });
});