'use strict';
 class  Classification{
    constructor(ClaCount=0,ClaName=`test`,ClaRemark=`tests`,Child=[]){
         this.ClaId=ClaCount;
        this.ClaName=ClaName;
        this.ClaRemark=ClaRemark;
        this.Child=Child;
       
        this.parent=null;
    }
    
}