<?php

namespace App\Http\Controllers;

use Request;
use Response;
use App\Users;
use Mail;

class MailController extends Controller
{
    public function basic_email(){
    	$request = Request::all();

    	$name = $request['user'];
    	$email = $request['email'];
    	$subject = $request['subject'];
    	$body = $request['body']; 

      $data = array('name'=>$name, 'email'=>$email, 'subject'=>$subject,'body'=>$body);
   
      Mail::send([], $data, function($message) use ($name, $email, $subject, $body)
      {
         $message->to('uttejh7@gmail.com', 'Uttejh Reddy')->subject
            ($subject);
         $message->from($email,$name)
         ->setBody($body);
      });
      return "Your message has been recieved. We will check into it and contact you within 24 hours.";
   }
}
