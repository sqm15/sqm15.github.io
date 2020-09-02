$(() => {

  const openModal = (displayString) => {
    $('.modal-text').text(displayString)
    $('.modal').css('display', 'block')
  }

  const closeModal = () => {
    $('.modal').css('display', 'none')
  }

  $('#close-btn').on('click', () => {
    event.preventDefault();
    closeModal();
  })

  $('.button').on('click', (event) => {
    event.preventDefault();

    const $buttonDate = $(event.target).attr('id')

    const link = `https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/competitions/WC/matches`

    $.ajax({
      headers: { 'X-Auth-Token': 'fbf56603e5ad42e1ad5448b7430a694a'},
      url: link,
      dataType: 'json',
      type: "GET",
    }).done(datas => {
      const matches = datas.matches
      let outputString = ""

      // For Of Loop iterates over all matches
      for (let match of matches) {

        // Variables for team names:
        const homeTeamName = match.homeTeam.name
        const awayTeamName = match.awayTeam.name

        // Variables for scores:
        const homeTeamScore = match.score.fullTime.homeTeam
        const awayTeamScore = match.score.fullTime.awayTeam

        // Variable for stage (Group, Round of 16, Quarter-finals, etc):
        const matchStage = match.group

        // Variable for date
        const matchDate = match.utcDate

        // Checks API dates against button IDs
        if (matchDate.startsWith($buttonDate)) {
          // Generates output string with data
          outputString = outputString + "\n\n" + `${matchStage}:` +
           "\n" + `${homeTeamName} ${homeTeamScore} - ${awayTeamScore} ${awayTeamName}`
        }
      }

      // Invoke function:
      openModal(outputString)

    })

  })
})
