var app = angular.module("Panorama", []);
app.controller("artistCtrl",function($scope){
	 $scope.artistes=[
	 	{
	 		name:'KAYTRANADA',
	 		jour:'VENDREDI 3 AVRIL',
	 		heure:'23h20',
	 		style:'AUCUN/STYLE',
	 		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis fermentum enim, ut pulvinar lacus interdum vitae. Curabitur ultrices, nibh in auctor tincidunt, neque sapien fermentum dolor, in convallis augue quam vel mauris. Duis mollis sollicitudin nulla placerat fermentum. Nunc ipsum ex, condimentum a ante sed, congue pulvinar leo. Cras dignissim, justo ut ultrices ultricies, mauris ligula malesuada leo, fermentum varius purus nulla volutpat est. Duis purus eros, dictum sit amet commodo in, ullamcorper a magna. Ut sit amet feugiat ligula. Sed sagittis massa dignissim, convallis nisi nec, placerat erat.',
	 		club:'Grand Hall',
	 		pic_link_black:'images/artistes/kay.jpg',
	 		pic_link_color:'images/artistes/kay_c.jpg',
	 		vid_link:'https://www.youtube.com/watch?v=z1BVZ0PMs9M',
	 		twitter:'#',
	 		facebook:'#',
	 		soundcloud:'#'
	 	},
	 ];
});