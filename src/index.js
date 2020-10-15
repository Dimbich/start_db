class SwapiService {
  _apiBase = 'https://swapi.dev/api'

  async getResoursce(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Не удалось получить данные с сервера ${url}. Ответ сервера ${res.status}`)
    }
    return await res.json();
  
  };

  async getAllPeople() {
    const res = await this.getResoursce(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResoursce(`/people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResoursce(`/planets/`);
    return res;
  }

  getPlanet(id) {
    return this.getResoursce(`/planets/${id}`);
  }

  async getAllStarships() {
    const res = await this.getResoursce(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResoursce(`/starships/${id}`);
  }
}
