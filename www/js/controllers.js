angular.module('starter.controllers', [])

.controller('BalanceCtrl', function($scope,BalManager,Classify,Account) {
   $scope.Classify=Classify.flattening();
  $scope.Account=Account.flattening();
  $scope.items=BalManager.get();
  console.log($scope.items);
   $scope.findAccount=function(Id){
  console.log($scope.Account);
    let temp=$scope.Account.find((element,index,array)=>Id===element.AccId);
        return temp===void(0)?"null":temp.AccName;

    }

   $scope.moveItem = function(item, fromIndex, toIndex) {
   BalManager.moveItem(item, fromIndex, toIndex);
  };
  
  $scope.onItemDelete = function(item) {
    BalManager.remov(item);
    
  };

})
.controller('BalCreateCtrl', function($scope,$state,BalManager,Classify,Account) {
  $scope.Classify=Classify.flattening();
  $scope.Account=Account.flattening();
  $scope.Item=BalManager.get();
  $scope.Bal=BalManager.create();
  $scope.Bal.type="1";
  $scope.Bal.BalTime=new Date();
 
  $scope.save=function(){
     BalManager.add($scope.Bal);
     $state.go("tab.balance");
     
   }
   $scope.myGoBack = function() {
     alert("11122");
    $state.go("tab.balance");
  }

})
.controller('BalEditCtrl', function($scope,$stateParams,BalManager) {
  $scope.Item=BalManager.get();
   $scope.Bal=BalManager.find($stateParams.Id);
   $scope.save=function(){
     
   }

})

.controller('AccountCtrl', function($scope,$ionicPopup, $timeout, Account) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.Item = Account.get();

  $scope.current=$scope.Item;
  $scope.items=$scope.current.Child;
  $scope.data = {
    showDelete: false
  };
  $scope.change=function(item){
     $scope.current=item;
  $scope.items=$scope.current.Child;
  }
  $scope.pre=function(item){

    $scope.change(item.parent);
  }

  
  $scope.moveItem = function(item, fromIndex, toIndex) {
   Account.moveItem($scope.current,item, fromIndex, toIndex);
  };
  
  $scope.onItemDelete = function(item) {
    Account.remov($scope.current,item);
  };
    // 触发一个按钮点击，或一些其他目标
 $scope.edit = function(item) {

   $scope.data = {};
   angular.copy(item,$scope.data);
   var myPopup = $ionicPopup.show({
     template: `<div class="content has-header">
      <div class="list">
        <label class="item item-input">
          <input type="text" placeholder="First Name" ng-model="data.AccName">
        </label>
        <label class="item item-input">
          <input type="text" placeholder="Last Name" ng-model="data.AccBanlace">
        </label>
        <label class="item item-input">
          <textarea placeholder="Comments" ng-model="data.Accremark"></textarea>
        </label>
      </div>`,
     title: 'update',
     subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           item.AccName=$scope.data.AccName;
            item.AccBanlace=$scope.data.AccBanlace;
            item.Accremark=$scope.data.Accremark; 
           }
         },
     ]
   });
   myPopup.then(function(res) {

   });
};

 $scope.create = function(item) {
   $scope.data1 = {};
   var myPopup = $ionicPopup.show({
     template: `<div class="content has-header">
      <div class="list">
        <label class="item item-input">
          <input type="text" placeholder="First Name" ng-model="data1.AccName">
        </label>
        <label class="item item-input">
          <input type="text" placeholder="Last Name" ng-model="data1.AccBanlace">
        </label>
        <label class="item item-input">
          <textarea placeholder="Comments" ng-model="data1.Accremark"></textarea>
        </label>
      </div>`,
     title: 'create',
     subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {

           let n=Account.create($scope.data1.AccName,$scope.data1.AccBanlace,$scope.data1.Accremark);
           Account.add(item,n);
           }
         },
     ]
   });
   myPopup.then(function(res) {
   });
};

})


.controller('ClassifyCtrl', function($scope,$ionicPopup, $timeout, Classify) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.Item = Classify.get();

  $scope.current=$scope.Item;
  $scope.items=$scope.current.Child;
  $scope.data = {
    showDelete: false
  };
  $scope.change=function(item){
     $scope.current=item;
  $scope.items=$scope.current.Child;
  }
  $scope.pre=function(item){

    $scope.change(item.parent);
  }

  
  $scope.moveItem = function(item, fromIndex, toIndex) {
   Classify.moveItem($scope.current,item, fromIndex, toIndex);
  };
  
  $scope.onItemDelete = function(item) {
     Classify.remov($scope.current,item);
  };

    // 触发一个按钮点击，或一些其他目标
 $scope.edit = function(item) {

   $scope.data = {};
   angular.copy(item,$scope.data);
   var myPopup = $ionicPopup.show({
     template: `<div class="content has-header">
      <div class="list">
        <label class="item item-input">
          <input type="text" placeholder="First Name" ng-model="data.ClaName">
        </label>
        <label class="item item-input">
          <textarea placeholder="Comments" ng-model="data.ClaRemark"></textarea>
        </label>
      </div>`,
     title: 'update',
     subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           item.ClaName=$scope.data.ClaName;
            item.ClaRemark=$scope.data.ClaRemark; 
           }
         },
     ]
   });
   myPopup.then(function(res) {

   });
};

 $scope.create = function(item) {
   $scope.data1 = {};
   var myPopup = $ionicPopup.show({
     template: `<div class="content has-header">
      <div class="list">
        <label class="item item-input">
          <input type="text" placeholder="First Name" ng-model="data1.ClaName">
        </label>
        <label class="item item-input">
          <textarea placeholder="Comments" ng-model="data1.ClaRemark"></textarea>
        </label>
      </div>`,
     title: 'create',
     subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {

           let n=Classify.create($scope.data1.ClaName,$scope.data1.ClaRemark);

           Classify.add(item,n);
           }
         },
     ]
   });
   myPopup.then(function(res) {

   });
};

}).controller("caculator",function($scope){
  
});
