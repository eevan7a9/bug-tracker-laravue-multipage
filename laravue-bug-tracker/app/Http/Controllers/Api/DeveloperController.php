<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Role;
use App\User;
use Illuminate\Http\Request;

class DeveloperController extends Controller
{
    public function index()
    {
        $role_name = "developer";
        $developers = User::with('bugsAssigned')->whereHas('roles', function ($q) use ($role_name) {
            $q->where('name', $role_name);
        })->get();

        return response()->json($developers, 200);
    }

    public function store(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json("Cannot find user.", 400);
        }
        $role = Role::find(2); // get role for developer
        $user->roles()->sync($role); // attach user the role of developer
        $user->roles;
        return response()->json($user, 201);
        // return response()->json($user);
    }
}
