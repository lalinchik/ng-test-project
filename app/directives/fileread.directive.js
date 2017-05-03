export default function () {
  return {
    scope: {
      tsFileread: '&'
    },
    link(scope, element) {
      element.bind('change', changeEvent => {
        const reader = new FileReader();

        reader.onload = function (loadEvent) {
          scope.tsFileread({ src: loadEvent.target.result });
        };
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  };
}
