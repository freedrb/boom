'use strict';

 class Account{
    constructor(AccCount=0,AccName=``,AccBanlace=0,Accremark=``,Child=[]){
        this.AccId      = AccCount;
        this.AccName    = AccName;
        this.AccBanlace = AccBanlace;
        this.Accremark  = Accremark;
        this.Child   = Child;
        this.line=[];
        this.parent     =null;
        this.line.push(AccCount);
    }
}