Up and running
================
Easiest way to get up and running is to get python and then in a terminal write the following

	python (python ver 3) -m http.server
or

	python (python ver 2) -m SimpleHTTPServer 
    for older versions of python

What do you get?
================
The solution consists of a fully functional angular application
The main idea is to provide a light intro to must things angular just to get you started.

Controllers
-----------
A controller needs a name, its usually dependant on one or more services / factories, and it always needs a scope
	
	var controllers = angular.module('controllers'); // getting the correct module
	controllers.controller('LoginController',['$scope','userService',    // list the services that you want to inject aka use
    function($scope,userService){
        //mock implementation
        $scope.user = "";
        $scope.password = "";
        $scope.login = function(){
            userService.login($scope.user,$scope.password);
        }
    }
	]);

Routes
-----------
Example - adding a route:
For example you want to be able to go to a login page by typing /Login

	$routeProvider.when('/Login', { templateUrl: 'html/login.html', controller: 'LoginController' });

###Making it work

	1) Create the view  
	html/login.html.
	2) Create the controller
	Starting out its fine to have controllers, services etc in the same file. As it grows you need to think
	of separating the files so you can do one of two things 
	
	2.1) add controller defintion to controllers.js
	2.2) create your own controller file
### Add script reference to entry point file 
usually index.html (where ng-app is)


Backend
-----------
* $http and $resource, how to get data from a REST service - coming
Services
----------
* Service creation - coming
Directives
----------
* Directive creation - coming
Form validation
----------
* Form validation - coming

TDD - how to work better 
---------- 
In able to work with TDD you need a way to write tests and also run the tests. Karma lets you do just that.
This is a very good page that explains how it works but I have tried to simplify it

	http://karma-runner.github.io/0.10/index.html
### Installing Karma
There are two ways to do it. One is a global install which installs the files in your system

	npm install -g karma , global installation
The other way is to install all the files just for your current project. This installs all the files in a node_modules directory in yur project. So for example lets say your project is in c:\app. Typing 'npm install karma' would create c:\app\node_modules 

	npm install karma --save-dev  

### Configuring it

Run a guide that creates your config file (needed later for startup of karma)

	karma init myconfig.js
This will start a guide that will let you specify where the app files are, what browsers to run tests in etc
### Breakdown of config file
By now you have a config file but what to specify?

    "files: [

    ]," , 
here you should list where controllers, repos, services and angular files resides
example :

    files : [
            'lib/angular/angular.js',
            'lib/angular/angular-loader.js',
            'lib/angular/angular-resource.js',
            'lib/angular/angular-mocks.js',
            'app.js',
            'controllers.js',
            'services.js',
            'models.js',
            'repositories.js',
            'test/**/*.js'
        ],


	autoWatch : true , this means that any change in the file will rerun the tests

###Your first test
This is placed in a file under test/** (so it matches the files)  for example
 
	test/services/loginService.js

#### Description

first thing is to create the test under the test directory and start to describe it like so

    describe('testing stuff',function(){

    });

#### The test
Within the 'describe' you define the test and also define an expect condition, compare it to Assert...

    it('name of test',function(){
        expect(2).toBe(3); // false, this will fail
    });


#### Putting it altogether

    describe('testing stuff',function(){
       it('name of test',function(){
           expect(2).toBe(3); // false, this will fail
       });
    });


#### Running it

	karma start myconfig.js
If you wrote everything correct you should have a failing test

###Testing a service in your app

#### Preload needed modules

    beforeEach(module('services'));
    beforeEach(module('models'));

Why both these modules, well the services is needed to find the definition of the service we wish to test
the models is needed because the service has a dependency to a model
#### Inject, aka fetch the needed service from angular

    beforeEach(inject(function(_loginService_){
            loginService = _loginService_;
        }));

This is a shorthand form its also possible to write a longer version

    beforeEach(inject(function($injector){
            loginService = $injector.get('loginService');
    }));

#### Putting it altogether

    describe('testing stuff',function(){
        beforeEach(module('services'));
        beforeEach(module('models'));

        var loginService = null;

        beforeEach(inject(function(_loginService_){
            loginService = _loginService_;
        }));

        it('noone logged in yet',function(){

            expect(loginService.isLoggedIn()).toBe(false); // true, a user should not be logged in at start of site
        });
    });

### Mocking
At some point, for example when talking to a backend, you want a mock to answer instead of the real thing.
A way to do this is to use something called $provide, this badboy can overwrite things defined in anglar $http or
any of your own services / factories etc..
#### Define the mock in beforeEach

    beforeEach(module(function ($provide) {
            // mock away userService
            mockUserService = { getUser : function(){
                return mockUser;
            } };
            $provide.value('userService', mockUserService); // overwriting the actual definition of userService
    }));













