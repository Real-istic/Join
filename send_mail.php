<?php
########### CONFIG ###############

$recipient = $_POST['recipient'];
$redirect = 'http://gruppenarbeit-join-473.developerakademie.net/Join/index.html';

########### CONFIG END ###########
?>


<?php
###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $subject = "Contact From " . $_POST['name'];
        $headers = "From:  noreply@developerakademie.com";

        $message .= "Hello!\n This is your new Password: ChangeItASAP \n 
        https://gruppenarbeit-join-473.developerakademie.net/Join/index.html?${recipient}" . $_POST['message'];

        if (mail($recipient, $subject, $message, $headers)) {
            echo "Check your mail for the new password";
        } else {
            echo "Timeout... try again later.";
        }
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
?>