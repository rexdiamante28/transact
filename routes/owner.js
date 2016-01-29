/**
 * Created by NicoloEngles on 1/27/2016.
 */


Router.route('/owner/', function () {
    this.render('ownerIndex');
    this.layout('ownerLayout');
});

Router.route('/owner/products', function () {
    this.render('ownerProducts');
    this.layout('ownerLayout');
});


Router.route('/owner/productskus/', function () {
    this.render('ownerProductsSkus');
    this.layout('ownerLayout');

});

Router.route('/owner/clients', function () {
    this.render('ownerClients');
    this.layout('ownerLayout');
});

Router.route('/owner/transactions', function () {
    this.render('ownertransactions');
    this.layout('ownerLayout');
});

Router.route('/owner/reports', function () {
    this.render('ownerReports');
    this.layout('ownerLayout');
});

Router.route('/owner/settings', function () {
    this.render('ownerSettings');
    this.layout('ownerLayout');
});
Router.route('/owner/orders/pending', function () {
    this.render('pendingOrders');
    this.layout('ownerLayout');
});
Router.route('/owner/orders/fordeliver', function () {
    this.render('deliveryOrders');
    this.layout('ownerLayout');
});
Router.route('/owner/orders/completed', function () {
    this.render('completedOrders');
    this.layout('ownerLayout');
});
Router.route('/owner/orders/details/', function () {
    this.render('orderDetails');
    this.layout('ownerLayout');
});