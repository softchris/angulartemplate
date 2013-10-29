describe('testing stuff',function(){
    beforeEach(module('services'));
    beforeEach(module('models'));

    var loginService = null;

    /*
    beforeEach(inject(function(_loginService_){
        loginService = _loginService_;
    }));*/

    beforeEach(inject(function($injector){
        loginService = $injector.get('loginService');
    }));

    it('noone logged in yet',function(){

        expect(loginService.isLoggedIn()).toBe(false); // false, this will fail
    });
});
