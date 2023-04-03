import {
  runInAction,
  makeObservable,
  makeAutoObservable,
  observable,
  action,
} from "mobx";
import axios from "axios";

class CurrencyStore {
  currencies = [];
  name ="yasdia"



@action setCurrencies(currencies) {
  this.currencies = currencies;
}
  async fetchCurrencies() {
    this.currencies = [];
    try {
      const response = await axios.get(
        "https://finans.truncgil.com/v4/today.json"
      );
      runInAction(() => {
        this.currencies = response.data;
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default new CurrencyStore();
