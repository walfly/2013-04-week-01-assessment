var Phone = function(phoneNumber){
  this.phoneNumber = phoneNumber;
};

Phone.prototype.send = function(recipientPhoneNumber, message){
    console.log('sending the message "'+ message +'" to ' + recipientPhoneNumber);
  };

var SmartPhone = function(phoneNumber, phoneEmail){
  Phone.call(this, phoneNumber);
  this.phoneEmail = phoneEmail;
};

SmartPhone.prototype.send = function(recipientPhoneNumberOrEmail, message){
  if(typeof recipientPhoneNumberOrEmail === 'number'){
    var recipientPhoneNumber = recipientPhoneNumberOrEmail;
    Phone.prototype.send(recipientPhoneNumber, message);
  } else {
    var recipientEmail = recipientPhoneNumberOrEmail;
    console.log('sending the message "'+ message +'" to ' + recipientEmail);
  }
}