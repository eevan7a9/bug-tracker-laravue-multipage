<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Project;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        return response()->json("Hello");
    }
}
