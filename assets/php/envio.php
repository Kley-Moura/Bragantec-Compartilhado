<?php

$status="";
$arquivo=null;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;



$nome = $_POST['nome'];
$email = $_POST['email'];
$assunto = $_POST['assunto'];
$mensagem = $_POST['menssage'];
$data_envio = date('d/m/Y');
$hora_envio = date('H:i');

//codigo de envio
$h1 = (float)date("H");
$h2 = (float)date("i");
$h3 = (float)date("s");
$d1 = (float)date("y");
$d2 = (float)date("m");
$d3 = (float)date("d");

$codigo=coleta($h1,$h2,$h3,$d1,$d2,$d3);
function coleta($v1, $v2, $v3, $v4, $v5, $v6){
    return (($v1+$v2/100+$v3/10000)+($v4+$v5/100+$v6/10000))*10000;
}


//
// tratamento

if(!empty($email) && !empty($mensagem)){

    if(filter_var($email, FILTER_VALIDATE_EMAIL)){

        
        $arquivo = "
        <html>
        <p><b>Nome: </b>$nome</p>
        <p><b>E-mail: </b>$email</p>
        <p><b>Assunto: </b>$assunto</p>
        <p><b>Mensagem: </b>$mensagem</p>
        <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
        </html>";
        


        require 'vendor/autoload.php';
    
        $mail = new PHPMailer(true);

        try {
        
            $mail->isSMTP();                                            
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;                                   
            $mail->Username   = 'bragantec.site@gmail.com';             
            $mail->Password   = 'awixqtkkrjuztspj';                       
      
            
         
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            $mail->setFrom('bragantec.site@gmail.com', 'Site BRAGANTEC');          // aqui devemos colocar email de origem!!!! ou o email cadastrado acima ou outro email de grupo

            $mail->addAddress('kleyton.moura@ifsp.edu.br', utf8_decode('Comissão organizadora da  BRAGANTEC'));
       
            $mail->addReplyTo($email,'Usuário do site BRAGANTEC');
          
  

            $mail->isHTML(true);    
            $assunto_msg =  'Contato Site Bragantec. Assunto: '.$assunto.' Codigo:'.$codigo;
            $mail->Subject = utf8_decode($assunto_msg); 
            
   
            $mail->Body    = $arquivo; 

           
            $mail->send(); 
         
          
            echo "Sua mensagem foi enviada com sucesso a nossa equipe!
            Aguarde que dentro de alguns dias entraremos em contato através do e-mail fornecido.";
            
            
        } catch (Exception $e) {
            //echo "Error: {$mail->ErrorInfo}";
            
        }

    }else{
           echo "E-mail fornecido para contato é invalido!";
    }

   
    
}else{
    echo "Erro ao enviar o e-mail, o acesso não foi realizado via formulário";
}

    

