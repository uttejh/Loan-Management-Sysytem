<?php

namespace App\Http\Controllers;

use Request;
use Response;
use App\Users;
use App\Post;
Use App\Details;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Input;

class PostController extends Controller
{
    public function store(){
    	
    	$date=Carbon::now();
 		$rand =mt_rand(0, $date->timestamp);
 		$destination_path="uploads";

    	$file=Request::file('file');
		$filesize = $file->getSize();
		$fileext = $file->getClientOriginalExtension();

		$token=Request::header('JWT-AuthToken');
		$user = Users::where('token','=',$token)->pluck('uid');
		// $userid = $user->uid;
		// return $user[0];

		$details = Request::all();
		$year = $details['year'];
		$exp = $details['exp'];
		$model = $details['model'];
		$desc = $details['desc'];
		$tenure = $details['tenure'];
		$type = $details['type'];
		$othertype = $details['other'];

		$filename=$date->timestamp.$rand.'.'.$fileext;
		if($filesize>50971529)
		{
			$out=array(0,"File size too big");
		}
		else
		{
			$up=$file->move($destination_path,$filename);
			if($up)
			{
				$post = new Post;
				$filep = 'uploads/'.$filename;
				$post->filepath = 'uploads/'.$filename;
				if($type == "other")
				{
					$post->type = $othertype;
				}
				else
				{
					$post->type = $type;
				}
				$post->model = $model;
				$post->year = $year;
				$post->amountexpected = $exp;
				$post->tenure = $tenure;
				$post->description = $desc;
				$post->userid=$user[0];
				$post->save();

				$currentid = $post->id;
				
				$Dummydetails = new Details;

				$Dummydetails->from = $date;
				$Dummydetails->to = $date;
				$Dummydetails->status = "Pending";
				$Dummydetails->amount = 0;
				$Dummydetails->commodityid = $currentid;

				$Dummydetails->save();
				// var_dump($something);


				$out=array(1,'uploads/'.$filename);
			}
			else
			{
				$out=array(0,"Error uploading file");
			}
		}
		return $out;
    }
}
