angular
  .module('app', [])
  .component('parentComponent', {
    transclude: true,
    template: `
      <div ng-transclude></div>
    `,
    controller: function () {
      this.foo = function () {
        return 'Привет от родительского компонента!';
      };
    }
  })
  .component('childComponent', {
    require: {
      parent: '^parentComponent'
    },
    controller: function () {
      this.$onInit = function () {
        this.state = this.parent.foo();
      };
    },
    template: `
      <div>
        Компонент - {{ $ctrl.state }}
      </div>
    `
  });
