if(Meteor.isClient){
    Template.pendingOrders.helpers({
        orders: function () {

            var clientOrders = [];
            var orders = Orders.find({supplierId:sessionStorage.getItem('validId'),status: 'Waiting'});

            orders.map(function (order) {
                var client = Users.findOne({_id: order.customerId});
                clientOrders.push({
                    orderId: order._id,
                    name: client.name,
                    dateSent: new Date(order.dateSent).toLocaleString(),
                    totalAmount: order.totalAmount
                })
            });

            return clientOrders

        }
    })

    Template.deliveryOrders.helpers({
        orders: function () {

            var clientOrders = [];
            var orders = Orders.find({supplierId:sessionStorage.getItem('validId'),status: 'FD'});

            orders.map(function (order) {
                var client = Users.findOne({_id: order.customerId});
                clientOrders.push({
                    orderId: order._id,
                    name: client.name,
                    dateSent: new Date(order.dateSent).toLocaleString(),
                    totalAmount: order.totalAmount
                })
            });

            return clientOrders

        }
    })

    Template.completedOrders.helpers({
        orders: function () {

            var clientOrders = [];
            var orders = Orders.find({supplierId:sessionStorage.getItem('validId'),status: 'C'});

            orders.map(function (order) {
                var client = Users.findOne({_id: order.customerId});
                clientOrders.push({
                    orderId: order._id,
                    name: client.name,
                    dateSent: new Date(order.dateSent).toLocaleString(),
                    totalAmount: order.totalAmount
                })
            });

            return clientOrders

        }
    })


    Template.pendingOrders.events({
        'click .fordeliver': function () {
            alert('For Deliver');
            Orders.update({_id: sessionStorage.getItem('orderId')},{$set:{status:'FD'}});
        }
    })

    Template.deliveryOrders.events({
        'click .forcompletion': function () {
            alert('For Completion');
            Orders.update({_id: sessionStorage.getItem('orderId')},{$set:{status:'C'}});
        }
    })
}