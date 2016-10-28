//balance.js
'use strict';
 class BalManager{
    constructor(name=`test`,classify=null ,account=null,money=0,time=new Date().getDate,remark=``,BlaCount=0){
        this.BalName=name;
        this.BalClassify=classify;
        this.BalAccount=account;
        this.BalMoney=money;
        this.BalTime=time;
        this.BalRemark=remark;
        this.BalId=BlaCount;

    }
   
}