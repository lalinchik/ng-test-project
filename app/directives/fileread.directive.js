export default function () {
  return {
    scope: {
      fileread: '&'
    },
    link: function (scope, element) {
      element.bind('change', function (changeEvent) {
        const reader = new FileReader();
        reader.onload = function (loadEvent) {
          scope.$apply(function () {
            scope.fileread({src: loadEvent.target.result});
          });
        };
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
};