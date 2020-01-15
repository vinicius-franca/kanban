import  { StickersController } from '../controllers/stickers.controller';
import  { LanesController } from '../controllers/lanes.controller';
import  { KanbansController } from '../controllers/kanbans.controller';
import  { DevelopersController } from '../controllers/developers.controller';
import  { BoardsController } from '../controllers/boards.controller';

export function config($routeProvider) {
    $routeProvider.when("/stickers", {
        templateUrl: "view/stickers/stickers.html",
        controller: StickersController
    });   
    $routeProvider.when("/stickers/new", {
        templateUrl: "view/new.html",
        controller: StickersController
    });   
    $routeProvider.when("/lanes", {
        templateUrl: "view/lanes/lanes.html",
        controller: LanesController
    });   
    $routeProvider.when("/lanes/new", {
        templateUrl: "view/new.html",
        controller: LanesController
    });       
    $routeProvider.when("/kanbans", {
        templateUrl: "view/kanbans/kanbans.html",
        controller: KanbansController
    });
    $routeProvider.when("/kanbans/new", {
        templateUrl: "view/new.html",
        controller: DevelopersController
    }); 
    $routeProvider.when("/developers", {
        templateUrl: "view/developers/developers.html",
        controller: DevelopersController
    });
    $routeProvider.when("/developers/new", {
        templateUrl: "view/new.html",
        controller: DevelopersController
    }); 
    $routeProvider.when("/boards", {
        templateUrl: "view/boards/boards.html",
        controller: BoardsController
    });
    $routeProvider.otherwise({redirectTo: "/stickers"});
}