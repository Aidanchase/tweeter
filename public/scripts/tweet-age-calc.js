function timeAgo(ts) {
                           //calculating time since post
   var d = new Date();
   var nowTs = d.getTime();
                           //calculate difference of milliseconds
   var seconds = Math.floor((nowTs - ts) / 1000);

   if (seconds > 365 * 24 * 3600) {       //if more than a year 
      return "Over a year ago";
   }

   if (seconds > 2 * 24 * 3600) {      //if more than 2 days
      return Math.floor(seconds / 60 / 60 / 24) + " days ago";
   }
                                       //if more than a day
   if (seconds > 24 * 3600) {
      return "Yesterday";
   }
                                       //time in hours
   if (seconds > 3600) {
      const hours = Math.floor(seconds / 60 / 60).toString();
      const hour = (hours > 1 ? "hours" : "hour").toString();
      return hours + " " + hour + " ago";
   }
                                       // if within half Hour
   if (seconds > 1800) {
      return "Half an hour ago";
   }
                                          //if within Minutes
   if (seconds > 60) {
      return Math.floor(seconds / 60) + " minutes ago";
   }

                                             // if within a minute
   if (seconds > 10) {
      return seconds + " seconds ago";
   }

   if (seconds > -1) {
      return "Just a moment ago"
   }
                                          // default
   return "Unable to calculate age"
}