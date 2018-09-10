// Defining our default API search paramater values
const param1 = 'https://api.giphy.com/v1/stickers/search?api_key=YStVAFMdiq2NVtpZWMDY3jmkUzJYEEhO&q=';
const param2 = '&limit=100&offset=0&rating=PG-13&lang=en';

// Defining our API call
const searchApi = (query) => {
  $.ajax({
    url : param1 + query + param2,
    method: 'GET'
  })
    .done(function(res) {
      let results = res.data;

      for (i=0;i<=results.length;i++) {
        let sticker = $('<img>');
        sticker.attr('class', 'sticker');
        sticker.attr('src', results[i].images.original.url);
        $('.stickers').append(sticker)
      }
    });
}

// Calling the searchApi function on the value of the input, on button click
$('.search-api').on('click', function(e){
  e.preventDefault();
  $('.stickers').html('');
  let input = $('.search-api-form');
  let inputValue = input[0].value;

  searchApi(inputValue)
});

// Replacing main-image background
const searchImage = (query) => {
  $('.main-image').attr('src', query)
}

//Grab ImgURL and run uploadImage
$('.search-main-image-url').on('click', function(e){
  e.preventDefault();
  let input = $('.main-image-url');
  let inputValue = input[0].value;

  searchImage(inputValue);
})