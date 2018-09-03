import angular from 'angular';
import SomeCtrl from './Controlers/SomeCtrl';
import InvoiceController from './Controlers/InvoiceController';
import PeopleController from './Controlers/PeopleController';
import PeopleReduxController from './Controlers/PeopleReduxController';
import ngRedux from 'ng-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers'
import './Sass/main.scss'

const store = createStore(rootReducer);

angular.module('app', [ngRedux])
    .config($ngReduxProvider => {
      $ngReduxProvider.provideStore(store);
    })
    .controller('InvoiceController', InvoiceController)
    .controller('SomeCtrl', ['$http', SomeCtrl])
    .controller('PeopleController', PeopleController)
    .controller('PeopleReduxController', ['$ngRedux', PeopleReduxController]);
