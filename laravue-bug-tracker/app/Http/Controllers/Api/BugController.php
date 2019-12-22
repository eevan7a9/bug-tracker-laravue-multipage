<?php

namespace App\Http\Controllers\Api;

use App\Bug;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BugController extends Controller
{
    public function index()
    {
        // $bugs = Bug::all();
        return response()->json("bugs", 200);
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
        $bug->save();

        return response()->json($bug, 201);
    }
}
