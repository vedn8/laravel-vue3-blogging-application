<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterFormRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
                            'email' => ['required', 'email'],
                            'password' => ['required'],
                        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return response()->json([
                'message' => 'Logged in successfully',
                'status' => 'success',
                'status_code' => 200
            ], 200);
        }

        return response()->json([
            'message' => 'The provided credentials do not match our records.',
            'status' => 'error',
            'status_code' => 422
        ], 422);
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
                'message' => 'Logged out successfully',
                'status' => 'success',
                'status_code' => 200
            ], 200);
    }

    public function register(RegisterFormRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'Registration successful.',
            'data' => new UserResource($user),
        ], 201);
    }
}
