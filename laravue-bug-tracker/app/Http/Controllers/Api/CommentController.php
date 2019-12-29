<?php

namespace App\Http\Controllers\Api;

use App\Comment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            "message" => "required",
        ]);

        $comment = new Comment();
        $comment->user_id = Auth::user()->id;
        $comment->bug_id = $request->bug_id;
        $comment->message = $request->message;

        $comment->save();
        $comment->user;

        return response()->json($comment, 201);
    }

    public function destroy($id)
    {
        $comment = Comment::findOrFail($id);
        $comment->delete();

        return response()->json("success", 200);
    }
}
