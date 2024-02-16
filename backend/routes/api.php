<?php

use App\Http\Controllers\ArtworkController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('users/{user:id}', [UserController::class, 'show']);

Route::post('/login', [SessionController::class, 'store']);
Route::post('users', [UserController::class, 'store']);
Route::get('users', [UserController::class, 'index']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('user', [UserController::class, 'show']);
    Route::patch('users/{user:username}', [UserController::class, 'update']);
    Route::get('artist/{user:username}', [UserController::class, 'getartist']);

    Route::get('artworks', [ArtworkController::class, 'index']);
    Route::get('artworks/{artwork:slug}', [ArtworkController::class, 'show']);
    Route::post('artworks', [ArtworkController::class, 'store']);
    Route::patch('artworks/{artwork:slug}', [ArtworkController::class, 'update']);
    Route::delete('artworks/{artwork:slug}', [ArtworkController::class, 'destroy']);

    Route::post('/logout', [SessionController::class, 'destroy']);
});
