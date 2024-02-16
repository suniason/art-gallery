<?php

namespace App\Http\Controllers;

use App\Models\Artwork;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class ArtworkController extends Controller
{
    public function index()
    {
        return Artwork::with('user')->get();
    }

    public function show(Artwork $artwork)
    {
        return Artwork::with('user')->findOrFail($artwork->id);
    }


    public function store()
    {
        $user_id = Auth::id();

        $attributes = request()->validate([
            'name' => ['required', 'max:255', 'unique:artworks,name'],
            'description' => 'required',
            'image' => 'required',
        ]);
        $attributes['user_id'] = $user_id;
        $attributes['slug'] = str_replace(' ', '-', strtolower($attributes['name']));

        $artwork = Artwork::create($attributes);

        return response()->json(['artwork' => $artwork], 200);
    }

    public function update(Artwork $artwork)
    {
        $attributes = request()->validate([
            'name' => ['required', 'max:255', 'unique:artworks,name'],
            'description' => 'required',
            'image' => 'required',
        ]);

        $attributes['slug'] = str_replace(' ', '-', strtolower($attributes['name']));

        $artwork->update($attributes);

        return response()->json(['message' => 'Artwork Updated Successfully.'], 200);
    }

    public function destroy(Artwork $artwork)
    {
        $artwork->delete();
        return response()->json(['message' => 'Artwork Deleted Successfully.'], 200);
    }
}
