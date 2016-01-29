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

Router.route('/consumer/productlist/productskus', function () {
    this.render('consumerProductSkus');
    this.layout('consumerLayout');
});
