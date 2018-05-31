
  
  
  //ss://bf-cfb-auth:test@192.168.100.1:8888
  $("#submit").click(function(){
	  if($("#method").val()=="" ||$("#password").val()=="" ||$("#server").val()=="" ||$("#server_port").val()==""){
		  alert("不能为空");
		  return false;
	  }
	console.log($("#method").val()+"+++++"+$("#password").val())
	var str = "ss://"+$("#method").val()+":"+$("#password").val()+"@"+$("#server").val()+":"+$("#server_port").val();
	
	var str1 = CryptoJS.enc.Utf8.parse(str);
    var base64 = CryptoJS.enc.Base64.stringify(str1);
	
	jQuery("#jp01").attr("href",base64);


  })
  

