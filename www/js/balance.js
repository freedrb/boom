//balance.js
'use strict';
 class BalManager{
    constructor(classify ,account,money=0,time=new Date().getDate,remark=``,BlaCount=0){
      
        this.BalClassify=classify;
        this.BalAccount=account;
        this.BalMoney=money;
        this.BalTime=time;
        this.BalRemark=remark;
        this.BalId=BlaCount;

    }
   
}