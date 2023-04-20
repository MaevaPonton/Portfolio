<?php
if(isset($_POST['submit'])) {
    // Récupération des données du formulaire
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $sujet = $_POST['sujet'];
    $message = $_POST['message'];
    
    // Adresse e-mail où les messages seront envoyés
    $to = "maevaponton3@gmail.com";
    
    // Sujet du message
    $subject = "Nouveau message depuis votre site web";
    
    // Corps du message
    $body = "Nom: $nom\nPrénom: $prenom\nE-mail: $email\nSujet: $sujet\n\n$message";
    
    // Envoi du message
    if(mail($to, $subject, $body)) {
        echo "Votre message a bien été envoyé.";
    } else {
        echo "Une erreur est survenue, veuillez réessayer.";
    }
}
?>
