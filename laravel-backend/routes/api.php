<?php

use App\Http\Controllers\Api\V1\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);


Route::middleware(['auth:sanctum', 'role:admin,user'])->group(function () {

    // Route::get('/profile', []);
});

Route::middleware(['auth:sanctum', 'role:user'])->group(function () {


});

Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {


});

