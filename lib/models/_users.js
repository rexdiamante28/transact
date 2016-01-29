/**
 * Created by NicoloEngles on 1/28/2016.
 */

Users = new Mongo.Collection('users');

Users.attachSchema (new SimpleSchema({

    'userName':{
        type: String,
        optional: false
    },
    'password':{
        type:String,
        optional: false
    },
    'userLevel':{
        type:String,
        optional: false
    },
    'name':{
        type:String,
        optional: false
    },
    'mobileNumber':{
        type:String,
        optional: false
    },
    'landlineNumber':{
        type:String,
        optional: false
    },
    'addressBlockLot':{
        type:String,
        optional: false
    },
    'addressStreet':{
        type:String,
        optional: false
    },
    'addressBarangay':{
        type:String,
        optional: false
    },
    'addressCity':{
        type:String,
        optional: false
    },
    'addressProvince':{
        type:String,
        optional: false
    },
    'supplierId':{
        type:String,
        optional: true
    }


}));