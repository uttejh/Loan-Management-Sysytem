<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommodityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('commodity', function(Blueprint $table)
        {
            $table->increments('commodityid');
            $table->string('type');
            $table->string('model');
            $table->string('year');
            $table->string('amountexpected');
            $table->string('tenure');
            $table->text('description');
            $table->string('filePath');
            $table->integer('userid')->unsigned();
            $table->foreign('userid')->references('uid')->on('users');
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
        Schema::drop('commodity');
    }
}
