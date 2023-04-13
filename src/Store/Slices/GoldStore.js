import { observable, action } from "mobx";
import axios from "axios";

class GoldStore {
  @observable data = [];

  @action async fetchData() {
    if (this.data) {
      return this.data;
    } else {
      const response = await axios.get(
        "https://finans.truncgil.com/today.json"
      );
      this.data = response.data;
      return response.data;
    }
  }
}

export default GoldStore;
