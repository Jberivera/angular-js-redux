export default class InvoiceController {
  // add 'ngInject'; somewhere inside a function that needs injections
  // Babel will leave the string alone and ng-annotate can do its magic
  constructor() {
    "ngInject";
    this.qty = 1;
    this.cost = 2;
    this.inCurr = 'EUR';
    this.currencies = ['USD', 'EUR', 'CNY'];
    this.usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09
    };
  }

  total(outCurr) {
    return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
  };

  convertCurrency(amount, inCurr, outCurr) {
    return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
  };

  pay() {
    window.alert("Thanks!");
  };
}