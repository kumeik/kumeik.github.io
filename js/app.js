var kuMeIk = angular.module('kuMeIk', [] );

kuMeIk.controller('kuMeIk', function($scope) {
	$scope.kategorite = [ 
		{emri: 'Restorante', pershkrimi: 'Restorante m plak, ktu haen gjona a kpt ;)', foto: 'img/restorante.png'}, 
		{emri: 'Bare', pershkrimi: '', foto: 'img/bare.png'}, 
		{emri: 'Snacks', pershkrimi: '', foto: 'img/snacks.png'}, 
		{emri: 'Lounge', pershkrimi: '', foto: 'img/lounge.png'}, 
		{emri: 'Club', pershkrimi: '', foto: 'img/club.png'}, 
		{emri: 'Fast Food', pershkrimi: '', foto: 'img/fastfood.png'}, 
		{emri: 'Piceri', pershkrimi: '', foto: 'img/piceri.png'},
		{emri: 'Embelsira', pershkrimi: '', foto: 'img/embelsira.png'}
	];

	$scope.restorante = [
		{rank: 1, emri: '', pershkrimi: '', foto: ''},
		{rank: 2, emri: '', pershkrimi: '', foto: ''},
		{rank: 3, emri: '', pershkrimi: '', foto: ''},
		{rank: 4, emri: '', pershkrimi: '', foto: ''},
		{rank: 5, emri: '', pershkrimi: '', foto: ''}
	];

});





//TO DO LIST:

	// Footer
	// Header/Footer angularJS component
	// Gjithsej function
	//
	//
	//
	//
	//
	//