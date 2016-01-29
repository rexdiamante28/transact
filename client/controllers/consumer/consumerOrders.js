/**
 * Created by NicoloEngles on 1/29/2016.
 */

if(Meteor.isClient){
    //events
    Template.consumerOrders.events({
        'click .order': function(event,template){
            sessionStorage.setItem('currentBrowsedProduct',event.currentTarget.id);
            Router.go('/consumer/productlist/productskus/');
        },
        'click #exactAmount': function(event,template){
           if(template.find('#exactAmount').checked){
               $('#amountTendered').val($('#subTotal').html());
               $('#amountTendered').attr("readonly","true");
           }else{
               $('#amountTendered').val("");
               $('#amountTendered').removeAttr("readonly");
           }
        },
        'submit form': function(event,template){
            event.preventDefault();


            try{
                var amount = parseFloat(template.find('#amountTendered').value);
                Orders.insert({
                    customerId:sessionStorage.getItem('validId'),
                    supplierId:sessionStorage.getItem('validSupplierId'),
                    totalAmount:amount,
                    status:"Waiting",
                    dateSent: new Date()
                })

                var currentOrderId = Orders.findOne({customerId:sessionStorage.getItem('validId')},{sort:{dateSent:-1}})._id;


                var orders = UserCarts.find({ownerId:sessionStorage.getItem('validId')});
                var count = orders.count();
                orders = orders.fetch();
                for(var a=0; a<count;a++){
                    OrderItems.insert({
                        orderId: currentOrderId,
                        itemName:orders[a].itemName,
                        itemUnit:orders[a].itemUnit,
                        itemPrice:orders[a].itemPrice,
                        itemQuantity:orders[a].itemQuantity
                    })

                    UserCarts.remove({_id:orders[a]._id})
                }

                alertify.success('Order Sent');

            }catch(error){
                alertify.error('"Change for how much field is required"');
            }

        }
    })

    //helpers
    Template.consumerOrders.helpers({
        Orders: function(){
            return UserCarts.find({ownerId:sessionStorage.getItem('validId')});
        },
        Subtotal: function(){
            var orders = UserCarts.find({ownerId:sessionStorage.getItem('validId')});
            var count = orders.count();
            orders = orders.fetch();
            var sum =0;

            for(var a =0;a<count; a++){
                sum+=(orders[a].itemPrice * orders[a].itemQuantity)
            }

            return sum;
        }
    })
}