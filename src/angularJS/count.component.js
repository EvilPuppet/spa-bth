import angular from 'angular';
import template from './count.template.html';

angular
  .module('angularJS-app')
  .component('count', {
    template,
    controllerAs: 'vm',
    controller($http) {
      var vm = this;
      vm.count = 0;
      vm.increase = increase;
      vm.descrease = descrease;

      function increase() {
        vm.count++;
      }

      function descrease() {
        vm.count--;
      }
    },
  });