/**
 * Created by NicoloEngles on 1/27/2016.
 */
if(Meteor.isClient){
    //events
    Template.productSkuModal.events({
        'submit form': function(event,template){
            event.preventDefault();

            var id = sessionStorage.getItem('productSku');
            var unit = template.find('#unit').value;
            var price = template.find('#price').value;
            var isAvailable = template.find('#isAvailable');

            ProductSkus.insert({
                productId: id,
                unit: unit,
                price: price,
                isAvailable: isAvailable.checked
            })
        }
    })

    Template.ownerProductsSkus.events({
        'click .remove': function(event,template){
            event.preventDefault();
            var id = event.currentTarget.id;

            alertify.confirm("Confirm action","Please confirm to delete.",
                function(){
                    ProductSkus.remove({_id:id});
                    alertify.success('Product sku Removed');
                },
                function(){
                    //alertify.error('Cancel');
                });
        }
    })

    Template.ownerProductsSkus.helpers({
        Skus : function(){
            var id = sessionStorage.getItem('productSku');
            return ProductSkus.find({productId:id})
        },
        Product: function(){
            var id = sessionStorage.getItem('productSku');
            return Products.findOne({_id:id})
        }
    })

    //helpers
}