var kuMeIk = angular.module('kuMeIk', [] );

kuMeIk.controller('kuMeIk', function($scope) {
	$scope.kategorite = [ 
		{emri: 'Restorante', pershkrimi: 'Restorante m plak, ktu haen gjona a kpt ;)', foto: 'img/restorante.png', link: 'restorante.html'}, 
		{emri: 'Bare', pershkrimi: '', foto: 'img/bare.png', link: 'bare.html'}, 
		{emri: 'Snacks', pershkrimi: '', foto: 'img/snacks.png', link: 'snacks.html'}, 
		{emri: 'Lounge', pershkrimi: '', foto: 'img/lounge.png', link: 'lounge.html'}, 
		{emri: 'Club', pershkrimi: '', foto: 'img/club.png', link: 'club.html'}, 
		{emri: 'Fast Food', pershkrimi: '', foto: 'img/fastfood.png', link: 'fastfood.html'}, 
		{emri: 'Piceri', pershkrimi: '', foto: 'img/piceri.png', link: 'piceri.html'},
		{emri: 'Embelsira', pershkrimi: '', foto: 'img/embelsira.png', link: 'embelsira.html'},
		{emri: 'Hotele', pershkrimi: '', foto: 'img/hotel.png', link: 'hotele.html'}
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
			template: "<h6>INFO</h6>"
		};
	});


//TO DO LIST:

	// Footer - CSS
	// Footer angularJS component
	// Gjithsej function
	// gjithsej position
	// faqet e tjera
	// linkime
	//
	//
	//