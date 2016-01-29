/**
 * Created by NicoloEngles on 1/28/2016.
 */
if(Meteor.isClient){
    Template.consumerSettings.events({
        'click .setsupplier': function(event,template){
            var id = event.currentTarget.id;

            alertify.confirm("Confirm action","Please confirm to proceed.",
                function(){
                    Users.update({_id:sessionStorage.getItem('validId')},{$set:{supplierId:id}});
                    sessionStorage.setItem('validSupplierId',id);
                    alertify.success('Update successful');
                },
                function(){
                    //alertify.error('Cancel');
                });
        }
    })

    //helpers
    Template.consumerSettings.helpers({
        User: function(){
            var id =  sessionStorage.getItem('validId');
            return Users.findOne({_id:id});

        },
        Supplier: function(){
            return Users.find({userLevel:"Owner"});
        },
        currentSupplier: function(){
            var id =  sessionStorage.getItem('validId');
            var currentUser = Users.findOne({_id:id});

            return Users.findOne({_id:currentUser.supplierId});

        }
    })
}