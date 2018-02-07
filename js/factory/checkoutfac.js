app.factory("checkoutfac",function(){
    var object = {
       item:[],add(obj){
        var i=new Item(obj.id,obj.name,obj.desc, obj.price, obj.color,obj.url,obj.discount,obj.paymentOptions,obj.warranty,obj.highlights);
        this.item.push(i);
        console.log(this.item);   
       }}
       return object;
});
