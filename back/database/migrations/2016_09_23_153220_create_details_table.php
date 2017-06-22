<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('details', function(Blueprint $table)
        {
            $table->increments('detailsid');
            $table->date('from');
            $table->date('to');
            $table->string('status');
            $table->string('amount');

            $table->integer('commodityid')->unsigned()->unique();
            $table->foreign('commodityid')->references('commodityid')->on('commodity');
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
        //
    }
}
