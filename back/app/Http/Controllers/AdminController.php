<?php

namespace App\Http\Controllers;

use Request;
use Response;
use App\Users;
use App\Post;
use App\Details;
use Illuminate\Database\Eloquent\Model;

class AdminController extends Controller
{
    public function getproducts()
    {
        $token = Request::header('JWT-AuthToken');
        $admintoken = Users::select('token')->where('userrole','=',1)->first();

        if($token == $admintoken['token'])
        {
            $start = Request::input('start');
            $products = Post::with(array('user'=>function($query){
                $query->select('uid','username','phone','email');
            }))->with('data')->take(10)->skip($start)->orderBy('commodityid','DESC')->get();

            $all = Post::count();

            return array("first"=> $products,"total"=> $all);
        }
        else
        {
            return("SORRY! Something looks wrong.");
        }


       
    }

    public function getnumber()
    {
        $token = Request::header('JWT-AuthToken');
        $admintoken = Users::select('token')->where('userrole','=',1)->first();

        if($token == $admintoken['token'])
        {
            $all = Post::count();
            $completed = Details::where('status','=','Completed')->count();
            $running = Details::where('status','=','Running')->count();
            $pending = Details::where('status','=','Pending')->count();
            $rejected = Details::where('status','=','Rejected')->count();
            $overdue = Details::where('status','=','Overdue')->count();

            return array($all,$completed,$running,$pending,$rejected,$overdue);
        }
        else
        {
            return("SORRY! Something looks wrong.");
        }
    	
    }

 //    public function setdetails()
 //    {
    	
 //    	$details = Request::input('details');
 //    	$itemid = Request::input('itemid');

 //    	$amount = $details['amount'];
 //    	$from = Request::input('from');
 //    	$to = Request::input('to');
 //    	$status = $details['status'];

 //    	$detail = new Details;

 //    	$detail->status = $status;
 //    	$detail->from = $from;
 //    	$detail->to = $to;
 //    	$detail->amount = $amount;
 //    	$detail->commodityid = $itemid;

 //    	$detail->save();

 //    	return 'The Values Were Set.';

	// }

	public function updatedetails()
	{
        $token = Request::header('JWT-AuthToken');
        $admintoken = Users::select('token')->where('userrole','=',1)->first();

        if($token == $admintoken['token'])
        {
            $status = Request::input('details1');
            $amount = Request::input('details2');
            $id = Request::input('id');
            $from = Request::input('from');
            $to = Request::input('to');

            Details::where('commodityid','=',$id)
                ->update([
                'status' => $status,
                'from' => $from,
                'to' => $to,
                'amount' => $amount
                ]);

            return 'The Details were Successfully Updated.';
        }
        else
        {
            return("SORRY! Something looks wrong.".$token);
        }
		
	}

    // public function getdet()
    // {
    //     $token = Request::header('JWT-AuthToken');

    //     $admintoken = Users::select('token')->where('userrole','=',1)->first();

    //     if($token == $admintoken['token'])
    //     {
            
    //     }
    // }
}
