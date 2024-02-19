<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\QueryException;

class UserController extends Controller
{
    public function index()
    {
        try {
            $users = User::all();
            return response()->json($users);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function show()
    {
        try {
            $user = auth()->user();

            if (!$user) {
                return response()->json(['error' => 'Unauthorized. User not authenticated.'], 401);
            }

            $artwork = $user->artwork;

            return response()->json([
                'user' => $user,
                'artwork' => $artwork,
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'User not found.'], 404);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function store()
    {
        try {
            $attributes = request()->validate([
                'name' => ['required', 'max:255'],
                'username' => ['required', 'min:3', 'max:255', 'unique:users,username'],
                'email' => ['required', 'email', 'unique:users,email'],
                'password' => ['required', 'min:7'],
                'profile' => 'required',
                'contact' => ['required', 'max:15'],
                'photo' => 'required',
            ]);

            $user = User::create($attributes);

            return response()->json(["user" => $user], 200);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (QueryException $e) {
            return response()->json(['error' => 'Database constraint violation.'], 400);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function update(User $user)
    {
        try {
            $attributes = request()->validate([
                'name' => ['required', 'max:255'],
                'username' => ['required', 'min:3', 'max:255', Rule::unique('users', 'username')->ignore($user)],
                'email' => ['required', 'email', Rule::unique('users', 'email')->ignore($user)],
                'profile' => 'required',
                'contact' => ['required', 'max:15'],
                'photo' => 'required',
            ]);

            $user->update($attributes);

            return response()->json(['message' => 'User Updated Successfully.'], 200);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (QueryException $e) {
            return response()->json(['error' => 'Database constraint violation.'], 400);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function getartist(User $user)
    {
        try {
            $userWithArtworks = User::with('artwork')->findOrFail($user->id);
            return response()->json($userWithArtworks, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'User not found.'], 404);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
}
