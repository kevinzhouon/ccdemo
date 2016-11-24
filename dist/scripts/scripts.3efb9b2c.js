"use strict";angular.module("demoApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngMaterial","ui.router","sasrio.angular-material-sidenav"]).config(["$mdThemingProvider","$locationProvider","$urlRouterProvider","$stateProvider","ssSideNavSectionsProvider",function(a,b,c,d,e){a.theme("default").primaryPalette("light-blue",{"default":"700"}),c.otherwise(function(){return"/"}),d.state({name:"common","abstract":!0,templateUrl:"views/_common.html",controller:"CommonCtrl"}),d.state({name:"common.home",url:"/",templateUrl:"views/home.html",controller:"HomeCtrl"}),d.state({name:"common.toggle1",url:"/toogle1","abstract":!0,template:"<ui-view/>"}),d.state({name:"common.toggle1.item1",url:"/item1",templateUrl:"views/default.html",controller:["$scope",function(a){a.model={title:"Hello Toogle 1 Item 1"}}]}),d.state({name:"common.toggle1.item2",url:"/item2",templateUrl:"views/default.html",controller:["$scope",function(a){a.model={title:"Hello Toogle 1 Item 2"}}]}),d.state({name:"common.toggle1.item3",url:"/item3",templateUrl:"views/default.html",controller:["$scope",function(a){a.model={title:"Hello Toogle 1 Item 3"}}]}),d.state({name:"common.link1",url:"/link1",templateUrl:"views/default.html",controller:["$scope",function(a){a.model={title:"Hello Link 1"}}]}),d.state({name:"common.link2",url:"/link2",templateUrl:"views/default.html",controller:["$scope",function(a){a.model={title:"Hello Link 2"}}]}),d.state({name:"common.link2.edit",url:"/edit",templateUrl:"views/default.html",controller:["$scope",function(a){a.model={title:"Hello Link 2"}}]}),d.state({name:"common.link3",url:"/link3",templateUrl:"views/default.html",controller:["$scope",function(a){a.model={title:"Hello Link 3"}}]}),d.state({name:"common.toggle2",url:"/toogle2","abstract":!0,template:"<ui-view/>"}),d.state({name:"common.toggle2.item1",url:"/item1",templateUrl:"views/default.html",controller:["$scope",function(a){a.model={title:"Hello Toogle 2 Item 1"}}]}),d.state({name:"common.toggle3",url:"/toogle3","abstract":!0,template:"<ui-view/>"}),d.state({name:"common.toggle3.item1",url:"/item1",templateUrl:"views/default.html",controller:["$scope",function(a){a.model={title:"Hello Toogle 3 Item 1"}}]}),d.state({name:"common.toggle3.item2",url:"/item2",templateUrl:"views/default.html",controller:["$scope",function(a){a.model={title:"Hello Toogle 3 Item 2"}}]}),e.initWithTheme(a),e.initWithSections([{id:"toogle_1",name:"Section Heading 1",type:"heading",children:[{name:"Toogle 1",type:"toggle",pages:[{id:"toogle_1_link_1",name:"item 1",state:"common.toggle1.item1"},{id:"toogle_1_link_2",name:"item 2",state:"common.toggle1.item2",hidden:!0},{id:"toogle_1_link_3",name:"item 3",state:"common.toggle1.item3"}]}]},{id:"link_1",name:"Link 1 ",state:"common.link1",type:"link",icon:"fa fa-check"},{id:"link_2",name:"Link 2",state:"common.link2",type:"link"},{id:"link_3",name:"Link 3",state:"common.link3",type:"link",hidden:!0},{id:"toogle_2",name:"Section Heading 2",type:"heading",children:[{name:"Toogle 2",type:"toggle",pages:[{id:"toogle_2_link_1",name:"item 1",state:"common.toggle2.item1"}]}]}])}]),angular.module("demoApp").controller("CommonCtrl",["$scope","$mdSidenav","$timeout","$rootScope","$state","ssSideNav","ssSideNavSharedService",function(a,b,c,d,e,f,g){a.onClickMenu=function(){b("left").toggle()},a.menu=f,d.$on("SS_SIDENAV_CLICK_ITEM",function(){console.log("do whatever you want after click on item")})}]),angular.module("demoApp").controller("HomeCtrl",["$scope","$timeout","$state","ssSideNav",function(a,b,c,d){a.rowCollection=[{id:"1",Type:"Cat",Name:"Cat 1",Modified:"2016/03/01"},{id:"2",Type:"Cat",Name:"Cat 2",Modified:"2016/01/01"},{id:"3",Type:"Cat",Name:"Cat 3",Modified:"2016/01/02"},{id:"4",Type:"FAQ",Name:"FAQ 1",Modified:"2016/01/01"},{id:"5",Type:"FAQ",Name:"FAQ 2",Modified:"2016/03/01"},{id:"6",Type:"FAQ",Name:"FAQ 3",Modified:"2016/01/01"},{id:"7",Type:"FAQ",Name:"FAQ 4",Modified:"2016/04/01"}]}]),angular.module("demoApp").run(["$templateCache",function(a){a.put("views/_common.html",'<md-sidenav class="md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="$mdMedia(\'gt-sm\')"> <header class="nav-header" ss-style-color="{\'background-color\': \'primary.default\'}"> <a ng-href="#/" class="logo"> <h1 class="md-heading">Angular Material Sidenav</h1> </a> </header> <md-content flex role="navigation" ss-style-color="{\'background-color\': \'primary.default\'}"> <ss-sidenav flex menu="menu"></ss-sidenav> </md-content> </md-sidenav> <div layout="column" flex role="main"> <div ui-view layout="column"></div> </div>'),a.put("views/default.html",'<md-toolbar> <div class="md-toolbar-tools"> <md-button class="md-icon-button" aria-label="Menu Button" hide-gt-md ng-click="onClickMenu();"> <md-icon md-svg-icon="images/icons/menu.f1d75e5f.svg" aria-label="Menu Icon"> </md-icon> </md-button> <h2>{{model.title}}</h2> <span flex></span> </div> </md-toolbar>'),a.put("views/home.html",'<md-toolbar> <div class="md-toolbar-tools"> <md-button class="md-icon-button" aria-label="Menu Button" hide-gt-md ng-click="onClickMenu();"> <md-icon md-svg-icon="images/icons/menu.f1d75e5f.svg" aria-label="Menu Icon"> </md-icon> </md-button> <h2>Angular Material Sidenav</h2> <span flex></span> </div> </md-toolbar> <div class="demo-md-panel-animation md-padding"> <h2>Animations</h2> <md-content> <md-toolbar> <div class="md-toolbar-tools"> <md-button aria-label="Go Back"> Go Back </md-button> <span flex></span> <ul class="nav navbar-nav"> <li><button type="button" class="btn btn-warning navbar-btn"><span class="glyphicon glyphicon-import"></span>Import</button></li> <li><button type="button" class="btn btn-warning navbar-btn"><span class="glyphicon glyphicon-export"></span>Export</button></li> </ul> <!--\r\n			<md-button class="md-fab md-mini" aria-label="Favorite">\r\n			  <md-icon md-svg-icon="img/icons/favorite.svg"></md-icon>\r\n			</md-button>\r\n			--> </div> </md-toolbar> </md-content> <div layout="row"> <table st-table="rowCollection" class="table table-striped"> <thead> <tr> <th>first name</th> <th>last name</th> <th>birth date</th> <th>balance</th> </tr> </thead> <tbody> <tr ng-repeat="row in rowCollection"> <td><span style="" class="glyphicon glyphicon-{{row.Type == \'Cat\' ? \'folder-open\' : \'file\'}}"></span></td> <td><a href="#">{{row.Name}}</a></td> <td>{{row.Modified}}</td> <td> <a href="#/mountain/{{mountain.id}}"> <span class="glyphicon glyphicon-edit"></span> Edit </a> </td> </tr> </tbody> </table> </div> </div> ')}]);