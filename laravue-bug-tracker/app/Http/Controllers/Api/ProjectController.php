<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
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
    public function show($id)
    {
        $project = Project::with('bugs')->findOrFail($id);
        return response()->json($project, 200);
    }

    public function update(Request $request, $id)
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

        $project = Project::findOrFail($id);

        $project->name != $validated['name'] ? $project->name = $validated['name'] : '';
        $project->version != $validated['version'] ? $project->version = $validated['version'] : '';
        $project->environment != $validated['environment'] ? $project->environment = $validated['environment'] : '';
        $project->os != $validated['os'] ? $project->os = $validated['os'] : '';
        $project->description != $validated['description'] ? $project->description = $validated['description'] : '';
        $project->development_start != $validated['started'] ? $project->development_start = $validated['started'] : '';
        $project->release_date != $validated['released'] ? $project->release_date = $validated['released'] : '';

        // we check if there is an image file
        if ($request->image) {
            // we validate the image
            request()->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
            // If validation is correct we delete the old image
            if (file_exists(public_path('images/' . $project->image))) {
                File::delete(public_path('images/' . $project->image));
                // unlink(public_path('images/' . $product->image));
            }
            $project->image_src = URL::asset('images') . '/' . time() . '.' . $request->image->getClientOriginalExtension();
            $project->image = time() . '.' . $request->image->getClientOriginalExtension();
            $request->image->move(public_path('images'), $project->image);
        }
        $project->update();

        return response()->json($project, 200);
    }

}
