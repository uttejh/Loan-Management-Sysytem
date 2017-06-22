// app.controller('carouselcontroller',['$scope',function($scope){
// 	// $scope.myInterval = 3000;
//  // 	$scope.slides = [
//  //    {
//  //      image: 'images/11.jpg'
//  //    },
//  //    {
//  //      image: 'images/12.jpg'
//  //    },
//  //    {
//  //      image: 'images/13.jpg'
//  //    }
//  //  ];
//   $scope.myInterval = 5000;
//   $scope.noWrapSlides = false;
//   $scope.active = 0;
//   var slides = $scope.slides = [];
//   var currIndex = 0;
//   $scope.slides = [
//     {
//       image: 'images/11.jpg'
//     },
//     {
//       image: 'images/12.jpg'
//     },
//     {
//       image: 'images/13.jpg'
//     }];
// }]);

app.controller('carouselcontroller',['$scope','$state',function($scope,$state){
  $scope.$emit("changeTitle",$state.current.views.main.data.title);
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 10 + slides.length + 1;
    slides.push({
      image: 'images/' + newWidth + '.jpg',
      // text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 3; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
}]);