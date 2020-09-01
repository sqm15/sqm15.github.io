$(() => {

  $('.button').on('click', (event) => {
    event.preventDefault();

    // VARIABLE FOR COUNTRY/SOURCE
    let $source = $(event.target).attr('id')
    console.log($source);

    // LINK BASED ON SOURCE:
    let link = `https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=${$source}&apiKey=e3e7c45e43584108a7233aca72bf5f4c`

    $.ajax({
      headers: { 'X-Auth-Token': 'fbf56603e5ad42e1ad5448b7430a694a'},
      url: "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/competitions/WC/matches?season=2018",
      dataType: 'json',
      type: "GET",
    }).done(datas => {
        console.log(datas);
    })

  })
})
