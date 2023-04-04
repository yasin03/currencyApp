import { observable, action } from "mobx";
import axios from "axios";

class CurrencyStore {
  @observable data = [];

  @action saveData(data) {
    this.data = data;
  }

  @action getData() {
     return this.data;
  }
}

const currencyStore = new CurrencyStore();

export default currencyStore;
