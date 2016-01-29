/**
 * Created by NicoloEngles on 1/29/2016.
 */

Orders = new Mongo.Collection('orders');

Orders.attachSchema (new SimpleSchema({

    'dateSent':{
        type:Date,
        optional: false
    },
    'customerId':{
        type:String,
        optional: false
    },
    'totalAmount':{
        type:Number,
        optional: false
    },
    'status':{
        type:String,
        optional: false
    }

}));