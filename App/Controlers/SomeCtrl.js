export default class SomeCtrl {
  // add 'ngInject'; somewhere inside a function that needs injections
  // Babel will leave the string alone and ng-annotate can do its magic
  constructor($http) {
    "ngInject";
    console.log("yay $http!", $http);
  }
}
