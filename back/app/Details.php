<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Details extends Model
{
    protected $table = 'details';
 
 	public function details()
    {
        return $this->belongsTo('App\Post','commodityid','commodityid');
    }
}
