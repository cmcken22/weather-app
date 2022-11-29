const dayMap = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
}

const conditions = {
  'clear-day': 'Clear',
  'clear-night': 'Clear',
  'cloudy': 'Cloudy',
  'fog': 'Foggy',
  'hail': 'Hail',
  'partly-cloudy-day': 'Partly Cloudy',
  'partly-cloudy-night': 'Partly Cloudy',
  'rain-snow-showers-day': 'Rain/Snow Showers',
  'rain-snow-showers-night': 'Rain/Snow Showers',
  'rain-snow': 'Rain/Snow',
  'rain': 'Rainy',
  'showers-day': 'Showers',
  'showers-night': 'Showers',
  'sleet': 'Sleet',
  'snow-showers-day': 'Snow Showers',
  'snow-showers-night': 'Snow Showers',
  'snow': 'Snowy',
  'thunder-rain': 'Thunder',
  'thunder-showers-day': 'Thunder Showers',
  'thunder-showers-night': 'Thunder Showers',
  'thunder': 'Thunder',
  'wind': 'Windy'
}

export const getDayOfWeek = (dateStr) => {
  const day = !!dateStr ? new Date(dateStr) : new Date();
  const dayOfWeek = dayMap[day.getDay()];
  return dayOfWeek;
}

export const getConditions = (condition) => {
  return conditions[condition] ? conditions[condition] : condition;
}