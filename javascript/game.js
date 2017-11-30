//when i pick a characher it will move to my characher and the others will move to enemies
//when i pick an enemie it will move to defender
//assign a health score to each character


var charChosen = false;



window.onload = function () {



 $("#container1").one("click", ".boxes", function(){
 	// console.log(this)
	$(this).appendTo("#myChar");
	$("#container1 button").not(this).appendTo("#enemies").css("background-color","red");
	
	
})
	


 $("#enemies").on("click", ".boxes", function(){
	$(this).appendTo("#defender").css("background-color","gray");
	

 })

 $("#attack").on("click", function () {
 	var chosen = $("#myChar button").attr("value"); 
 	var enemy = $("#defender button").attr("value");
 	//did not know how to add multiples of 8
 	enemy -= 8;
// this does not work but i want each character to have diffenet attack power.
 	if (($("#defender").has("#boxdarth"))) {
 		chosen -= 30;
 	}
 	if (($("#defender").find("#boxluke"))) {
 		chosen -= 5;
 	}
 	if (($("#defender").find("#boxyoda"))) {
 		chosen -= 20;
 	}
 	if (($("#defender").find("#box"))) {
 		chosen -= 25;
 	}
 	$("#myChar button").attr("value", chosen); 
 	$("#defender button").attr("value", enemy);
 	$("#myChar button p").html(chosen);
 	$("#defender button p").html(enemy);
 		console.log("chosen and enemy: ", chosen, enemy);
 		if($("#defender button").attr('value') <= 0) {
 			$('#defender button').remove('#defender button');
 			if(("#container3:empty" && "#container5:empty")){
 				alert("YOU WIN!");
 				// $('#enemies button:first-child').appendTo("#defender");
 			}
 }

 else{}


 })




}




 