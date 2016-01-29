/**
 * Created by NicoloEngles on 1/28/2016.
 */

if(Meteor.isClient){
    //events
    Template.loginPage.events({
        'submit form':function(event,template){
            event.preventDefault();

            var username =  template.find('#userName').value;
            var password =  template.find('#password').value;

            if(Users.find({userName:username,password:password}).count()>0){
                var user = Users.findOne({userName:username,password:password});

                sessionStorage.setItem('validName',user.name);
                sessionStorage.setItem('validId',user._id);

                if(user.userLevel=="Customer"){
                    sessionStorage.setItem('validSupplierId',user.supplierId);
                    Router.go('/consumer/');
                }else if(user.userLevel=="Owner"){
                    Router.go('/owner/');
                }
            }else{
                alertify.error('Invalid user.');
            }

        }
    })

    //helpers
}