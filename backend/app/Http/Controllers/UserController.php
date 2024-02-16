<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function show()
    {
        $user = auth()->user();

        $artwork = $user->artwork;

        return response()->json([
            'user' => $user,
            'artwork' => $artwork,
        ]);
    }

    public function store()
    {
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
    }

    public function update(User $user)
    {
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
    }

    public function getartist(User $user)
    {
        return User::with('artwork')->findOrFail($user->id);
    }
}
