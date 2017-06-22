<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::post('/register','RegisterCtrl@register');

Route::post('/login','LoginCtrl@login');

Route::post('/uploadpost','PostController@store');

Route::post('/contactemail','MailController@basic_email');

Route::get('/getproducts','AdminController@getproducts');

Route::get('/getnumbers','AdminController@getnumber');

Route::get('/getuserdata','UserController@getuserdata');

Route::post('/saveuserdata','Savedatactrl@saveuserdata');

// Route::post('/setdetails','AdminController@setdetails');

Route::post('/updatedetails','AdminController@updatedetails');

Route::get('/getusertransactions','UserController@gettransactions');

Route::post('/sendforgpwdmail','UserController@sendpwdmail');

Route::get('/sendrep','UserController@sendrep');

// Route::get('/getdet','AdminController@getdet');
