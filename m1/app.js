angular
	.module('app', [])
	.controller('CountCtrl', function CountCtrl() {
	  this.count = 4;
	})

	// .directive('counterDirective', function counter() {
	//   return {
	//     scope: {},
	//     bindToController: {
	//       count: '='
	//     },
	//     controller: function () {
	//       function increment() {
	//         this.count++;
	//       }
	//       function decrement() {
	//         this.count--;
	//       }
	//       this.increment = increment;
	//       this.decrement = decrement;
	//     },
	//     controllerAs: 'counter',
	//     template: [
	//       '<div class="todo">',
	//         '<input type="text" ng-model="counter.count">',
	//         '<button type="button" ng-click="counter.decrement();">-</button>',
	//         '<button type="button" ng-click="counter.increment();">+</button>',
	//       '</div>'
	//     ].join('')
	//   };
	// })

	.component('counter', {
        bindings: {
          count: '='
        },
        controller: function () {
          function increment() {
            this.count++;
          }
          function decrement() {
            this.count--;
          }
          this.increment = increment;
          this.decrement = decrement;
        },
        template: [
          '<div class="todo">',
            '<input type="text" ng-model="$ctrl.count">',
            '<button type="button" ng-click="$ctrl.decrement();">-</button>',
            '<button type="button" ng-click="$ctrl.increment();">+</button>',
          '</div>'
        ].join('')
    });
