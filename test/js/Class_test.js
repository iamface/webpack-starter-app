var c = require('../../app/assets/js/Class');

describe('.js test', function () {

    it('should return \'js test\' when calling test', function () {
        expect(c.test()).toEqual('js test');
    });

});