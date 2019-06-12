const tweetData = {
    "user": {
        "name": "Newton",
        "avatars": {
            "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
            "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
            "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
    },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
};

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

let $tweet = createTweetElement(tweetData);
$(document).ready(function () {
    $("#tweet-container").append($tweet)
});