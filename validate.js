$(document).ready(function(){

  var formHandler = function(event){    
  event.preventDefault(); // prevents the page from reloading

    //Validating the card number.
    var description = $("#desc").val();
    var amount = $("#amount").val();
    var card_number = $('#card_number').val();
    var card_number_pattern = /\d{16}/;
    var ccv = $('#ccv').val();
    var ccv_pattern = /\d\d\d/;
    var expiration_date = $('#expiration').val();
    var date_pattern = /\d\d\d\d/;
    var name = $('#name').val();
    var name_pattern = /\D+/;
    var address = $('#address').val();
    var all_good = true;

    if (description.length < 1) {
        $("#description_error").append("You have to enter a description."); 
        all_good = false;  
    }

    if(amount <= 0){
      $("#amount_error").append("You must enter an amount greater than 0.");
      all_good = false;
    }

    if(card_number_pattern.test(card_number)===false){
      $("#card_number_error").append("The credit card number has to be sixteen digits long.");
      all_good = false;
    }
 
    //Validating the CCV

    if(ccv_pattern.test(ccv)===false){
      $("#ccv_error").append("The CCV number should be three digits.");
      all_good = false;
    }

    //Validating the expiration date

    if(date_pattern.test(expiration_date)===false){
      $("#date_error").append("The date should me made up of only four characters, all digits.");
      all_good = false;
    };

    //Validating the cardholder name

    if(name_pattern.test(name)===false){
      $("#name_error").append("You have to put something for your name.");
      all_good = false;
    };

    //Validating the cardholder's address

    if(address.length < 1){
      $("#address_error").append("You have to put something for your address.");
      all_good = false;
    };

    if(all_good === true){
      $('#all_good').append("The form was submitted successfully.")
    };
  };

  $("form").submit(formHandler); // register a callback
});