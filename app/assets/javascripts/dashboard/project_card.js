app.controller('ProjectCardCtrl',
['ProjectService', '$uibModal', 'FlashService',
function (ProjectService, $uibModal, FlashService) {
  var vm = this;

  function _success (params) {
    FlashService.update('success', 'projects');
    return params;
  }

  function _failure (params) {
    FlashService.update('danger', 'projects');
    return params;
  }

  vm.updateView = function (params) {
    angular.copy(params,vm.project);
    return params;
  };

  // Update: using the modal.
  vm.updateProject = function (params) {
    ProjectService.update(params)
      .then(vm.updateView)
      .then(_success,_failure);
  };

  // Edit: go to edit page.
  vm.editProject = function (id) {
    var $event = {
      id: id
    };
    vm.onEdit({$event: $event});
  };

  vm.destroyProject = function (params) {
    ProjectService.destroy(params);
  };

  // Modal functionality.
  vm.open = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      component: 'projectModal',
      size: 'lg',
      resolve: {
        project: function () {
          return vm.project;
        }
      }
    });

    modalInstance.result.then(vm.updateProject);
  };

}]);

app.component('projectCard', {
  controller: 'ProjectCardCtrl',
  restrict: 'E',
  bindings: {
    project: '<',
    onEdit: '&'
  },
  templateUrl: 'templates/dashboard/project_card.html'
});
