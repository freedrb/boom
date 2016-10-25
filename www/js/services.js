angular.module('starter.services', [])

.factory('Account', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  localStorage.AccId=localStorage.AccId || 0;
 localStorage.AccData || (localStorage.AccData=angular.toJson(new Account("myself",100,"test",[],0)));
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
        localStorage.AccId=Number(localStorage.pAccId) +1;
       return new Account(name,balance,remark,[],localStorage.AccId);
    },
 
   add:function(pare,Child){

            Child.parent=pare;
            pare.Child.push(Child);
            synchronize();

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
  
				
  }
 
})
.factory('Classifiy', function() {
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
       return new Classification(name,remark,[],localStorage.ClaId);
    },
 
   add:function(pare,Child){

            Child.parent=pare;
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
        return pare.Child.find((element,index,array)=>Id===element.AccId);
    },


    update:function(pare,name = ``,remark = ``){
        pare.AccName    = name;
        pare.Accremark  = remark;
            synchronize();
        return pare;
    },
		

      moveItem:function(pare,item, fromIndex, toIndex) {
         pare.Child.splice(fromIndex, 1);
         pare.Child.splice(toIndex, 0, item);
         synchronize();
  },
  }
 
});
