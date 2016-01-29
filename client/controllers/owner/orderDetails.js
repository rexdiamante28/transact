if(Meteor.isClient){
    Template.orderDetails.helpers({
        orderDetails: function () {
            var order = Orders.findOne({_id: sessionStorage.getItem('orderId')});

            var client =  Users.findOne({_id: order.customerId});

            var details = {
                name: client.name,
                dateSent: order.dateSent,
                mobile: client.mobile,
                landline: client.landline,
                address: client.addressBlockLot + ", " + client.addressStreet + ", " + client.addressBarangay + ", " + client.addressCity + ", " + client.addressProvince,
                orderItems: [],
                totalAmount: 0
            }

            var totalAmount = 0;

            OrderItems.find({orderId: order._id}).map(function (item) {
                var amount = (parseInt(item.itemPrice) * parseInt(item.itemQuantity));
                totalAmount += amount;
                details.orderItems.push({
                    itemName: item.itemName,
                    itemUnit: item.itemUnit,
                    itemPrice: item.itemPrice,
                    itemQuantity: item.itemQuantity,
                    totalAmount: amount
                })
            })

            details.totalAmount = totalAmount;

            return details

        }
    })
}