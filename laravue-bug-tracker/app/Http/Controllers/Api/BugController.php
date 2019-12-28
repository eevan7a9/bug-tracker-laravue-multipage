<?php

namespace App\Http\Controllers\Api;

use App\Bug;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
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
            "developer" => "numeric",
        ]);

        $bug = new Bug();
        $bug->title = $validated['title'];
        $bug->project_id = $validated['project_id'];
        $bug->user_id = Auth::user()->id;
        $bug->description = $validated['description'];
        $bug->browser = $validated['browser'];
        $bug->os = $validated['os'];
        $bug->bug_type = $validated['bug_type'];
        $bug->severity = $validated['severity'] === "undefined" ? "undefined" : $validated['severity'];
        $bug->priority = $validated['priority'] === "undefined" ? "undefined" : $validated['priority'];
        $bug->assigned_to = $validated['developer'] ? $validated["developer"] : null;

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
        $bug->project; // return the bug with the project the bug belongsTo
        $bug->assignedTo; // return the bug with the developer the assigned to the bug

        return response()->json($bug, 201);
    }

    public function show($id)
    {
        $bug = Bug::with('project')->with('addedBy')->with('assignedTo')->findOrFail($id);
        return response()->json($bug, 200);
    }

    public function update(Request $request, $id)
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
            "developer" => "numeric",
        ]);

        $bug = Bug::findOrFail($id);
        $bug->title = $validated['title'];
        $bug->project_id = $validated['project_id'];
        $bug->user_id = Auth::user()->id;
        $bug->description = $validated['description'];
        $bug->browser = $validated['browser'];
        $bug->os = $validated['os'];
        $bug->bug_type = $validated['bug_type'];
        $bug->severity = $validated['severity'] === "undefined" ? "undefined" : $validated['severity'];
        $bug->priority = $validated['priority'] === "undefined" ? "undefined" : $validated['priority'];
        $bug->assigned_to = $validated['developer'] ? $validated["developer"] : null;

        // we check if there is an image file
        if ($request->image) {

            // we validate the image
            request()->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            // If validation is correct we delete the old image
            if (file_exists(public_path('images/' . $bug->image))) {
                File::delete(public_path('images/' . $bug->image));
                // unlink(public_path('images/' . $product->image));
            }

            $bug->image_src = URL::asset('images') . '/' . time() . '.' . $request->image->getClientOriginalExtension();
            $bug->image = time() . '.' . $request->image->getClientOriginalExtension();
            $request->image->move(public_path('images'), $bug->image);
        }
        $bug->update();
        $bug->project; // return the bug with the project the bug belongsTo
        $bug->assignedTo; // return the bug with the developer the assigned to the bug
        $bug->addedBy;
        return response()->json($bug, 201);
    }
    public function changeStatus($id)
    {
        $bug = Bug::with('project')->with('addedBy')->with('assignedTo')->findOrFail($id);
        $bug->is_fixed = !$bug->is_fixed;
        $bug->fixed_at = date('Y-m-d H:i:s');

        $bug->update();

        return response()->json($bug, 201);
    }
}
