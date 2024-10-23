import axios from 'axios';

const API_BASE_URL = 'http://137.184.200.165:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  responseType: 'json'
});


export default {
  // GET request
  // testing 
  async fetchData(endpoint) {
    try {
      const response = await api.get(endpoint, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'this_is_a_dumb_password_which_SHOULD_be_replaced420'
        }
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching data from ${endpoint}:`, error);
      throw error;

    }
  },

  // Specific method for fetching races
  async fetchRacesToday() {
    return this.fetchData(`/racedays-today`);
  },

  // Specific method for fetching races on a date
  async fetchRacesOnDate(date) {
    return this.fetchData(`/racedays/${date}`);
  },

  async fetchRacePreviewsByTrackAndDate(track_id, date) {
    return this.fetchData(`/racedays/${date}/${track_id}`);
  }
};
