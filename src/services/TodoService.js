//interface
//get(): Promise<Todo[]>

export class TodoService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async get() {
    const response = await this.httpClient.fetch('todos', {
      method: 'GET',
    });

    return response.json();
  }

  async create(todo) {
    const response = await this.httpClient.fetch('todos', {
      method: 'POST',
      body: JSON.stringify({
        todo,
      }),
    });

    return response.json();
  }
}
