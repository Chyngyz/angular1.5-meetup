angular
  .module('app', [])
  .component('parentComponent', {
    transclude: true,
    template: `
      <div ng-transclude></div>
    `,
  })
  .component('childComponent', {
    bindings: {
      count: '='
    },
    controller: function () {
      this.state = 'Еще не готов.';
      this.$onInit = function() {
        this.state = 'Готов!';
      };
    },
    template: `
      <div>
        Компонент: {{ $ctrl.state }}
      </div>
    `
  });
