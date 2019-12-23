<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        return response()->json($projects, 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            "name" => "required",
            "version" => "required",
            "environment" => "required",
            "os" => "required",
            "description" => "required",
            "started" => "required|date",
            "released" => "required|date",
        ]);

        $project = new Project();
        $project->name = $validated['name'];
        $project->version = $validated['version'];
        $project->environment = $validated['environment'];
        $project->os = $validated['os'];
        $project->description = $validated['description'];
        $project->development_start = $validated['started'];
        $project->release_date = $validated['released'];
        // we check if there is an image file
        if ($request->image) {
            // we validate the image
            request()->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
            $project->image_src = URL::asset('images') . '/' . time() . '.' . $request->image->getClientOriginalExtension();
            $project->image = time() . '.' . $request->image->getClientOriginalExtension();
            $request->image->move(public_path('images'), $project->image);
        }
        $project->save();

        return response()->json($project, 201);
    }

}
