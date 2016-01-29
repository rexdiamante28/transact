Products = new Mongo.Collection('products');

Products.attachSchema (new SimpleSchema({

    'ownerId':{
        type:String,
        optional: false
    },
    'name':{
        type: String,
        optional: false
    },
    'description':{
        type:String,
        optional: false
    }
}));