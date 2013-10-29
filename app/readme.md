Up and running
---------------
Easiest way to get up and running is to get python and then in a terminal write the following
python (python ver 3) -m http.server
or
python (python ver 2) -m SimpleHTTPServer for older versions of python

What do you get?
---------------
The solution consists of a fully functional angular application

A help department to get you going. Currently help for the following exist:
* Controller creation - help/adding_a_controller.txt
* Adding a route - help/adding_route.txt
* $http and $resource, how to get data from a REST service - coming
* Service creation - coming
* Directive creation - coming
* Form validation - coming
* TDD - how to work better (setup of karma and karma coverage)
http://karma-runner.github.io/0.10/index.html
** Installing Karma
npm install -g karma , global installation
npm install karma --save-dev ,  for a local installation that creates a node_module directory in your project
** configuring it
Run a guide that creates your config file (needed later for startup of karma)
karma init <name of my config file>.js
This will start a guide that will let you specify where the app files are, what browsers to run tests in etc
** Breakdown of config file
By now you have a config file but what to specify?
"files: [

    ]," , here you should list where controllers, repos, services and angular files resides
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

** Your first test
*** Description
first thing is to create the test under the test directory and start to describe it like so
describe('testing stuff',function(){

});
*** The test
Within the 'describe' you define the test and also define an expect condition, compare it to Assert...
it('name of test',function(){
    expect(2).toBe(3); // false, this will fail
});

*** Putting it altogether
describe('testing stuff',function(){
   it('name of test',function(){
       expect(2).toBe(3); // false, this will fail
   });
});

*** Running it
karma start <name of conffile>
If you wrote everything correct you should have a failing test
** Testing a service in your app
*** Preload needed modules
beforeEach(module('services'));
beforeEach(module('models'));
Why both these modules, well the services is needed to find the definition of the service we wish to test
the models is needed because the service has a dependency to a model
*** inject, aka fetch the needed service from angular
beforeEach(inject(function(_loginService_){
        loginService = _loginService_;
    }));
This is a shorthand form its also possible to write a longer version
beforeEach(inject(function($injector){
        loginService = $injector.get('loginService');
}));

*** Putting it altogether
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
** Mocking
At some point, for example when talking to a backend, you want a mock to answer instead of the real thing.
A way to do this is to use something called $provide, this badboy can overwrite things defined in anglar $http or
any of your own services / factories etc..
*** Define the mock in beforeEach
beforeEach(module(function ($provide) {
        // mock away userService
        mockUserService = { getUser : function(){
            return mockUser;
        } };
        $provide.value('userService', mockUserService); // overwriting the actual definition
}));











