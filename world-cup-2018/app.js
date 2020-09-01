$(() => {

  $('.button').on('click', (event) => {
    event.preventDefault();

    $.ajax({
      headers: { 'X-Auth-Token': 'fbf56603e5ad42e1ad5448b7430a694a'},
      url: "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/competitions/WC/matches?season=2018",
      dataType: 'json',
      type: "GET",
    }).done(datas => {
      const $matches = datas.matches

      // For Of Loop iterates over all matches
      for (let match of $matches) {

        // Variables for team names:
        const homeTeamName = match.homeTeam.name
        const awayTeamName = match.awayTeam.name

        // Variables for scores:
        const homeTeamScore = match.score.fullTime.homeTeam
        const awayTeamScore = match.score.fullTime.awayTeam

        // Variable for stage (Group, Round of 16, Quarter-finals, etc):
        const matchStage = match.group

        console.log(match);
        // console.log(matchStage);

        // console.log(`${matchStage}: ${homeTeamName} ${homeTeamScore} - ${awayTeamScore}  ${awayTeamName}`);

      }

    })

  })
})
