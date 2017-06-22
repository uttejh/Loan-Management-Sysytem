<?php

namespace App\Http\Controllers;

use Request;
use Response;
use App\Users;
use Illuminate\Database\Eloquent\Model;

class LoginCtrl extends Controller
{
    public function login()
    {
    	$detalis = Request::all();

    	$username = $detalis['username'];
    	$password = md5($detalis['logpassword']);

    	$usercount = Users::where('username','=',$username)->where('password','=',$password)->count();

    	if($usercount == 1)
    	{
    		$user = Users::where('username','=',$username)->where('password','=',$password)->first();
    		// $token = Users::select('token')->where('username','=',$username)->where('password','=',$password)->get();

    		return array('statusCode'=>'202','message'=>$user->token,'userrole'=>$user->userrole,'username'=>$user->username); //,'userrole'=>$user->role,'name'=>$user->userdesc
    	
    	}
    	else
    	{
    		$userdat=Users::where('username','=',$detalis['username'])->count();
			if($userdat==1)
			{
				return array('statusCode'=>'401','message'=>'Wrong Password');
			}
			else
			{
				//return $userdata;
				return array('statusCode'=>'401','message'=>'Invalid Username');
			}
    	}
    	
    }
}
