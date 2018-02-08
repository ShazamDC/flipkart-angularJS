app.factory("womenfactory",function($http,$q){
    var object = {
        item:[],callServer(){
            var defer = $q.defer();
            $http.get("./women.json").then(function(data){
                defer.resolve(data);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        },addItem(obj){
            var i=new Item(obj.id,obj.name,obj.desc, obj.price, obj.color,obj.url,obj.discount,obj.paymentOptions,obj.warranty,obj.highlights);
            return i;
        },fillItems(data){
         //   data=JSON.parse(data);
            item=data.data.women;
            var row=[];    
    for(var i=0;i<item.length;i++){
row.push(this.addItem(item[i]));
if((i+1)%4==0){
this.item.push(row);    
row=[];
}
    }
    console.log(this.item);
         }
    }
    return object;   
})
