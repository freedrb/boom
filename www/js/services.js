angular.module('starter.services', [])

.factory('Account', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  localStorage.AccId=localStorage.AccId || 0;
 localStorage.AccData || (localStorage.AccData=angular.toJson(new Account(0,"myself",100,"test",[])));
    let synchronize=function(){
                    let temp={};
            angular.copy(AccData,temp);
            localStorage.AccData=angular.toJson(function(pare){
		pare.Child.i || (pare.Child.i=0);
			while(pare.Child.i < pare.Child.length){
				let e = pare.Child[pare.Child.i];
                e.parent=null;
				if(e && e.Child.length > 0){
					arguments.callee(e);
				}
	            pare.Child.i++ ;
			}
			pare.Child.i = null ;
            return pare; 			
	}(temp));
    }
   
    var AccData=function(pare){
		    let i=0;
			while(i < pare.Child.length){
				let e = pare.Child[i];
                e.parent=pare;
				if(e && e.Child.length > 0){
					arguments.callee(e);
				}
	            i++;
			}
            return pare; 			
	}(angular.fromJson(localStorage.AccData));

  return {

    get: function() {     
      return AccData;;
    },

    create:function(name=``,balance=0,remark=``){
        localStorage.AccId=Number(localStorage.AccId) +1;
       return new Account(+localStorage.AccId,name,+balance,remark,[]);
    },
 
   add:function(pare,Child){

            Child.parent=pare;
           Child.line=pare.line.concat(Child.AccId);
            pare.Child.push(Child);
            synchronize();

        },

        flattening:function(){
                 let temp=new Set();
           (function(pare){
		pare.Child.i || (pare.Child.i=0);
        temp.add(pare);
			while(pare.Child.i < pare.Child.length){
				let e = pare.Child[pare.Child.i];
                temp.add(e);
				if(e && e.Child.length > 0){
					arguments.callee(e);
				}
	            pare.Child.i++ ;
			}
			pare.Child.i = null ;
            return pare; 			
	}(AccData));
    return [...temp];
 },
    remov:function(pare,item){
         pare.Child.splice( pare.Child.indexOf(item), 1);
             synchronize();
       
    },

    find:function(pare,Id){
        return pare.Child.find((element,index,array)=>Id===element.AccId);
    },


    findParent:function(){

    },


    update:function(pare,AccName = ``,AccBanlace = 0,Accremark = ``){
        pare.AccName    = AccName;
        pare.AccBanlace = AccBanlace;
        pare.Accremark  = Accremark;

         synchronize();
    },



     ChildSum:function(pare){
		if(pare.Child.length === 0 )return 0;
        else 
        {
            pare.Child.i || (pare.Child.i=0);
            let sum=0;
			while(pare.Child.i < pare.Child.length)
            {
				let e = pare.Child[pare.Child.i];
                sum+=e.each1();
				pare.Child.i++ ;
			}
			pare.Child.i = null ; 
            return sum;
		} 			
	},
     moveItem:function(pare,item, fromIndex, toIndex) {
         pare.Child.splice(fromIndex, 1);
         pare.Child.splice(toIndex, 0, item);
         synchronize();
  },
  
	incoexpenditure:function(item,money){
        if(item.AccBanlace < money)
        throw new Error("余额不足");
        item.AccBanlace-=money;

    },
    income:function(item,money){
            item.AccBanlace+=money;
    }			
  }
 
})
.factory('Classify', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  localStorage.ClaId=localStorage.ClaId || 0;
 localStorage.ClaData || (localStorage.ClaData=angular.toJson(new Classification()));
 let synchronize=function(){
                 let temp={};
            angular.copy(ClaData,temp);
            localStorage.ClaData=angular.toJson(function(pare){
		pare.Child.i || (pare.Child.i=0);
			while(pare.Child.i < pare.Child.length){
				let e = pare.Child[pare.Child.i];
                e.parent=null;
				if(e && e.Child.length > 0){
					arguments.callee(e);
				}
	            pare.Child.i++ ;
			}
			pare.Child.i = null ;
            return pare; 			
	}(temp));
 }
   
    var ClaData=function(pare){
		pare.Child.i || (pare.Child.i=0);
			while(pare.Child.i < pare.Child.length){
				let e = pare.Child[pare.Child.i];
                e.parent=pare;
				if(e && e.Child.length > 0){
					arguments.callee(e);
				}
	            pare.Child.i++ ;
			}
			pare.Child.i = null ;

            return pare; 			
	}(angular.fromJson(localStorage.ClaData));

  return {

    get: function() {     
      return ClaData;;
    },

    create:function(name=`test`,remark=`test`){
        localStorage.ClaId=Number(localStorage.ClaId) +1;
       return new Classification(+localStorage.ClaId,name,remark,[]);
    },
 
   add:function(pare,Child){

            Child.parent=pare;
            Child.line=pare.line.concat(Child.ClaId);
            pare.Child.push(Child);
            synchronize();

        },


    remov:function(pare,item){
        // let tmpId  = pare.Child.findIndex((element,index,array)=>Id===element.AccId);
        // if(tmpId === -1)
        // throw RangeError("have no pare date");
     
        //  pare.Child.splice(tmpId,1);
         pare.Child.splice( pare.Child.indexOf(item), 1);
             synchronize();
       
    },


    find:function(pare,Id){
        return pare.Child.find((element,index,array)=>Id===element.ClaId);
    },

    flattening:function(){
                 let temp=new Set();
           (function(pare){
		pare.Child.i || (pare.Child.i=0);
        temp.add(pare);
			while(pare.Child.i < pare.Child.length){
				let e = pare.Child[pare.Child.i];
                temp.add(e);
				if(e && e.Child.length > 0){
					arguments.callee(e);
				}
	            pare.Child.i++ ;
			}
			pare.Child.i = null ;
            return pare; 			
	}(ClaData));
    return [...temp];
 },

    update:function(pare,name = ``,remark = ``){
        pare.ClaName    = name;
        pare.ClaRemark  = remark;
            synchronize();
        return pare;
    },
		

      moveItem:function(pare,item, fromIndex, toIndex) {
         pare.Child.splice(fromIndex, 1);
         pare.Child.splice(toIndex, 0, item);
         synchronize();
  },
  }
 
})



.factory('BalManager', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  localStorage.BalId=localStorage.BalId || 0;
 localStorage.BalData || (localStorage.BalData=angular.toJson([]));
 let BalData=angular.fromJson(localStorage.BalData);

 let synchronize=function(){
     localStorage.BalData=angular.toJson(BalData);

 }
   
   
  return {

    get: function() {     
      return BalData;
    },

    create:function(name,classify,account,money,time,remark){
        let id=Number(localStorage.BalId) +1;
        localStorage.BalId=""+id;
       return new BalManager(id,name,classify ,account,money,time,remark);
    },
 
   add:function(item){
           BalData.push(item);
            synchronize();

        },

    remov:function(item){
       BalData.splice( BalData.indexOf(item), 1);
             synchronize();      
    },

    find:function(Id){
        return BalData.find((element,index,array)=>Id===element.BalId);
    },

      moveItem:function(item, fromIndex, toIndex) {
         BalData.splice(fromIndex, 1);
         BalData.splice(toIndex, 0, item);
         synchronize();
  },
  }
 
});

