/**
 * Created by NicoloEngles on 1/27/2016.
 */
if(Meteor.isClient){
    //events
    Template.productModal.events({
        'submit form': function(event,template){
            event.preventDefault();

            var name = template.find('#name').value;
            var description = template.find('#description').value;

            Products.insert({
                ownerId:sessionStorage.getItem('validId'),
                name: name,
                description: description
            },function(error,result){
                var success ="Product added.";
                Validate(error,Products,template,success);
            });
        }
    })

    Template.ownerProducts.events({
        'click .remove' : function(event){
            var id = event.currentTarget.id;
            alertify.confirm("Confirm action","Please confirm to delete.",
                function(){
                    Products.remove({_id:id});
                    alertify.success('Product Removed');
                },
                function(){
                    //alertify.error('Cancel');
                });
        },
        'click .view' : function(event){
            var id = event.currentTarget.id;
            sessionStorage.setItem('productSku',id);
            Router.go('/owner/productskus/');
        }
    })

    //helpers
    Template.ownerProducts.helpers({
        Products: function(event){
            JoinedProducts = new Mongo.Collection(null);

            var count =  Products.find({ownerId:sessionStorage.getItem('validId')}).count();
            var unjoinedProducts = Products.find({ownerId:sessionStorage.getItem('validId')});
            unjoinedProducts = unjoinedProducts.fetch();


            for(var a=0; a<count; a++){
                JoinedProducts.insert({
                    _id: unjoinedProducts[a]._id,
                    name: unjoinedProducts[a].name,
                    description: unjoinedProducts[a].description,
                    skus: ProductSkus.find({productId:unjoinedProducts[a]._id}).count()
                })
            }

            return JoinedProducts.find({});
        }
    })

}