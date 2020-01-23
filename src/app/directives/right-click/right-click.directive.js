export function rightClickDirective($parse, $rootScope, $compile) {
  'ngInject';

  let directive = {
    transclude: true,
    restrict: "AE",
    link: linkFunc,
  };

  return directive;

  function linkFunc(scope, element, attrs) {
    let template = "<ul id='contextmenu-node'><li class='contextmenu-item' ng-click='moveSticker(item.id)'> Mover post-it</li></ul>";

    element.on("contextmenu", function (e) {
      e.preventDefault();
      element.append($compile(template)(scope));
      element.find("#contextmenu-node").css("left", e.clientX);
      element.find("#contextmenu-node").css("top", e.clientY);
    });
    element.on("mouseleave", function (e) {
      if (element.find("#contextmenu-node")){
        element.find("#contextmenu-node").remove();
      }
    });
  }
}