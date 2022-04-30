const apiAuth = {
    method: 'GET',
    // params: {league: '1', season: '2022'},
    headers: {
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      'X-RapidAPI-Key': 'be6ab61530msh0825cb606102ea6p1f1cd3jsne7000885330f'
    }
  };

const APIROUTE = 'https://api-football-v1.p.rapidapi.com/v3'

module.exports = {apiAuth, APIROUTE}
