'use strict';

 class Account{
    constructor(AccName=``,AccBanlace=0,Accremark=``,AccChild=[],AccCount=0){
        this.AccName    = AccName;
        this.AccBanlace = AccBanlace;
        this.Accremark  = Accremark;
        this.AccChild   = AccChild;
        this.AccId      = AccCount;
        this.parent     =this;
    }
   


    add(Child){
        if(Account.prototype.isPrototypeOf(Child))
        {
            Child.parent=this;
            this.AccChild.push(Child);
            
            return this;
        }

        return null;
    }


    remov(Id){
        let tmpId  = this.AccChild.findIndex((element,index,array)=>Id===element.AccId);
        if(tmpId === -1)
        throw RangeError("have no this date");

        return this.AccChild.splice(tmpId,1);
    }


    find(Id){
        return this.AccChild.find((element,index,array)=>Id===element.AccId);
    }


    findParent(){

    }


    update(AccName = ``,AccBanlace = 0,Accremark = ``){
        this.AccName    = AccName;
        this.AccBanlace = AccBanlace;
        this.Accremark  = Accremark;

        return this;
    }


    each (fn,num=Infinity){
		this.AccChild.i || (this.AccChild.i=0);
		if(this.AccChild.length >0 && fn.constructor == Function){
			while(this.AccChild.i < this.AccChild.length){
				let e = this.AccChild[this.AccChild.i];
				if(e && e.AccChild.constructor == Array && num!==0){
					e.each(fn,num--);
				} else {
				fn.call(e,e);
				}
				this.AccChild.i++ ;
			}
			this.AccChild.i = null ; 
		}					
	}

     ChildSum (){
		if(this.AccChild.length === 0 )return 0;
        else 
        {
            this.AccChild.i || (this.AccChild.i=0);
            let sum=0;
			while(this.AccChild.i < this.AccChild.length)
            {
				let e = this.AccChild[this.AccChild.i];
                sum+=e.each1();
				this.AccChild.i++ ;
			}
			this.AccChild.i = null ; 
            return sum;
		} 			
	}
					

}