var kuMeIk = angular.module('kuMeIk', [] );

kuMeIk.controller('kuMeIk', function($scope) {
	$scope.kategorite = [ 
		{emri: 'Restorante', pershkrimi: 'Restorante m plak, ktu haen gjona a kpt ;)'}, 
		{emri: 'Bare', pershkrimi: ''}, 
		{emri: 'Snacks', pershkrimi: ''}, 
		{emri: 'Lounge', pershkrimi: ''}, 
		{emri: 'Pub', pershkrimi: ''}, 
		{emri: 'Club', pershkrimi: ''}, 
		{emri: 'Fast Food', pershkrimi: ''}, 
		{emri: 'Piceri', pershkrimi: ''},
		{emri: 'Emb&euml;lsira', pershkrimi: ''}
	];

	$scope.restorante = [
		{rank: 1, emri: '', pershkrimi: '', foto: ''},
		{rank: 2, emri: '', pershkrimi: '', foto: ''},
		{rank: 3, emri: '', pershkrimi: '', foto: ''},
		{rank: 4, emri: '', pershkrimi: '', foto: ''},
		{rank: 5, emri: '', pershkrimi: '', foto: ''}
	];

});