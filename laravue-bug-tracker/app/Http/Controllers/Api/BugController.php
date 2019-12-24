<?php

namespace App\Http\Controllers\Api;

use App\Bug;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;

class BugController extends Controller
{
    public function index()
    {
        $bugs = Bug::with('project')->with('assignedTo')->orderBy('created_at', 'desc')->get();
        return response()->json($bugs, 200);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            "title" => "required|max:255",
            "project_id" => "required|numeric",
            "description" => "required",
            "browser" => "required",
            "os" => "required",
            "bug_type" => "required",
            "severity" => "string",
            "priority" => "string",
        ]);

        $bug = new Bug();
        $bug->title = $validated['title'];
        $bug->project_id = $validated['project_id'];
        $bug->user_id = Auth::user()->id;
        $bug->description = $validated['description'];
        $bug->browser = $validated['browser'];
        $bug->os = $validated['os'];
        $bug->bug_type = $validated['bug_type'];
        $bug->severity = $request->severity ? $validated['severity'] : null;
        $bug->priority = $request->priority ? $validated['priority'] : null;
        // we check if there is an image file
        if ($request->image) {

            // we validate the image
            request()->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
            $bug->image_src = URL::asset('images') . '/' . time() . '.' . $request->image->getClientOriginalExtension();
            $bug->image = time() . '.' . $request->image->getClientOriginalExtension();
            $request->image->move(public_path('images'), $bug->image);
        }
        $bug->save();
        $bug->project; // we want to return the bug with the project where the bug belongsTo
        return response()->json($bug, 201);
    }
}
