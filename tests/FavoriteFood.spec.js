describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	var people = [
		{
			name: 'David',
			favoriteFood: 'Hamburgers'
		},
		{
			name: 'Paul',
			favoriteFood: 'Pizza'
		},
		{
			name: 'Amy',
			favoriteFood: 'Dim Sum'
		},
		{
			name: 'Venous',
			favoriteFood: 'Hamburgers'
		}
	];

	it('filters people by Hamburgers', function () {
		var results = $filter('favoriteFood')(people, 'Hamburgers');

		expect(results.length).toEqual(2);
		expect(results[1].name).toBe('Venous');
	})


});
