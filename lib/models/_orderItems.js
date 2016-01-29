/**
 * Created by NicoloEngles on 1/29/2016.
 */


OrderItems = new Mongo.Collection('orderItems');

OrderItems.attachSchema (new SimpleSchema({

    'orderId':{
        type: String,
        optional: false
    },
    'itemName':{
        type: String,
        optional: false
    },
    'itemUnit':{
        type:String,
        optional: false
    },
    'itemPrice':{
        type:Number,
        optional: false
    },
    'itemQuantity':{
        type:Number,
        optional: false
    }

}));