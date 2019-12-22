<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function () {

    Route::group(['middleware' => ['auth:web']], function () {
        Route::get('projects', 'Api\ProjectController@index')->name('projects.all');
        Route::post('projects', 'Api\ProjectController@store')->name('projects.store');
    });
});
