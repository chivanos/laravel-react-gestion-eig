<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\DGController;
use App\Http\Controllers\API\DWController;
use App\Http\Controllers\API\WDController;
use App\Http\Controllers\API\MCVController;
use App\Http\Controllers\PDF\EmploiContoller;
use App\Http\Controllers\PDF\BulletinContoller;
use App\Http\Controllers\PDF\CalendrierContoller;
use App\Http\Controllers\User\RegisterController;

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


Route::post('/designgraphique/register', [DGController::class, 'store']);
Route::post('/developpementweb/register', [DWController::class, 'store']);
Route::post('/montagecadragevideo/register', [MCVController::class, 'store']);
Route::post('/designeweb/register', [WDController::class, 'store']);

Route::post('/registered', [RegisterController::class, 'register']);
// //------------------------------------------------------------------------------------------

Route::get('/create-pdf-bulletin', [BulletinContoller::class, 'index']);
Route::get('/create-pdf-calendrier', [CalendrierContoller::class, 'index']);
Route::get('/create-pdf-emploie', [EmploiContoller::class, 'pdf']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
