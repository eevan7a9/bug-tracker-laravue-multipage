<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Role;
use App\User;
use Illuminate\Http\Request;

class DeveloperController extends Controller
{
    public function store(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json("Cannot find user.", 400);
        }
        $role = Role::find(2); // get role for developer
        $user->roles()->sync($role); // attach user the role of developer
        $user->roles;
        return response()->json("Success, " . $user->email . " is now assigned as Developer.", 201);
        // return response()->json($user);
    }
}
