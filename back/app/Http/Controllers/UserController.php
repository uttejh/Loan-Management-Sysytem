<?php

namespace App\Http\Controllers;
// use Illuminate\Http\Request;
use Request;
use Response;
use App\Users;
use App\Post;
use App\Details;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Validation\Validator;

class UserController extends Controller
{
    public function gettransactions(){
    	$token = Request::header('JWT-AuthToken');
        $start = Request::input('start');

        $user = Users::select('uid')->where('token','=',$token)->first();

        // if($start)
        // {
        //     $value = ($start/10) - 1;
        // }else{
        //     $value = 0;
        // }
        
        

    	

    	$details = Post::select('commodityid','type','model')->where('userid','=',$user['uid'])->with('data')->take(10)->skip($start)->orderBy('commodityid','DESC')->get();
    	$id1 = Post::select('commodityid')->where('userid','=',$user['uid'])->count();
    	$id = Post::select('commodityid')->where('userid','=',$user['uid'])->get();
        // $total = Details::where('commodityid','=',$id)->count();

    	// for($i=0;$i<2;$i++)
    	// {
    	// 	$c = Details::where('commodityid','=',$id[$i]['commodityid'])->where('status','=','Overdue')->count();
    	// }
    	// return array($c,$id,$id[0]['commodityid']);
    	
    	// $completed = Details::where('commodityid','=',$id)->get();
    	// $running = Details::where('commodityid','=',$id)->where('status','=','Running')->count();
    	// $pending = Details::where('commodityid','=',$id)->where('status','=','Pending')->count();
    	// $rejected = Details::where('commodityid','=',$id)->where('status','=','Rejected')->count();
    	// $overdue = Details::where('commodityid','=',$id)->where('status','=','Overdue')->count();
    	// $all =  $running + $pending + $rejected + $overdue; //add completed


    	// return array("first"=>$details,"comp"=> $completed,"run"=> $running,"pend"=> $pending,"rej"=> $rejected,"over"=> $overdue,"all"=> $all,"id"=> $id);

    	return array("first"=> $details,"total"=> $id1);


    }

    public function getuserdata(){
        $token = Request::header('JWT-AuthToken');
        $user = Users::where('token','=',$token)->first();
        
        //md5 decrypt
        return array('username'=>$user['username'],'email'=>$user['email'],'phone'=>$user['phone']);
    }

   

    public function sendpwdmail()
    {
        $details = Request::all();
        $uid1 = Users::select('uid')->where('username','=',$details['username'])->first();
        $uid2 = Users::select('uid')->where('email','=',$details['email'])->first();


        if($uid1!==NULL && $uid1 == $uid2)
        {
            $password = Users::select('password')->where('uid','=',$uid1);
            $name = 'company name';
            $email = 'company mail';
            $subject = 'Password for your COMPANY acoount';
            $body = 'Your password for the CONPANY account is '.$password. '. If you did not request for the password, please contact our customer care service immediately. Thank You.' ; 


            $data = array('name'=>$name, 'email'=>$email, 'subject'=>$subject,'body'=>$body);
   
            Mail::send([], $data, function($message) use ($name, $email, $subject, $body)
            {
                $message->to('uttejh7@gmail.com', 'Uttejh Reddy')->subject
                    ($subject);
                $message->from($email,$name)
                ->setBody($body);
            });
            
        }
        return 'If the entered username and email matches with the given account then the password will be sent to your mail.';
    }

    public function sendrep(){
        $token = Request::header('JWT-AuthToken');
        $user = Users::where('token','=',$token)->first();

        $name = $user['username'];
        $email = $user['email'];
        $subject = 'representative request';
        $body = 'The user '.$name.' has requested for a representative';

        $data = array('name'=>$name, 'email'=>$email, 'subject'=>$subject,'body'=>$body);
       
        Mail::send([], $data, function($message) use ($name, $email, $subject, $body)
        {
            $message->to('uttejh7@gmail.com', 'Uttejh Reddy')->subject
                ($subject);
            $message->from($email,$name)
            ->setBody($body);
        });
    }
}
