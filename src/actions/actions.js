export const fetchCountryList = () => new Promise(resolve => {
  const url = 'https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;languages;population';
  fetch(url).then(data => resolve(data.json()))
})