
// function arbeitszeit(){
// 	var getOverlay = document.getElementById('overlay');
// 	getOverlay.style.display = "none";
// }

$(document).ready(function(){
	 $(".arbeit").on("click",function(event){
        $("#overlay").fadeOut( 1000 );
    });


	  $(".fa-bars").on("click",function(event){
        $("#overlay").fadeIn( 1000 );
    });
});


// skloniti plusic
// shop proces