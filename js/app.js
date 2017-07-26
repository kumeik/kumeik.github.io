var kuMeIk = angular.module('kuMeIk', [] );

kuMeIk.controller('kuMeIk', function($scope) {
	$scope.kategorite = [
		{emri: 'Restorante', pershkrimi: 'Restorante m plak, ktu haen gjona a kpt ;)', foto: 'img/Group.png', link: 'restorante.html'},
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
		{rank: 1, emri: 'La Voglia', pershkrimi: 'In the center of Tirana, with delicious dishes and spectacular atmosphere.', foto: 'img/restorante/lavoglia.png'},
		{rank: 2, emri: 'Artigiano', pershkrimi: 'Abdyl Frasheri, Tirana, Albania 1000', foto: 'img/restorante/artigiano.jpg'},
		{rank: 3, emri: 'Vita99', pershkrimi: 'Rruga Komuna e Parisit, pallatet 1Maj(perballe stadiumit Dinamo) , Tirana, Albania 1001', foto: 'img/restorante/vita99.jpg'},
		{rank: 4, emri: '2 Oxhaket', pershkrimi: 'GREAT FOOD', foto: ''},
		{rank: 5, emri: '', pershkrimi: '', foto: ''}
	];

	$scope.bare = [
		{rank: 1, emri: 'La Voglia', pershkrimi: 'In the center of Tirana, with delicious dishes and spectacular atmosphere.', foto: 'img/restorante/lavoglia.png'},
		{rank: 2, emri: 'Artigiano', pershkrimi: 'Abdyl Frasheri, Tirana, Albania 1000', foto: 'img/restorante/artigiano.jpg'},
		{rank: 3, emri: 'Vita99', pershkrimi: 'Rruga Komuna e Parisit, pallatet 1Maj(perballe stadiumit Dinamo) , Tirana, Albania 1001', foto: 'img/restorante/vita99.jpg'},
		{rank: 4, emri: '2 Oxhaket', pershkrimi: 'GREAT FOOD', foto: ''},
		{rank: 5, emri: '', pershkrimi: '', foto: ''}
	];

	$scope.snacks = [
		{rank: 1, emri: 'La Voglia', pershkrimi: 'In the center of Tirana, with delicious dishes and spectacular atmosphere.', foto: 'img/restorante/lavoglia.png'},
		{rank: 2, emri: 'Artigiano', pershkrimi: 'Abdyl Frasheri, Tirana, Albania 1000', foto: 'img/restorante/artigiano.jpg'},
		{rank: 3, emri: 'Vita99', pershkrimi: 'Rruga Komuna e Parisit, pallatet 1Maj(perballe stadiumit Dinamo) , Tirana, Albania 1001', foto: 'img/restorante/vita99.jpg'},
		{rank: 4, emri: '2 Oxhaket', pershkrimi: 'GREAT FOOD', foto: ''},
		{rank: 5, emri: '', pershkrimi: '', foto: ''}
	];

	$scope.lounges = [
		{rank: 1, emri: 'La Voglia', pershkrimi: 'In the center of Tirana, with delicious dishes and spectacular atmosphere.', foto: 'img/restorante/lavoglia.png'},
		{rank: 2, emri: 'Artigiano', pershkrimi: 'Abdyl Frasheri, Tirana, Albania 1000', foto: 'img/restorante/artigiano.jpg'},
		{rank: 3, emri: 'Vita99', pershkrimi: 'Rruga Komuna e Parisit, pallatet 1Maj(perballe stadiumit Dinamo) , Tirana, Albania 1001', foto: 'img/restorante/vita99.jpg'},
		{rank: 4, emri: '2 Oxhaket', pershkrimi: 'GREAT FOOD', foto: ''},
		{rank: 5, emri: '', pershkrimi: '', foto: ''}
	];

	$scope.clube = [
		{rank: 1, emri: 'La Voglia', pershkrimi: 'In the center of Tirana, with delicious dishes and spectacular atmosphere.', foto: 'img/restorante/lavoglia.png'},
		{rank: 2, emri: 'Artigiano', pershkrimi: 'Abdyl Frasheri, Tirana, Albania 1000', foto: 'img/restorante/artigiano.jpg'},
		{rank: 3, emri: 'Vita99', pershkrimi: 'Rruga Komuna e Parisit, pallatet 1Maj(perballe stadiumit Dinamo) , Tirana, Albania 1001', foto: 'img/restorante/vita99.jpg'},
		{rank: 4, emri: '2 Oxhaket', pershkrimi: 'GREAT FOOD', foto: ''},
		{rank: 5, emri: '', pershkrimi: '', foto: ''}
	];

	$scope.fastfoode = [
		{rank: 1, emri: 'La Voglia', pershkrimi: 'In the center of Tirana, with delicious dishes and spectacular atmosphere.', foto: 'img/restorante/lavoglia.png'},
		{rank: 2, emri: 'Artigiano', pershkrimi: 'Abdyl Frasheri, Tirana, Albania 1000', foto: 'img/restorante/artigiano.jpg'},
		{rank: 3, emri: 'Vita99', pershkrimi: 'Rruga Komuna e Parisit, pallatet 1Maj(perballe stadiumit Dinamo) , Tirana, Albania 1001', foto: 'img/restorante/vita99.jpg'},
		{rank: 4, emri: '2 Oxhaket', pershkrimi: 'GREAT FOOD', foto: ''},
		{rank: 5, emri: '', pershkrimi: '', foto: ''}
	];

	$scope.piceri = [
		{rank: 1, emri: 'La Voglia', pershkrimi: 'In the center of Tirana, with delicious dishes and spectacular atmosphere.', foto: 'img/restorante/lavoglia.png'},
		{rank: 2, emri: 'Artigiano', pershkrimi: 'Abdyl Frasheri, Tirana, Albania 1000', foto: 'img/restorante/artigiano.jpg'},
		{rank: 3, emri: 'Vita99', pershkrimi: 'Rruga Komuna e Parisit, pallatet 1Maj(perballe stadiumit Dinamo) , Tirana, Albania 1001', foto: 'img/restorante/vita99.jpg'},
		{rank: 4, emri: '2 Oxhaket', pershkrimi: 'GREAT FOOD', foto: ''},
		{rank: 5, emri: '', pershkrimi: '', foto: ''}
	];

	$scope.embelsira = [
		{rank: 1, emri: 'La Voglia', pershkrimi: 'In the center of Tirana, with delicious dishes and spectacular atmosphere.', foto: 'img/restorante/lavoglia.png'},
		{rank: 2, emri: 'Artigiano', pershkrimi: 'Abdyl Frasheri, Tirana, Albania 1000', foto: 'img/restorante/artigiano.jpg'},
		{rank: 3, emri: 'Vita99', pershkrimi: 'Rruga Komuna e Parisit, pallatet 1Maj(perballe stadiumit Dinamo) , Tirana, Albania 1001', foto: 'img/restorante/vita99.jpg'},
		{rank: 4, emri: '2 Oxhaket', pershkrimi: 'GREAT FOOD', foto: ''},
		{rank: 5, emri: '', pershkrimi: '', foto: ''}
	];

	$scope.hotele = [
		{rank: 1, emri: 'La Voglia', pershkrimi: 'In the center of Tirana, with delicious dishes and spectacular atmosphere.', foto: 'img/restorante/lavoglia.png'},
		{rank: 2, emri: 'Artigiano', pershkrimi: 'Abdyl Frasheri, Tirana, Albania 1000', foto: 'img/restorante/artigiano.jpg'},
		{rank: 3, emri: 'Vita99', pershkrimi: 'Rruga Komuna e Parisit, pallatet 1Maj(perballe stadiumit Dinamo) , Tirana, Albania 1001', foto: 'img/restorante/vita99.jpg'},
		{rank: 4, emri: '2 Oxhaket', pershkrimi: 'GREAT FOOD', foto: ''},
		{rank: 5, emri: '', pershkrimi: '', foto: ''}
	];

});


	kuMeIk.directive('header', function(){
		return {
			template: "<h1> Ku me ik?</h1>"
		};

	});


//TO DO LIST:

	// Footer angularJS component
	// gjithsej position
	// faqet e tjera
	//
	//
	//
	//
