<?php

namespace App\Http\Controllers;

// use Request;
use Illuminate\Http\Request;
use Response;
use App\Users;
use Illuminate\Database\Eloquent\Model;
use App\Http\Middleware\VerifyCsrfToken;
use Illuminate\Contracts\Validation\Validator;


class RegisterCtrl extends Controller
{
    public function register(Request $details)
    {
    	// $details=Request::all();
    	$this->validate($details, [
	        'username' => 'required|unique:users|max:255',
	        'email' => 'required|unique:users',
	        'password' =>'required',
	        'phone' =>'required|numeric',
	    ]);

		$username = Request::input('username');
		// $email = $details['email'];
		// $phone = $details['phone'];
		// $pass = $details['password'];
		// $conpass = $details['confirmpassword'];
		


		return $username;
    }
}
