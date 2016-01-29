if(Meteor.isClient){
    Template.ownerClients.helpers({
        clients: function () {

            var myClients = [];
            var clients = Clients.find({supplierId:sessionStorage.getItem('validId')})

            clients.map(function (client) {
                Users.find({_id: client.clientId}).map(function (user) {
                    myClients.push({
                        name: user.name,
                        mobile: user.mobile,
                        landline: user.landline,
                        address: user.addressBlockLot + " " + user.addressStreet + ", " + user.addressBarangay + ", " + user.addressCity + ", " + user.addressProvince
                    })
                })
            });

            return myClients

        }
    })
}