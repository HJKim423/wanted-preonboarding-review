//HttpClientInterface
//fetch(endPoint, options): Promise<Response>

export class HttpClient {
  #baseURL;
  #tokenRepository;

  constructor(baseURL, tokenRepository) {
    this.#baseURL = baseURL;
    this.#tokenRepository = tokenRepository;
  }

  fetch(endPoint, options = {}) {
    const optionWithAuth = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
        Authorization: this.#tokenRepository.get(),
      },
    };
    return window.fetch(this.baseURL + endPoint, optionWithAuth);
  }
}
