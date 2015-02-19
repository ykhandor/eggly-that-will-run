var app = angular.module('categories');

app.directive("category", ['categories', function (categories) {
    return {
      restrict: "E",
      templateUrl: 'app/categories/category-template.html',
      replace: true,
      scope: {
        categoryObj: "=",
      },
      link: function($scope, element) {
        $(element).prepend("<span>Category: </span>");
        
        function setCurrentCategory(category) {
            categories.setCurrentCategory(category);
        }

        function isCurrentCategory(category) {
            var currentCategory = categories.getCurrentCategory();
            var retBool = currentCategory? currentCategory.name === $scope.categoryObj.name : false;
            return retBool;
        }
      
        $scope.setCurrentCategory = setCurrentCategory;
        $scope.isCurrentCategory = isCurrentCategory;
      }
    };
}]).controller("categoryController", function ($scope, categories) {

  }
);
