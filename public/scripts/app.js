

const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

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
console.log(data);
function renderTweets(data) {
    console.log(data);
    for (let user of data){
        $("#tweet-container").append(createTweetElement(user))
    }
}
$(document).ready(function(){
    renderTweets(data);
})

$(function() {
  let $formID = $('#compose-tweet-form'); 
    $formID.submit(function(event){ //target form on submission and prevent its default behaviour.
      console.log('Form submitted, performing ajax call...');
      event.preventDefault();
      let queryString = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: queryString,
        success: console.log("OH GOD, OH MY, OH GOD!")
      })
    });
    });
