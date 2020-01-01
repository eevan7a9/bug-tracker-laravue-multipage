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
            "id" => 1,
            "title" => "Navbar not responding",
            "project_id" => "3",
            "user_id" => "1",
            "description" => "Navbar not responding after borrowing is complete",
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
            "id" => 2,
            "title" => "Not Responding checkout",
            "project_id" => "1",
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
            "id" => 3,
            "title" => "Error 500, when editing a Survey Answer",
            "project_id" => "5",
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
            "id" => 4,
            "title" => "Infinit loading after unliking and liking a post",
            "project_id" => "4",
            "user_id" => "1",
            "description" => "When toggle to unlike a post and like it again mouse cursor becomes loading Infinitly",
            "browser" => "Safari",
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

        DB::table('bugs')->insert([
            "id" => 5,
            "title" => "Checking out not redirecting to checkout page",
            "project_id" => "1",
            "user_id" => "1",
            "description" => "After buying and selecting products and making sure the cart is not empty, checking out is not working",
            "browser" => "Opera",
            "os" => "Windows 10",
            "bug_type" => "Functional Bugs",
            "severity" => "high",
            "priority" => "high",
            "assigned_to" => "4",
            "is_fixed" => 1,
            "fixed_at" => "2019-11-23",
            "created_at" => "2019-11-22 22:49:07",
            "updated_at" => "2019-11-23 1:49:07",
        ]);

        DB::table('bugs')->insert([
            "id" => 6,
            "title" => "Checking out not showing confirmation page",
            "project_id" => "1",
            "user_id" => "1",
            "description" => "After buying and selecting products and making sure the cart is not empty, checking out confirmation page is not working",
            "browser" => "Opera",
            "os" => "Windows 10",
            "bug_type" => "Functional Bugs",
            "severity" => "high",
            "priority" => "high",
            "assigned_to" => "4",
            "is_fixed" => 1,
            "fixed_at" => "2019-11-23",
            "created_at" => "2019-11-22 22:49:07",
            "updated_at" => "2019-11-23 1:49:07",
        ]);

        DB::table('bugs')->insert([
            "id" => 7,
            "title" => "Submit comment is not responding after Editing 2nd time",
            "project_id" => "4",
            "user_id" => "1",
            "description" => "Editing the comment and submit comment works on the first try, but when editing for 2ndtime submit button not responding",
            "browser" => "Firefox",
            "os" => "Windows 8",
            "bug_type" => "Functional Bugs",
            "severity" => "high",
            "priority" => "mid",
            "assigned_to" => "6",
            "is_fixed" => 1,
            "fixed_at" => "2019-12-15",
            "created_at" => "2019-11-13 04:55:45",
            "updated_at" => "2019-12-15 1:49:07",
        ]);

        DB::table('bugs')->insert([
            "id" => 8,
            "title" => "Submit comment is not showing confirmation",
            "project_id" => "5",
            "user_id" => "1",
            "description" => "Editing the comment and submit comment works on the first try, but not showing confirmation",
            "browser" => "Firefox",
            "os" => "Windows 8",
            "bug_type" => "Functional Bugs",
            "severity" => "high",
            "priority" => "mid",
            "assigned_to" => "6",
            "is_fixed" => 1,
            "fixed_at" => "2019-12-15",
            "created_at" => "2019-11-13 04:55:45",
            "updated_at" => "2019-12-15 1:49:07",
        ]);

        DB::table('bugs')->insert([
            "id" => 9,
            "title" => "Typo on weather description",
            "project_id" => "6",
            "user_id" => "8",
            "description" => "showing wrong spelling on description whenever when temperature is cold",
            "browser" => "Safari",
            "os" => "Max OS",
            "bug_type" => "Frontend/Design",
            "severity" => "high",
            "priority" => "mid",
            "assigned_to" => "6",
            "is_fixed" => 1,
            "fixed_at" => "2019-12-15",
            "created_at" => "2019-11-13 04:55:45",
            "updated_at" => "2019-12-15 1:49:07",
        ]);
        DB::table('bugs')->insert([
            "id" => 10,
            "title" => "Application not responding after Creating new item",
            "project_id" => "2",
            "user_id" => "1",
            "description" => "After creating new note item application starts lagging and then not reponding",
            "browser" => "undefined",
            "os" => "Windows 10",
            "bug_type" => "Functional Bugs",
            "severity" => "high",
            "priority" => "high",
            "assigned_to" => 7,
            "is_fixed" => 0,
            "fixed_at" => null,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('bugs')->insert([
            "id" => 11,
            "title" => "Typo on \"Password\" register window",
            "project_id" => "2",
            "user_id" => "8",
            "description" => "When createing new account in register page.",
            "browser" => "undefined",
            "os" => "Linux(Debian\Ubuntu)",
            "bug_type" => "Frontend/Design",
            "severity" => "low",
            "priority" => "low",
            "assigned_to" => 7,
            "is_fixed" => 1,
            "fixed_at" => "2019-12-13 04:55:45",
            "created_at" => "2019-12-13 04:55:45",
            "updated_at" => "2019-12-13 04:55:45",
        ]);

    }
}
