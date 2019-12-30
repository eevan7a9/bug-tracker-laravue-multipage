<?php

namespace App\Http\Middleware;

use App\User;
use Closure;
use Illuminate\Support\Facades\Auth;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, ...$roles)
    {

        $user = User::find(Auth::user()->id);

        foreach ($roles as $role) {
            // Check if user has the role This check will depend on how your roles are set up
            if ($user->hasAnyRole($role)) {
                return $next($request);
            }
        }
        return response()->json('This action is unauthorized.', 401);

    }
}
