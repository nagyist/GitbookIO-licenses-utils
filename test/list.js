var assert = require('assert');
var licenses = require('../lib');

describe('List', function () {
    it('should return a list', function() {
        assert((licenses.list() instanceof Array));
    });

    it('should return info with get', function() {
        assert(licenses.get("mit") != null);
    });
});