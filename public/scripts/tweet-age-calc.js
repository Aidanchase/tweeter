function timeAgo(ts) {
   //calculating time since post
   const d = new Date();
   const nowTs = d.getTime();
   //calculate difference of milliseconds
   const seconds = Math.floor((nowTs - ts) / 1000);

   if (seconds > 365 * 24 * 3600) { //if more than a year 
      return "Over a year ago";
   } else if (seconds > 2 * 24 * 3600) { //if more than 2 days
      return Math.floor(seconds / 60 / 60 / 24) + " days ago";
   }
   //if more than a day
   else if (seconds > 24 * 3600) {
      return "Yesterday";
   }
   //time in hours
   else if (seconds > 3600) {
      const hours = Math.floor(seconds / 60 / 60).toString();
      const hour = (hours > 1 ? "hours" : "hour").toString();
      return hours + " " + hour + " ago";
   }
   // if within half Hour
   else if (seconds > 1800) {
      return "Half an hour ago";
   }
   //if within Minutes
   else if (seconds > 60) {
      return Math.floor(seconds / 60) + " minutes ago";
   }

   // if within a minute
   else if (seconds > 10) {
      return seconds + " seconds ago";
 
   } else if (seconds > -1) {
      return "Just a moment ago"
   
   } else {
      // default
      return "Unable to calculate age"

   }
}