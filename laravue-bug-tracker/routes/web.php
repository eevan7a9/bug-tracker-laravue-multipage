<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/profile', function () {
    return view('profile');
})->name('profile');
Route::get('/app', function () {
    return view('app');
})->name('app');
Route::get('/app/{any}', 'AppController@index')->where('any', '.*');
