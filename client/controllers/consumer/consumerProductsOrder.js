/**
 * Created by NicoloEngles on 1/29/2016.
 */



if(Meteor.isClient){
    //events
    Template.consumerProductsOrder.events({

        'click .order': function(event,template){
            event.preventDefault();
            alertify.confirm("Confirm action","Please confirm to proceed.",
                function(){
                    UserCarts.insert({
                        ownerId: sessionStorage.getItem('validId'),
                        itemName: template.find('#name').value,
                        itemUnit:template.find('#unit').value,
                        itemPrice:template.find('#price').value,
                        itemQuantity:template.find('#quantity').value
                    })
                    alertify.success('order added');
                },
                function(){
                    //alertify.error('Cancel');
                });
        }
    })

    //helpers
    Template.consumerProductsOrder.helpers({
        Sku: function(){
            return ProductSkus.findOne({_id:sessionStorage.getItem('currentBrowsedSku')});
        },
        Item: function(event){
            return Products.findOne({_id:sessionStorage.getItem('currentBrowsedProduct')});
        },
    })
}