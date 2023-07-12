/*
AuthServiceInterface

signin(email, pw): void
signup(email, pw): void
logout(): void
*/

export class AuthService {
  #httpClient;
  #tokenRepository;

  constructor(httpClient, tokenRepository) {
    this.#httpClient = httpClient;
    this.#tokenRepository = tokenRepository;
  }

  async signin(email, password) {
    const response = await this.#httpClient.fetch('auth/signin', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const { access_token } = await response.json();
    this.#tokenRepository.save(access_token);
  }

  async signup(email, password) {
    await this.#httpClient.fetch('auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  logout() {
    this.#tokenRepository.remove();
  }
}
