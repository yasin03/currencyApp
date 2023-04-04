import { observable, action } from "mobx";
import axios from "axios";

class GoldStore {
  @observable data = [];

  @action async fetchData() {
    if (this.data) {
      // If data is already fetched, return it from the cache
      return this.data;
    } else {
      // If data is not already fetched, fetch it from the API and store it in the cache
      const response = await axios.get(
        "https://finans.truncgil.com/today.json"
      );
      this.data = response.data;
      return response.data;
    }
  }
}

export default GoldStore;
