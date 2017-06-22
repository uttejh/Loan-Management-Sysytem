<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Users;
use App\Http\Requests;

class Savedatactrl extends Controller
{
     public function saveuserdata(Request $details){
        $token = \Request::header('JWT-AuthToken');
        $user = Users::where('token','=',$token)->first();
       

        $username = \Request::input('username');
        $phone = \Request::input('phone');
        $email = \Request::input('email');
        $password = \Request::input('password');
        $confirmpassword = \Request::input('conpassword');
        if($username !== $user['username'])
        {
            $this->validate($details, [
                'username' => 'required|unique:users|max:255',
                
            ]);
            Users::where('token','=',$token)->update(['username'=>$username]);
        }
        if($phone !== $user['phone'])
        {
            $this->validate($details, [
                
                'phone' =>'required|numeric|digits_between:10,10',
            ]);
            Users::where('token','=',$token)->update(['phone'=>$phone]);
        }
        if($email !== $user['email'])
        {
            $this->validate($details, [
               
                'email' => 'required|unique:users|email',
                
            ]);
            Users::where('token','=',$token)->update(['email'=>$email]);
        }
        if(!empty($password))
        {
            if($password == $confirmpassword)
            {
                $this->validate($details, [
               
                    'password' =>'min:6',
                    
                ]);
                Users::where('token','=',$token)->update(['password'=>md5($password)]);
            }
            else
            {
                return "Passwords doesn't match!";
            }
        }

        // $this->validate($details, [
        //     'username' => 'required|unique:users|max:255',
        //     'email' => 'required|unique:users',
        //     'password' =>'min:6',
        //     'phone' =>'required|numeric|digits_between:10,10',
        // ]);
        return 'All the fields were successfully Modified!';
    }
}
