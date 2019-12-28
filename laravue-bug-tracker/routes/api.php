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
    Route::get('bugs/{id}', 'Api\BugController@show')->name('bugs.show');

    Route::get('projects', 'Api\ProjectController@index')->name('projects.all');
    Route::get('projects/{id}', 'Api\ProjectController@show')->name('project.show');

    Route::get('developers', 'Api\DeveloperController@index')->name('developers.all');
    Route::get('developers/{id}', 'Api\DeveloperController@show')->name('developers.show');

    Route::group(['middleware' => ['auth:web']], function () {
        Route::post('bugs', 'Api\BugController@store')->name('bugs.store');
        Route::post('bugs/{id}', 'Api\BugController@update')->name('bugs.update');
        Route::post('bugs/status/{id}', 'Api\BugController@changeStatus')->name('bugs.changeStatus');

        Route::post('projects', 'Api\ProjectController@store')->name('projects.store');
        Route::post('projects/{id}', 'Api\ProjectController@update')->name('projects.update');

        Route::post('developer', 'Api\DeveloperController@store')->name('developer.store');

    });
});
