var cardComponentOptions = {
  bindings: {
    title: '@'
  },
  transclude: true,
  template:
    '<div>' +
      '<h3>{{$ctrl.title || "Заголовок"}}</h3>' +
      '<i><ng-transclude>Пусто</ng-transclude></i>' +
    '</div>'
};


var multipleTransclusion = {
    transclude: {
      'title': '?cardTitle',
      'song': '?cardSong',
    },
    template:
      '<div>' +
        '<h3 ng-transclude="title">Заголовок</h3>' +
        '<i ng-transclude="song">Пусто</i>' +
      '</div>'
}

angular
  .module('app', [])
  .component('cardComponent', cardComponentOptions)
  .directive('card', simpleTransclusion)
  .component('multislotCard', multipleTransclusion);

function simpleTransclusion(){
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    template:
      '<div>' +
        '<h3>{{title || "Заголовок"}}</h3>' +
        '<i><ng-transclude>Пусто</ng-transclude></i>' +
      '</div>'
  };
}
