<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    protected $table="users";

    public function posts()
    {
    	return $this->hasMany('App\Post','userid','uid');
    }
}
