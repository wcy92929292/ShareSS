"use strict";

// 将书籍使用map的方式上链保存,map的名字为BookMap
var Connotations = function (){
	LocalContractStorage.defineMapProperty(this, "arrayMap");
    LocalContractStorage.defineProperty(this, "size");
}


Connotations.prototype ={
	init: function(){
		this.size = 0;
	},
	//提交书籍的接口 参数为键值对map，key为作者名字，value为书籍内容
	submit: function(name){
		//调用该接口的人为该书籍所属的星云账户
		var index = this.size;
		this.arrayMap.set(index,name);
		this.size +=1;
		return this.arrayMap.get(this.size-1);
	},
	
	//取全部的书籍
	getAllBook:function(){
		var arr=[];
//		return this.arrayMap.get(num);
		if(this.size>5){
			for(var i=0;i<6;i++){
				var num=parseInt((this.size)*Math.random());
				arr.push(this.arrayMap.get(num));
			}
		}else{
			for(var i=0;i<this.size;i++){
				var num=parseInt((this.size)*Math.random());
				arr.push(this.arrayMap.get(num));
			}
		}
		
		return arr;
	}
};
module.exports = Connotations;