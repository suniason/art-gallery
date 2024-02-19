<?php

namespace App\Http\Controllers;

use App\Models\Artwork;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;


class ArtworkController extends Controller
{
    public function index()
    {
        return Artwork::with('user')->get();
    }

    public function show(Artwork $artwork)
    {
        try {
            $artworkWithUser = Artwork::with('user')->findOrFail($artwork->id);
            return response()->json($artworkWithUser, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Artwork not found.'], 404);
        }
    }


    public function store()
    {
        try {

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
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function update(Artwork $artwork)
    {
        try {
            if (!$this->checkOwnership($artwork)) {
                return response()->json(['error' => 'Unauthorized. You are not the owner of this artwork.'], 403);
            }

            $attributes = request()->validate([
                'description' => 'required',
            ]);

            $artwork->update($attributes);

            return response()->json(['message' => 'Artwork Updated Successfully.'], 200);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Artwork not found.'], 404);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function destroy(Artwork $artwork)
    {
        try {
            if (!$this->checkOwnership($artwork)) {
                return response()->json(['error' => 'Unauthorized. You are not the owner of this artwork.'], 403);
            }
            $artwork->delete();
            return response()->json(['message' => 'Artwork Deleted Successfully.'], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Artwork not found.'], 404);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    protected function checkOwnership(Artwork $artwork)
    {
        $user = Auth::user();
        return $user->id === $artwork->user_id;
    }
}
