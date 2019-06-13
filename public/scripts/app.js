function createTweetElement(tweetData) {
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
            ${tweetData.created_at}
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

function renderTweets(data) {
  console.log(data);
  for (let user of data) {
    $("#tweet-container").append(createTweetElement(user))
  }
}



function loadTweets() {
  $.ajax({
    type: "GET",
    url: "/tweets",
    success: function (response) {
      renderTweets(response);
    },
  })
}

loadTweets();



$(function () {
  let $formID = $('#compose-tweet-form');
  $formID.submit(function (event) { //target form on submission and prevent its default behaviour(redirect)
    console.log('Form submitted, performing ajax call...');
    event.preventDefault();
    if ($(".text-area").val().length === 0) {

      alert("Not so fast, buster")

    } else if ($(".text-area").val().length > 140) {

      alert("Take it down a notch. Or two.")

    }
    $(".text-area").text($(".text-area").val()) // escape dangerous text inputs
    let queryString = $(this).serialize(); //input text to server communication
    $.ajax({ //send new tweet to server and when successful render on main
      type: "POST",
      url: "/tweets",
      data: queryString,
      success: function loadTweets() {
        $.ajax({
          type: "GET",
          url: "/tweets",
          success: function (response) {
            renderTweets(response);
          },
        })
      }
    })
  });
});

$(function () {
  $("#compose-button").click(function () {
    $(".new-tweet").slideToggle();
    $(".text-area").select();
    $(".text-area").focus();
  });
});