$(document).ready(function(){
	var temp ="";
	var factors =[];
	var  answer =0;
	var  operation="";
	
	$("#AC").on("click",function(){
		  $("#calc-fld").html("");
		  factors = [];
		  temp = "";
	});
	
	$("#CE").on("click",function(){
		  $("#calc-fld").html("");
		  temp = "";
		  
	});
	
	$(".number").on("click",function(){	
		
		temp += $(this).data("numval") ;
		console.log("input number is " + temp );
		$("#calc-fld").html(temp);
		
	});
	
	$(".opcode").on("click",function(){
		
		 factors.push( Number(temp) );
		 operation = $(this).data("oper") ;
		 $("#calc-fld").html("");
		 temp ="";
		 //console.log("the operation is "+ operation);
    });	
	
	
		
	$("#EQ").click(function(){
		factors.push( Number(temp) );
		console.log("factors = "+factors + " and the opcode is " +operation );
	
			if (operation === "X") {
				answer = factors.reduce(function(a,b){
					  return a * b;
				});
				console.log("factor1 * factor2=" +answer);
			} else if (operation === "/") {
				answer = factors.reduce(function(a,b){
					 return (a/b).toFixed(2);
				});
				
				console.log("factor1/factor2 = "+answer);
			} else if (operation === "+"){
				answer = factors.reduce(function(a,b){
					 return a+b;
				});
				console.log("factor1 + factor2= "+answer);
			} else{
				answer = factors.reduce(function(a,b){
					 return a-b;
				});
				console.log("factor1 - factor2= "+answer);
			};
			
			$("#calc-fld").html(answer);
				
	}); 
		
	
})