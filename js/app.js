var app = angular.module("Panorama", []);
app.controller("artistCtrl",function($scope){
	 $scope.artistes=[
	 	{
	 		name:'KAYTRANADA',
	 		jour:'VENDREDI 3 AVRIL',
	 		heure:'23h20',
	 		style:'NF',
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