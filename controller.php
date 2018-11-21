<?php
	require 'connect.php';

    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata))
	{
	  // Extract the data.
	  	$request = json_decode($postdata);
	 	$function = mysqli_real_escape_string($con, trim($request->form->functions));

	    switch ($function) {
    		case "login":
    			$email = mysqli_real_escape_string($con, trim($request->form->email));
	 			$password = mysqli_real_escape_string($con, trim($request->form->password));
        		$sql = "INSERT INTO `admin`(`id`,`email`,`password`) VALUES (null,'{$email}','{$password}')";

				  if(mysqli_query($con,$sql))
				  {
				    http_response_code(201);
				    $data = [
				      'email' => $email,
				      'password' => $password,
				      'id'    => mysqli_insert_id($con)
				    ];
				    echo json_encode(['data'=>$data]);
				  }
				  else
				  {
				    http_response_code(422);
				  }
        	break;
    		case "register":
        		echo "Your favorite color is blue!";
        	break;
    		case "contact":
    			$name = mysqli_real_escape_string($con, trim($request->form->name));
			 	$email = mysqli_real_escape_string($con, trim($request->form->email));
			 	$subject = mysqli_real_escape_string($con, trim($request->form->subject));
			 	$message = mysqli_real_escape_string($con, trim($request->form->message));
        		$sql = "INSERT INTO `contact`(`id`,`name`,`email`,`subject`,`message`) VALUES (null,'{$name}','{$email}','{$subject}','{$message}')";

				  if(mysqli_query($con,$sql))
				  {
				    http_response_code(201);
				    $data = [
				      'name' => $name,
				      'subject' => $subject,
				      'email' => $email,
				      'message' => $message,
				      'id'    => mysqli_insert_id($con)
				    ];
				    echo json_encode(['data'=>$data]);
				  }
				  else
				  {
				    http_response_code(422);
				  }
        	break;
        	case "getall":
        		$cars = [];
				$sql = "SELECT id, name, email FROM contact";

				if($result = mysqli_query($con,$sql))
				{
				  $cr = 0;
				  while($row = mysqli_fetch_assoc($result))
				  {
				    $cars[$cr]['id']    = $row['id'];
				    $cars[$cr]['name'] = $row['name'];
				    $cars[$cr]['email'] = $row['email'];
				    $cr++;
				  }
				    
				  echo json_encode(['data'=>$cars]);
				}
				else
				{
				  http_response_code(404);
				}
        	break;
    		default:
        	echo "function not defined";
		}
    } 
    /*$email = $_POST["email"];
	$password = $_POST["password"];
	$name = $_POST["name"];
	$age = $_POST["age"];

	$address = $_POST["address"];
	$gender = $_POST["r1"];
	$country = $_POST["country"];
	$state = $_POST["state"];
	$image = basename($_FILES["file"]["name"]);*/
	/*$query="INSERT INTO `angularform`( `name`, `email`, `age`, `image`, `address`, `gender`, `country`, `state`) VALUES ('$name','$email','$age','$image','$address','$gender','$country','$state')";
	echo $query;*/
?>