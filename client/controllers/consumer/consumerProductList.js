/**
 * Created by NicoloEngles on 1/28/2016.
 */

if(Meteor.isClient){
    //events
    Template.consumerProductList.events({
        'click .order': function(event,template){
            sessionStorage.setItem('currentBrowsedProduct',event.currentTarget.id);
            Router.go('/consumer/productlist/productskus/');
        }
    })

    //helpers
    Template.consumerProductList.helpers({
        Products: function(){
            return Products.find({ownerId:sessionStorage.getItem('validSupplierId')});
        }
    })
}