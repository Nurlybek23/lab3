<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

use App\Models\Post;

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

Route::get('/user', function () {
    return \File::get(public_path(), '/index.php');
});

Route::get('post/add', function(){
    DB::table('posts')->insert([
        'title' => 'lab4',
        'body' => 'finish'
    ]);
});

Route::get('post', function(){
    $client = Client::find(1);
    return $client;
});