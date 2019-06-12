$(document).ready(function() {
    $(".text-area").on("input", function(event){
        //find input lengtt
    let tweetLength = $(this).val().length;
    let remainingLength = 140 - tweetLength;
    $(this).siblings(".counter").text(remainingLength);

    })
});
  