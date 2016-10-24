angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = new Account("111",100,"zhaohuyi",[],0);
    chats.add(new Account("121",200,"zhaohuyi",[],1));
    chats.add(new Account("112",300,"zhaohuyi",[],2));
    
  return {

    get: function() {
      
      return chats;
    },

    create:function(name=``,balance=0,remark=``){
       return new Account(name,balance,remark,[],3);
    },
     add:function(item){
       
  }
  }
 
});
