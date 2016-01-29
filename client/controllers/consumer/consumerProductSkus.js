/**
 * Created by NicoloEngles on 1/28/2016.
 */


if(Meteor.isClient){
    //events
    Template.consumerProductSkus.events({
        'click .order': function(event,template){
            sessionStorage.setItem('currentBrowsedProduct',event.currentTarget.id);
            Router.go('/consumer/productlist/productskus/');
        }
    })

    //helpers
    Template.consumerProductSkus.helpers({
        Sku: function(){
            return ProductSkus.find({productId:sessionStorage.getItem('currentBrowsedProduct')});
        },
        Item: function(){
            return Products.findOne({_id:sessionStorage.getItem('currentBrowsedProduct')});
        }
    })
}