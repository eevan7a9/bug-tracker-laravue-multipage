<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|

/--------------------------------------------------------------------------
| api_web_session Routes
|--------------------------------------------------------------------------
|
| Here  use web sessiom with Api in your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group.
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

    Route::get('testers', 'Api\TesterController@index')->name('testers.all');
    Route::get('testers/{id}', 'Api\TesterController@show')->name('testers.show');

    Route::group(['middleware' => ['auth:web']], function () {
        Route::post('bugs', 'Api\BugController@store')->middleware('role:tester,admin')->name('bugs.store');
        Route::post('bugs/{id}', 'Api\BugController@update')->middleware('role:tester,admin')->name('bugs.update');
        Route::post('bugs/status/{id}', 'Api\BugController@changeStatus')->middleware('role:developer,admin')->name('bugs.changeStatus');
        Route::delete('bugs/{id}', 'Api\BugController@destroy')->middleware('role:tester,admin')->name('bugs.destroy');

        Route::post('projects', 'Api\ProjectController@store')->middleware('role:developer,admin')->name('projects.store');
        Route::post('projects/{id}', 'Api\ProjectController@update')->middleware('role:developer,admin')->name('projects.update');

        Route::post('developer', 'Api\DeveloperController@store')->middleware('role:admin')->name('developer.store');

        Route::post('testers', 'Api\TesterController@store')->middleware('role:admin')->name('testers.store');

        Route::post('comments', 'Api\CommentController@store')->name('comment.store');
        Route::delete('comments/{id}', 'Api\CommentController@destroy')->name('comment.destroy');

        Route::get('user', function () {
            $user = Auth::user();
            $user->roles;
            return response()->json($user, 200);
        });

    });
});
