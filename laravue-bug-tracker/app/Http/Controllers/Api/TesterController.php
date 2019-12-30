<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Role;
use App\User;
use Illuminate\Http\Request;

class TesterController extends Controller
{
    public function index()
    {
        $role_name = "tester";
        $testers = User::with('bugsAdded')->whereHas('roles', function ($q) use ($role_name) {
            $q->where('name', $role_name);
        })->get();

        return response()->json($testers, 200);
    }

    public function store(Request $request)
    {
        $user = User::with('bugsAdded')->where('email', $request->email)->first();
        if (!$user) {
            return response()->json("Cannot find user.", 400);
        }
        // $role = Role::find(1); // get role for tester
        $role = Role::where('name', 'tester')->first();

        if (!$role) {
            return response()->json("error", 400);
        }

        $user->roles()->sync($role); // attach user the role of tester
        $user->roles;
        return response()->json($user, 201);
        // return response()->json($user);
    }

    public function show($id)
    {
        $tester = User::with('bugsAdded')->with('roles')->findOrFail($id);
        return response()->json($tester, 200);
    }
}
