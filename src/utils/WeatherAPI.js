import axios from 'axios';

class WeatherAPI {
  constructor() {
    this.options = {
      method: 'GET',
      url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
      params: {
        aggregateHours: '24',
        contentType: 'json',
        unitGroup: 'us',
        shortColumnNames: '0',
        iconSet: 'icons1',
        forecastDays: 5
      },
      headers: {
        'X-RapidAPI-Key': '8ff0896b4dmsh87d9af28e917532p1227b4jsn79e1761ea677', //<-- ideally this would be an environment variable, but env vars with docker/heroku is a pain
        'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
      }
    };
  }

  getForecast = async (location) => {
    return new Promise(async (resolve, reject) => {
      const options = { ...this.options };
      options.params.location = location;
      
      axios.request(options).then(function (response) {
        if (response?.data) return resolve(response.data);
        return resolve(null);
      }).catch(function (error) {
        console.error(error);
        return resolve(null);
      });
    });
  }
}

export default new WeatherAPI();