"use strict";

var Connotations = function (){
	LocalContractStorage.defineMapProperty(this, "arrayMap");
    LocalContractStorage.defineProperty(this, "size");
}


Connotations.prototype ={
	init: function(){
		this.size = 0;
	},
	submit: function(name){
		var index = this.size;
		var from= Blockchain.transaction.from;
		this.arrayMap.set(index,name+"+++"+from);
		this.size +=1;
		return this.arrayMap.get(this.size-1);
	},
	
	getAllBook:function(){
		var arr=[];
		if(this.size>5){
			for(var i=0;arr.length<6;i++){
				var num=parseInt((this.size)*Math.random());
				if(arr.indexOf(num)==-1){
			        arr.push(this.arrayMap.get(num));
			    }
			}
		}else{
			for(var i=0;arr.length<this.size;i++){
				var num=parseInt((this.size)*Math.random());
				if(arr.indexOf(num)==-1){
			        arr.push(this.arrayMap.get(num));
			    }
			}
		}
		
		return arr;
	}
};
module.exports = Connotations;