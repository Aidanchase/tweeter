function timeAgo(ts) {
                     //calculates  time in seconds
   const date = new Date();
   const nowTime = date.getTime();
                   //get milliseconds and / by 1000 for secs
   const seconds = Math.floor((nowTime - ts) / 1000);

   // over a year
   if(seconds > 365 * 24* 3600){
      return "Over a year ago";
   }

   // more than two days
   else if (seconds > 2 * 24 * 3600) {
      return Math.floor(seconds / 60 / 60 / 24) + " days ago";
   }
   // a day
   else if (seconds > 24 * 3600) {
      return "Yesterday";
   }
   // Hours
   else if (seconds > 3600) {
      const hours = Math.floor(seconds / 60 / 60).toString();
      const hour = (hours > 1 ? "hours" : "hour").toString();
      return hours + " " + hour + " ago";
   }
   // Half Hour
   else if (seconds > 1800) {
      return "Half an hour ago";
   }
   // Minutes
   else if (seconds > 60) {
      return Math.floor(seconds / 60) + " minutes ago";
   }

   // Within a minute
   else if (seconds > 10){
      return seconds + " seconds ago";
   }
   // Just now
   else if (seconds > -1){
      return "Just a moment ago"
   } else {
   // Default condition
   return "Unable to calculate age"
   }
}