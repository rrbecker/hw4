
var nytimesURL = "https://api.nytimes.com/svc/topstories/v2/home.json?" +
                "api-key=91473997e2544b10b608e83adbbf957c"

fetch(nytimesURL)
      .then(function(response) {
          return response.json();
      })
      .then(function(json) {
        console.log(json)


for (i = 0; i < 3; i++) {
  $("#heading"+(i+7) + " a").text(json.results[i].display_title)
  $("#heading"+(i+7) + " a").attr("href", json.results[i].link.url)
  $("#content"+(i+7)).text(json.results[i].summary_short)
}
})

var topnewsURL = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=4bc7783fa5c4401d8a9a25386ee78250';

fetch(topnewsURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
      console.log(json)


      for (i = 1; i < 7; i++) {
        $("#heading"+i + " a").text(json.articles[i].title)
        $("#heading"+i + " a").attr("href", json.articles[i].url)
        $("#content"+i).text(json.articles[i].description)
      }
    })
