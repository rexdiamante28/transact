/**
 * Created by NicoloEngles on 1/29/2016.
 */
if(Meteor.isClient){
    //events
    Template.consumerTransactions.events({
        'click .pending': function () {
            sessionStorage.setItem('transactionStatus',"Pending");
            Router.go('/consumer/transactions/status');
        },
        'click .delivery': function () {
            sessionStorage.setItem('transactionStatus',"Delivery");
            Router.go('/consumer/transactions/status');
        },
        'click .completed': function () {
            sessionStorage.setItem('transactionStatus',"Completed");
            Router.go('/consumer/transactions/status');
        }
    })
    //helpers
    Template.consumerTransactions.helpers({
        Pending: function () {
            return Orders.find({customerId:sessionStorage.getItem('validId'),status: "Waiting"}).count();
        },
        Delivery: function () {
            return Orders.find({customerId:sessionStorage.getItem('validId'),status: "ForDelivery"}).count();
        },
        Completed: function () {
            return Orders.find({customerId:sessionStorage.getItem('validId'),status: "Completed"}).count();
        },
    })
}