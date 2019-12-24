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
    Route::get('bugs', 'Api\BugController@index')->name('bugs.all');
    Route::get('projects', 'Api\ProjectController@index')->name('projects.all');
    Route::get('developers', 'Api\DeveloperController@index')->name('developers.all');

    Route::group(['middleware' => ['auth:web']], function () {
        Route::post('bugs', 'Api\BugController@store')->name('bugs.store');
        Route::post('projects', 'Api\ProjectController@store')->name('projects.store');
        Route::post('developer', 'Api\DeveloperController@store')->name('developer.store');

    });
});
