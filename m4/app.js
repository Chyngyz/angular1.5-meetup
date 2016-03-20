var example = {
  bindings: {
    obj: '<'
  },
  template: `
    <div class="section">
      <h4>
        Isolate Component
      </h4>
      <p>Object: {{ $ctrl.obj }}</p>
      <a href="" ng-click="$ctrl.updateValues();">
        Change Isolate Values
      </a>
    </div>
  `,
  controller: function () {
		this.updateValues = function () {
			// this.obj.salim.age = 100;
      this.obj = {
        akyl: {
          age: 24,
          location: 'unknown'
        }
      };
    };
  }
};

function ParentController() {
  this.someObject = {
    chyngyz: {
      age: 25,
      location: 'Bishkek'
    }
  };
  this.updateValues = function () {
    this.someObject = {
    	salim: {
      	age: 24,
        location: 'Osh'
      }
    };
  };
}

angular
  .module('app', [])
  .component('example', example)
  .controller('ParentController', ParentController);
