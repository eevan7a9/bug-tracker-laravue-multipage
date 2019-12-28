<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BugSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bugs')->insert([
            "title" => "Navbar not responding",
            "project_id" => "1",
            "user_id" => "1",
            "description" => "Navbar not responding after buing is complete",
            "browser" => "Firefox",
            "os" => "Mac Os",
            "bug_type" => "New Feature",
            "severity" => "mid",
            "priority" => "high",
            "assigned_to" => "4",
            "is_fixed" => 1,
            "fixed_at" => now(),
            "created_at" => "2019-12-22 22:49:07",
            "updated_at" => now(),
        ]);

        DB::table('bugs')->insert([
            "title" => "Not Responding checkout",
            "project_id" => "2",
            "user_id" => "2",
            "description" => "when trying to cancel, After checking out the books the screen crashed",
            "browser" => "Opera",
            "os" => "Windows 8",
            "bug_type" => "Functional Bugs",
            "severity" => "low",
            "priority" => "high",
            "assigned_to" => "5",
            "is_fixed" => 0,
            "fixed_at" => null,
            "created_at" => "2019-12-22 22:49:07",
            "updated_at" => now(),
        ]);

        DB::table('bugs')->insert([
            "title" => "Error 500, when editing a Survey Answer",
            "project_id" => "2",
            "user_id" => "2",
            "description" => "Survey question have wrong choices, After editing and clicking \"save\" error 500 show",
            "browser" => "Opera",
            "os" => "Windows 8",
            "bug_type" => "Functional Bugs",
            "severity" => "low",
            "priority" => "high",
            "assigned_to" => "5",
            "is_fixed" => 0,
            "fixed_at" => null,
            "created_at" => "2019-12-22 22:49:07",
            "updated_at" => now(),
        ]);

        DB::table('bugs')->insert([
            "title" => "Infinit loading after unliking and liking a post",
            "project_id" => "1",
            "user_id" => "1",
            "description" => "When toggle to unlike a post and like it again mouse cursor becomes loading Infinitly",
            "browser" => "Opera",
            "os" => "Windows 10",
            "bug_type" => "Functional Bugs",
            "severity" => "undefined",
            "priority" => "undefined",
            "assigned_to" => null,
            "is_fixed" => 0,
            "fixed_at" => null,
            "created_at" => now(),
            "updated_at" => now(),
        ]);

    }
}
