
var data = {
  "text": "Hello from the interwebs"
};
var slackurl = 'https://g-slack.herokuapp.com/services/T58EUE8NB/B57RSSHRB/HLE7lQHpKuFqli8m4IuS7jtk';
// send message
var url = 'https://g-slack.herokuapp.com/services/T58EUE8NB/B57RSSHRB/HLE7lQHpKuFqli8m4IuS7jtk';// Webhook URL
var text = "Hello from the interwebs";// Text to post
$.ajax({
    data: 'payload=' + JSON.stringify({
        "text": text
    }),
    dataType: 'json',
    processData: false,
    type: 'POST',
    url: url
});
