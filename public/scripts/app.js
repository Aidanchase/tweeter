function createTweetElement(tweetData) { //template literals used to render new tweet container and styling
  let HTMLTemplate = `<article>
        <header class="user-info">
          <div class="user-profile">
            <img class="user-avatar" src="${tweetData.user.avatars.small}">
            <h2 class="username">${tweetData.user.name}</h2>
          </div>
          <span class="tweeter-handle">
            ${tweetData.user.handle}
          </span>
        </header>
        <section class="tweet-text">
          ${tweetData.content.text}
        </section>
        <hr class="footer-hr">
        <footer>
          <span class="time-stamp">
            ${timeAgo(tweetData.created_at)}
          </span>
          <span class="user-action-icons">
            <i class="fa fa-flag"></i>
            <i class="fa fa-pied-piper-alt"></i>
            <i class="fa fa-heart"></i>

          </span>
        </footer>
      </article>
     
      `;
  return HTMLTemplate;
}

function renderTweet(data) {
  $("#tweet-container").prepend(createTweetElement(data))
}

function loadTweets(callback) { //$jquery/ ajax request to load new tweets onto page and add tweets to database
  $.ajax({
    type: "GET",
    url: "/tweets",
    success: callback
  })
};

loadTweets(function (response) {
  response.forEach((tweet) => renderTweet(tweet))
});

$(function () {
  $("#compose-button").click(function () { //toggles compose tweet form on click
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    $(".new-tweet").slideToggle();
    $(".text-area").select();
  });
  let $formID = $('#compose-tweet-form');
  $formID.submit(function (event) { //target form on submission and prevent its default behaviour(redirect)
    console.log('Form submitted, performing ajax call...');
    event.preventDefault();
    if ($(".text-area").val().length === 0) { //shows error message if tweet is empty /or too long
      $(".new-tweet h3").show().css("opacity", 1);
    } else if ($(".text-area").val().length > 140) {
      $(".new-tweet h3").show().css("opacity", 1);
    } else {
      $(".new-tweet h3").css("opacity", 0);
    }
    $(".text-area").text($(".text-area").val()) // escape dangerous text inputs
    let queryString = $(this).serialize(); //input text to server communication
    $.ajax({ //send new tweet to server and when successful render on main
      type: "POST",
      url: "/tweets",
      data: queryString,
      success: loadTweets.bind(null, function (response) {
        let lastTweet = response[response.length - 1];
        renderTweet(lastTweet);
      })
    });
  });
});