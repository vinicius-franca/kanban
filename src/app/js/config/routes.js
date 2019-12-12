import  { MainController } from '../controllers/main.controller';
import  { StickersController } from '../controllers/stickers.controller';
import  { LanesController } from '../controllers/lanes.controller';
import  { KanbansController } from '../controllers/kanbans.controller';
import  { DevelopersController } from '../controllers/developers.controller';

export function config($routeProvider) {
    $routeProvider.when("/stickers", {
        templateUrl: "view/stickers.html",
        controller: StickersController
    });   
    $routeProvider.when("/lanes", {
        templateUrl: "view/lanes.html",
        controller: LanesController
    });      
    $routeProvider.when("/kanbans", {
        templateUrl: "view/kanbans.html",
        controller: KanbansController
    });
    $routeProvider.when("/developers", {
        templateUrl: "view/developers.html",
        controller: DevelopersController
    });   /* 
	 $routeProvider.when("stickers/edit/:id", {
		templateUrl: "view/stickers/new.html",
		controller: "StickersController",
	});    
	$routeProvider.when("lanes/edit/:id", {
		templateUrl: "view/lanes/new.html",
		controller: "LanesController",
	});;    
	$routeProvider.when("kanbans/edit/:id", {
		templateUrl: "view/kanbans/new.html",
		controller: "KanbansController",
	});  
    $routeProvider.when("/developers", {
        templateUrl: "view/developers/developers.html",
        controller: "DevelopersController"
    });    
	$routeProvider.when("developers/edit/:id", {
		templateUrl: "view/developers/new.html",
		controller: "DevelopersController",
	}); */
    $routeProvider.otherwise({redirectTo: "/stickers"});
}