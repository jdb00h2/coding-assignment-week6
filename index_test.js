var expect = chai.expect;

describe('getName', function() {
    it('should return the name the player inputs', function(){
        var x = getName('');
        expect(x).to.equal('');
    });
});