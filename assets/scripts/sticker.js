const param1 = "https://api.giphy.com/v1/stickers/search?api_key=YStVAFMdiq2NVtpZWMDY3jmkUzJYEEhO&q=";
const param2 = "&limit=25&offset=0&rating=PG-13&lang=en";

const searchApi = (query) => {
  $.ajax({
    url : param1 + query + param2,
    method: "GET"
  })
    .done(function(res) {
      console.log(res)
      let results = res.data;

      for (i=0;i<=results.length;i++) {
        var sticker = $("<img>");
        sticker.attr('class', 'sticker');
        sticker.attr('src', results[i].url);
        $(".stickers").prepend(sticker)
      }
    });
}

export default searchApi;