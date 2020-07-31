var cycle = 0; 
var allBackgrounds = ["#FFFFFF","#FF0000 ","#00FF00","#0000FF","#FFFF00","#00ff00","#ff0080","#66ffff","#66ff66"]; 
setInterval(function() { 
	if (cycle < 9) { 
        document.body.style.backgroundColor = allBackgrounds[cycle]; 
 		cycle += 1; 
	} else {  
		cycle = 0; 
	} 
}, 70); 