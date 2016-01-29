/**
 * Created by NicoloEngles on 1/26/2016.
 */

Router.route('/consumer/', function () {
    this.render('consumerIndex');
    this.layout('consumerLayout');
});

Router.route('/consumer/transactions', function () {
    this.render('consumerTransactions');
    this.layout('consumerLayout');
});

Router.route('/consumer/settings', function () {
    this.render('consumerSettings');
    this.layout('consumerLayout');
})

Router.route('/consumer/productlist', function () {
    this.render('consumerProductList');
    this.layout('consumerLayout');
});

Router.route('/consumer/orders', function () {
    this.render('consumerOrders');
    this.layout('consumerLayout');
});

Router.route('/consumer/productlist/productskus', function () {
    this.render('consumerProductSkus');
    this.layout('consumerLayout');
});

Router.route('/consumer/productlist/productskus/order', function () {
    this.render('consumerProductsOrder');
    this.layout('consumerLayout');
});

Router.route('/consumer/transactions/status', function () {
    this.render('consumerTransactionsStatus');
    this.layout('consumerLayout');
});

Router.route('/consumer/transactions/status/view', function () {
    this.render('consumerTransactionsStatusView');
    this.layout('consumerLayout');
});





