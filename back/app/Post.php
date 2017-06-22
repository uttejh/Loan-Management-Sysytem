<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'commodity';
    // protected $fillable = [
    //     'type',
    //     'description',
    //     'model',
    //     'year',
    //     'amountexpected',
    //     'tenure',
    //     'filePath',
    //     'image'
    // ];

    public function user()
    {
        return $this->belongsTo('App\Users','userid','uid');
    }

    public function data()
    {
        return $this->hasOne('App\Details','commodityid','commodityid');
    }
}
