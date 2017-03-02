import ES6 from '../app/assets/js/ES6';

describe('ES6 Class', ()=> {

    let es6;

    beforeEach( ()=> {
        es6 = new ES6();
    });

    it('should return \'Do Something\' when calling doSomething', ()=> {
        expect(es6.doSomething()).toEqual('Do Something');
    });

    afterEach( () => {
        es6 = null;
    });

});