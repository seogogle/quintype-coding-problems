  var hiddenDiamonds = [];//array for hidden diamond location
  var allCells;
  var i,u;
global.startApp = function(container) {
  console.log("Here is the container:", container);
  allCells = $('.cell');
  allCells.attr('class', 'cell unknown');

  //putting random diamonds in 64 cells
  for(i=0; i<8; i++){
	hiddenDiamonds.push(parseInt(Math.random(0,.6)*64));
  }

  //putting hidden diamonds in boxes
  for(u=0; u<hiddenDiamonds.length && hiddenDiamonds.length>0;u++){
  	allCells[hiddenDiamonds[u]].setAttribute('class', 'cell diamond unknown');
  }

  //on click evvent for diamonds when clicked on hidden diamond
  $('.cell.diamond.unknown').click(function(){
		$(this).removeClass('unknown');
		score();
  })

  //on click event for empty diamond cells
  $('.cell.unknown').click(function(){
		$(this).removeClass('unknown');
		score();
  })

  function score(){
  	/*if($('.cell.diamond.unknown').length()==0)
  		alert('Game Over!  Your Score'+$('.cell.unknown').length)
  	else*/
  		$('.Score').text($('.cell.unknown').length);
  }
}
