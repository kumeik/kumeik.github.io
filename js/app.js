var kuMeIk = angular.module('kuMeIk', [] );

kuMeIk.controller('kuMeIk', function($scope) {
	$scope.kategorite = [ 
		{emri: 'Restorante', pershkrimi: 'Restorante m plak, ktu haen gjona a kpt ;)', foto: 'img/restorante.png', link: 'restorante.html'}, 
		{emri: 'Bare', pershkrimi: '', foto: 'img/bare.png', link: 'restorante.html'}, 
		{emri: 'Snacks', pershkrimi: '', foto: 'img/snacks.png', link: 'restorante.html'}, 
		{emri: 'Lounge', pershkrimi: '', foto: 'img/lounge.png', link: 'restorante.html'}, 
		{emri: 'Club', pershkrimi: '', foto: 'img/club.png', link: 'restorante.html'}, 
		{emri: 'Fast Food', pershkrimi: '', foto: 'img/fastfood.png', link: 'restorante.html'}, 
		{emri: 'Piceri', pershkrimi: '', foto: 'img/piceri.png', link: 'restorante.html'},
		{emri: 'Embelsira', pershkrimi: '', foto: 'img/embelsira.png', link: 'restorante.html'},
		{emri: 'Hotele', pershkrimi: '', foto: 'img/hotel.png', link: 'restorante.html'}
	];

	$scope.restorante = [
		{rank: 1, emri: 'La Voglia', pershkrimi: '', foto: ''},
		{rank: 2, emri: 'Artigiano', pershkrimi: '', foto: ''},
		{rank: 3, emri: 'Vita99', pershkrimi: '', foto: ''},
		{rank: 4, emri: '2 Oxhaket', pershkrimi: '', foto: ''},
		{rank: 5, emri: '', pershkrimi: '', foto: ''}
	];

});


	kuMeIk.directive('header', function(){
		return {
			template: "<h1> Ku me ik?</h1>"
		};

	});

	kuMeIk.directive('footer', function() {
		return {
			template: "INFO"
		};
	});


//TO DO LIST:

	// Footer
	// Footer angularJS component
	// Gjithsej function
	// gjithsej position
	// faqet e tjera
	// linkime
	//
	//
	//