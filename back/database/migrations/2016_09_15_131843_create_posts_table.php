<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::table('posts', function (Blueprint $table) {
        //     //
        // });
        Schema::create('posts', function(Blueprint $table)
        {
            $table->increments('postid');
            $table->string('type');
            $table->string('model');
            $table->string('year');
            $table->string('amountexpected');
            $table->string('tenure');
            $table->text('description');
            $table->string('filePath');
            $table->foreign('postid')->references('uid')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::table('posts', function (Blueprint $table) {
        //     //
        // });
        Schema::drop('posts');
    }
}
