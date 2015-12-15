$(document).ready(function (){
	var temp ="";
	var do_1x = "";
	var factor1="";
	var factor2="";
	var  answer =0;
	var  operation="";
	
	$("#AC").on("click",function(){
		  $("input").val("");
		  factor1 = "";
		  factor2 = "";
		  temp = "";
	});
	
	$("#CE").on("click",function(){
		  $("input").val("");
		  if (factor1 && !factor2) {
			   factor1 = "";
		  }
		   if (factor1 &&factor2) {
			   factor2 = "";
		  }
		  
	});
	
	$(".number").on("click",function(){	
		temp += $(this).data("numval") ;
		
		//console.log("input number is " + temp )
		$("input").val(temp);
	});
	
	$(".opcode").on("click",function(){
		 do_1x =true;
		 operation = $(this).data("oper") ;
		 //console.log("the operation is "+ operation);
    });	
	
		if ( factor1==="") {
			factor1 = Number(temp);
			console.log("factor1= "+temp);
			temp = "";
			$("input").val("");
			
		}
		else
			if (factor2==="") {
				factor2= Number(temp);
				temp = "";
				$("input").val("");
			};
	
		
	$("#EQ").click(function(){
		console.log("factor1= "+factor1 +" and factor2= " +factor2+ " and the opcode is " +operation );
	
			if (operation = "X") {
				answer = factor1 * factor2;
				console.log("factor1 * factor2=" +answer);
			} else if (operation = "/") {
				answer = Math.round(factor1 / factor2, 2) ;
				console.log("factor1/factor2 = "+answer);
			} else if (operation = "+"){
				answer = factor1 + factor2 ;
				console.log("factor1 + factor2= "+answer);
			} else{
				answer = factor1 - factor2;
				console.log("factor1 - factor2= "+answer);
			};
			
			$("input").val(answer);
				
	}); 
		
	
})