/**
 * Created by NicoloEngles on 1/29/2016.
 */

UserCarts = new Mongo.Collection('userCarts');

UserCarts.attachSchema (new SimpleSchema({

    'ownerId':{
        type:String,
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