class HttpClient {
  #baseURL;
  constructor() {
    this.#baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  fetch(endPoint, options = {}) {
    const optionWithAuth = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: 'ATT',
      },
    };
    return window.fetch(this.baseURL + endPoint, optionWithAuth);
  }
}

export const httpClient = new HttpClient();
