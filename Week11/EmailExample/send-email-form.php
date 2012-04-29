<?php 
// Pear library includes
// You should have the pear lib installed
include_once('Mail.php');
include_once('Mail_Mime/mime.php');

//Settings 
$max_allowed_file_size = 100; // size in KB 
$allowed_extensions = array("jpg", "jpeg", "gif", "bmp");
$upload_folder = './uploads/'; //<-- this folder must be writeable by the script
$your_email = 'tom@amazing-designs.com';//<<--  update this to your email address

$errors ='';

if(isset($_POST['submit']))
{
	//Get the uploaded file information
	$name_of_uploaded_file =  basename($_FILES['uploaded_file']['name']);
	
	//get the file extension of the file
	$type_of_uploaded_file = substr($name_of_uploaded_file, 
							strrpos($name_of_uploaded_file, '.') + 1);
	
	$size_of_uploaded_file = $_FILES["uploaded_file"]["size"]/1024;
	
	///------------Do Validations-------------
	if(empty($_POST['name'])||empty($_POST['email']))
	{
		$errors .= "\n Name and Email are required fields. ";	
	}
	if(IsInjected($visitor_email))
	{
		$errors .= "\n Bad email value!";
	}
	
	if($size_of_uploaded_file > $max_allowed_file_size ) 
	{
		$errors .= "\n Size of file should be less than $max_allowed_file_size";
	}
	
	//------ Validate the file extension -----
	$allowed_ext = false;
	for($i=0; $i<sizeof($allowed_extensions); $i++) 
	{ 
		if(strcasecmp($allowed_extensions[$i],$type_of_uploaded_file) == 0)
		{
			$allowed_ext = true;		
		}
	}
	
	if(!$allowed_ext)
	{
		$errors .= "\n The uploaded file is not supported file type. ".
		" Only the following file types are supported: ".implode(',',$allowed_extensions);
	}
	
	//send the email 
	if(empty($errors))
	{
		//copy the temp. uploaded file to uploads folder
		$path_of_uploaded_file = $upload_folder . $name_of_uploaded_file;
		$tmp_path = $_FILES["uploaded_file"]["tmp_name"];
		
		if(is_uploaded_file($tmp_path))
		{
		    if(!copy($tmp_path,$path_of_uploaded_file))
		    {
		    	$errors .= '\n error while copying the uploaded file';
		    }
		}
		
		//send the email
		$name = $_POST['name'];
		$visitor_email = $_POST['email'];
		$user_message = $_POST['message'];
		$to = $your_email;
		$subject="New form submission";
		$from = $your_email;
		$text = "A user  $name has sent you this message:\n $user_message";
		
		$message = new Mail_mime(); 
		$message->setTXTBody($text); 
		$message->addAttachment($path_of_uploaded_file);
		$body = $message->get();
		$extraheaders = array("From"=>$from, "Subject"=>$subject,"Reply-To"=>$visitor_email);
		$headers = $message->headers($extraheaders);
		$mail = Mail::factory("mail");
		$mail->send($to, $headers, $body);
		//redirect to 'thank-you page
		header('Location: thank-you.html');
	}
}
///////////////////////////Functions/////////////////
// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>File upload form</title>
<!-- define some style elements-->
<style>
label,a, body 
{
	font-family : Arial, Helvetica, sans-serif;
	font-size : 12px; 
}

</style>	
<!-- a helper script for vaidating the form-->
<script language="JavaScript" src="scripts/gen_validatorv31.js" type="text/javascript"></script>	
</head>

<body>
<?php
if(!empty($errors))
{
	echo nl2br($errors);
}
?>
<form method="POST" name="email_form_with_php" 
action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" enctype="multipart/form-data"> 
<p>
<label for='name'>Name: </label><br>
<input type="text" name="name" >
</p>
<p>
<label for='email'>Email: </label><br>
<input type="text" name="email" >
</p>
<p>
<label for='message'>Message:</label> <br>
<textarea name="message"></textarea>
</p>
<p>
<label for='uploaded_file'>Select A File To Upload:</label> <br>
<input type="file" name="uploaded_file">
</p>
<input type="submit" value="Submit" name='submit'>
</form>
<script language="JavaScript">
// Code for validating the form
// Visit http://www.javascript-coder.com/html-form/javascript-form-validation.phtml
// for details
var frmvalidator  = new Validator("email_form_with_php");
frmvalidator.addValidation("name","req","Please provide your name"); 
frmvalidator.addValidation("email","req","Please provide your email"); 
frmvalidator.addValidation("email","email","Please enter a valid email address"); 
</script>
<noscript>
<small><a href='http://www.html-form-guide.com/email-form/php-email-form-attachment.html'
>How to attach file to email in PHP</a> article page.</small>
</noscript>

</body>
</html>