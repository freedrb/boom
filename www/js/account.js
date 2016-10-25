'use strict';

 class Account{
    constructor(AccName=``,AccBanlace=0,Accremark=``,Child=[],AccCount=0){
        this.AccName    = AccName;
        this.AccBanlace = AccBanlace;
        this.Accremark  = Accremark;
        this.Child   = Child;
        this.AccId      = AccCount;
        this.parent     =null;
    }
}