/**
 * Created by NicoloEngles on 1/27/2016.
 */

Router.route('/', function () {
    this.render('siteIndex');
    this.layout('siteLayout');
});

Router.route('/about', function () {
    this.render('about');
    this.layout('siteLayout');
});

Router.route('/signup', function () {
    this.render('signUp');
    this.layout('siteLayout');
});

Router.route('/login', function () {
    this.render('loginPage');
    this.layout('siteLayout');
});
