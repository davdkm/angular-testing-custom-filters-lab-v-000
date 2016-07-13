describe('removeAllVowels Filter', function () {
	var $controller, removeAllVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		removeAllVowels = $filter('removeAllVowels');
	}));

	it('removes all vowels from a string', function () {
		var str = 'The quick brown fox jumps over the lazy dog.';

		expect(removeAllVowels(str)).toEqual('Th qck brwn fx jmps vr th lzy dg.');
	})
});
