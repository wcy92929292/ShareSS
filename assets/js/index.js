var NebPay = require("nebpay");     
var nebPay = new NebPay();



var dappAddress = "11";

q("getAllBook");
  
function q(fun){
    
    var to = dappAddress;
    var value = "0";
    var callFunction = fun;
    var callArgs = "[]"; 
    nebPay.simulateCall(to, value, callFunction, callArgs, {    
        listener: cbSearch     
    });

}
function cbSearch(resp) {
    var result = resp.result;//.substring(1,resp.result.length-1);  ////resp is an object, resp.result is a JSON string
	result = eval("("+result+")");
//	var result = JSON.parse(result);
	console.log("return of rpc call: " + JSON.stringify(result));
	if(result.length==0){
		return false;
	}
	if(result.length<6){
		for(var i=0;i<result.length;i++){
			$("#row").append('<div class="4u 12u(mobile)">'+
					'<img class="hidepic" style="cursor:pointer;" src="images/portfolio/thumbnails/pic0'+parseInt((6)*Math.random())+'.jpg" alt="">'+
					'<img class="realpic" style="cursor:pointer;display:none;width:230px;height:230px;" src="'+result[i]+'" alt="">'+
				'</div>'
		)
		}
	}else{
		for(var i=0;i<6;i++){
			$("#row").append('<div class="4u 12u(mobile)">'+
					'<img class="hidepic" style="cursor:pointer;" src="images/portfolio/thumbnails/pic0'+parseInt((6)*Math.random())+'.jpg" alt="">'+
					'<img class="realpic" style="cursor:pointer;display:none;width:230px;height:230px;" src="'+result[i]+'" alt="">'+
				'</div>'
		)
		}
	}
	
	
	$(".hidepic").click(function(){
		$(this).next().show();
		$(this).hide();
	})


	$(".realpic").click(function(){
		$(this).prev().show();
		$(this).hide();
	})
} 


$("#change").click(function(){
	$("#row").html("");
	q("getAllBook");
})

  //ss://bf-cfb-auth:test@192.168.100.1:8888
  $("#submit").click(function(){
	  if($("#method").val()=="" ||$("#password").val()=="" ||$("#server").val()=="" ||$("#server_port").val()==""){
		  alert("必填项不能为空");
		  return false;
	  }
	console.log($("#method").val()+"+++++"+$("#password").val())
	var str = "ss://"+$("#method").val()+":"+$("#password").val()+"@"+$("#server").val()+":"+$("#server_port").val();
	
	var str1 = CryptoJS.enc.Utf8.parse(str);
    var base64 = CryptoJS.enc.Base64.stringify(str1);
	
//	jQuery("#jp01").attr("href",base64);

	var qrcode= $('#copydiv').qrcode("ss://"+base64).hide();   
	var canvas=qrcode.find('canvas').get(0);  
//	$('#realpic1').attr('src',canvas.toDataURL('image/jpg'))  
	doSomething(canvas.toDataURL('image/jpg'));
  })
  
  
  
function doSomething(name){
	/*var hfcz=$(a).attr("count");
	if(hfcz==undefined){
		hfcz=1;
	}else{
		hfcz++;
	}*/
	var to = dappAddress;
	var value = "0";
	var callFunction = "submit"
	// var type = $(a).parents().find("span[class='tool-type']").attr("tooltype");
	// var tcount = 0;
//	var ncount = hfcz;
	var callArgs = "[\"" + name +"\"]"
	nebPay.call(to, value, callFunction, callArgs, {    
		listener: cbPush
	});
}

function cbPush(resp) {
	console.log("response of push: " + resp);
	//alert("感谢推荐！我们的进步来自您不懈的推荐,ps:大概15秒之后，即可看到自己推荐的书籍");
	// q("getNewBook");
	
}

