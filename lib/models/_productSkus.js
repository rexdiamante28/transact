/**
 * Created by NicoloEngles on 1/27/2016.
 */

ProductSkus = new Mongo.Collection('productSkus');

ProductSkus.attachSchema (new SimpleSchema({

    'productId':{
        type: String,
        optional: false
    },
    'unit':{
        type: String,
        optional: false
    },
    'price':{
        type:Number,
        optional: false
    },
    'isAvailable':{
        type: Boolean,
        optional: false
    }
}));