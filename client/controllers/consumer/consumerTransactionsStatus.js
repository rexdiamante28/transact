/**
 * Created by NicoloEngles on 1/29/2016.
 */
if(Meteor.isClient){
    //events
    Template.consumerTransactionsStatus.events({
        'click .view': function(event,template){
            sessionStorage.setItem('viewTransactionId',event.currentTarget.id);
            Router.go('/consumer/transactions/status/view');
        }
    })

    //helpers
    Template.registerHelper('formatDate', function(date) {
        return moment(date).format('MMMM-DD-YYYY hh:mm a');
    });


    Template.consumerTransactionsStatus.helpers({
        Transactions: function () {
            var status = sessionStorage.getItem('transactionStatus');
            if(status=="Delivery"){
                return Orders.find({customerId:sessionStorage.getItem('validId'),status: "ForDelivery"});
            }else if(status=="Completed"){
                return Orders.find({customerId:sessionStorage.getItem('validId'),status: "Completed"});
            }
            else if(status=="Pending") {
                return Orders.find({customerId: sessionStorage.getItem('validId'), status: "Waiting"});
            }

        },
        Status: function(){
            return sessionStorage.getItem('transactionStatus');
        }
    })
}