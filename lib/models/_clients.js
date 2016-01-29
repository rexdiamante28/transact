Clients = new Mongo.Collection("clients");

Clients.attachSchema (new SimpleSchema({

    'clientId': {
        type: String,
        optional: false
    },
    supplierId: {
        type: String,
        optional: false
    }
}));