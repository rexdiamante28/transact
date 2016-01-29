/**
 * Created by NicoloEngles on 1/28/2016.
 */
if(Meteor.isClient){
    Template.signUp.events({
        'submit form': function(event, template){
            event.preventDefault();

            var userName = template.find('#userName').value;
            var password1 = template.find('#password1').value;
            var password2 = template.find('#password2').value;
            var userLevel = "";
            var name = template.find('#name').value;
            var mobileNumber = template.find('#mobileNumber').value;
            var landlineNumber = template.find('#landlineNumber').value;
            var blockLot = template.find('#blockLot').value;
            var street = template.find('#street').value;
            var barangay = template.find('#barangay').value;
            var city = template.find('#city').value;
            var province = template.find('#province').value;


            if(template.find('#customerRadio').checked==true){
               userLevel="Customer";
            }
            else{
                userLevel="Owner";
            }


            if(Users.find({userName:userName}).count()>0){
                alertify.error('username not available');
            }else {
                if(password1!=password2){
                    alertify.error('password mismatch. Please check.');
                }else {
                    Users.insert({
                        userName: userName,
                        password: password1,
                        userLevel: userLevel,
                        name: name,
                        mobileNumber: mobileNumber,
                        landlineNumber: landlineNumber,
                        addressBlockLot:  blockLot,
                        addressStreet: street,
                        addressBarangay: barangay,
                        addressCity: city,
                        addressProvince: province


                    },function(error,result){
                        var success ="Registration successful";
                        Validate(error,Users,template,success);
                    });
                }
            }
        }
    })
}