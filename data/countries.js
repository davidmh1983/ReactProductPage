class apiCall {
  static getAllCountries() {
    return fetch("https://restcountries.eu/rest/v2/all")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
}

export default apiCall;
