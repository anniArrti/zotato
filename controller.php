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
				$sql = "SELECT * FROM product";

				if($result = mysqli_query($con,$sql))
				{
				  $cr = 0;
				  while($row = mysqli_fetch_assoc($result))
				  {
				    $cars[$cr]['id']    = $row['id'];
				    $cars[$cr]['product'] = $row['pdoduct'];
				    $cars[$cr]['cost'] = $row['cost'];
				    $cr++;
				  }
				    
				  echo json_encode(['data'=>$cars]);
				}
				else
				{
				  http_response_code(404);
				}
        	break;
        	case "getbyid":
        		$id = mysqli_real_escape_string($con, trim($request->form->id));
        		$cars = [];
				$sql = "SELECT * FROM product where id=".$id;

				if($result = mysqli_query($con,$sql))
				{
				  $cr = 0;
				  while($row = mysqli_fetch_assoc($result))
				  {
				    $cars[$cr]['id']    = $row['id'];
				    $cars[$cr]['product'] = $row['pdoduct'];
				    $cars[$cr]['cost'] = $row['cost'];
				    $cars[$cr]['name'] = $row['name'];
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
?>