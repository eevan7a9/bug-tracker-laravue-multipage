<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comments')->insert([
            "id" => 1,
            "user_id" => 5,
            "bug_id" => 1,
            "message" => "Proin faucibus elit sit amet lacus tincidunt elementum. Donec pellentesque cursus arcu, quis commodo eros aliquet non. Quisque dignissim rutrum nibh vel egestas?",
            "created_at" => "2019-12-23 04:55:45",
            "updated_at" => "2019-12-23 04:55:45",
        ]);
        DB::table('comments')->insert([
            "id" => 2,
            "user_id" => 1,
            "bug_id" => 1,
            "message" => "Nunc at convallis ante, at facilisis libero.",
            "created_at" => "2019-12-23 05:15:45",
            "updated_at" => "2019-12-23 05:15:45",
        ]);
        DB::table('comments')->insert([
            "id" => 3,
            "user_id" => 5,
            "bug_id" => 1,
            "message" => "consequat. Vivamus et ex et lacus pharetra suscipit sit amet a risus. Sed aliquet risus et leo cursus, eget faucibus eros sodales. Sed tellus sem, tristique vitae ipsum non, dapibus viverra quam. Praesent lacinia mollis hendrerit. Aenean velit justo, aliquet et maximus vitae, porta in felis. Vestibulum ante ipsum primis.",
            "created_at" => "2019-12-23 05:45:45",
            "updated_at" => "2019-12-23 05:45:45",
        ]);

        DB::table('comments')->insert([
            "id" => 4,
            "user_id" => 6,
            "bug_id" => 1,
            "message" => "Phasellus ut felis in orci tempor tempor ac vitae arcu.",
            "created_at" => "2019-12-23 06:25:45",
            "updated_at" => "2019-12-23 06:25:45",
        ]);

        DB::table('comments')->insert([
            "id" => 5,
            "user_id" => 4,
            "bug_id" => 2,
            "message" => "consequat. Vivamus et ex et lacus pharetra suscipit sit amet a risus. Privacy Policy",
            "created_at" => "2019-12-23 06:25:45",
            "updated_at" => "2019-12-23 06:25:45",
        ]);

        DB::table('comments')->insert([
            "id" => 6,
            "user_id" => 2,
            "bug_id" => 2,
            "message" => "Phasellus ut felis in orci tempor tempor ac vitae arcu.",
            "created_at" => "2019-12-23 06:25:45",
            "updated_at" => "2019-12-23 06:25:45",
        ]);

        DB::table('comments')->insert([
            "id" => 7,
            "user_id" => 3,
            "bug_id" => 3,
            "message" => "Phasellus ut felis in orci tempor tempor ac vitae arcu.",
            "created_at" => "2019-12-23 06:25:45",
            "updated_at" => "2019-12-23 06:25:45",
        ]);

        DB::table('comments')->insert([
            "id" => 8,
            "user_id" => 3,
            "bug_id" => 3,
            "message" => "Phasellus ut felis in orci tempor tempor ac vitae arcu.",
            "created_at" => "2019-12-23 06:25:45",
            "updated_at" => "2019-12-23 06:25:45",
        ]);

        DB::table('comments')->insert([
            "id" => 9,
            "user_id" => 7,
            "bug_id" => 3,
            "message" => "Phasellus ut felis in orci tempor tempor ac vitae arcu.",
            "created_at" => "2019-12-23 06:25:45",
            "updated_at" => "2019-12-23 06:25:45",
        ]);

        DB::table('comments')->insert([
            "id" => 10,
            "user_id" => 2,
            "bug_id" => 4,
            "message" => "Phasellus ut Cras vitae dictum mauris, a eleifend nibh. Quisque ultricies erat et mi tempus molestie. Nulla facilisi. Duis sodales augue a aliquet placerat. In aliquam auctor quam felis in orci tempor tempor ac vitae arcu.",
            "created_at" => "2019-12-23 06:25:45",
            "updated_at" => "2019-12-23 06:25:45",
        ]);

        DB::table('comments')->insert([
            "id" => 11,
            "user_id" => 7,
            "bug_id" => 5,
            "message" => "Cras vitae dictum mauris, a eleifend nibh. Quisque ultricies erat et mi tempus molestie. Nulla facilisi. Duis sodales augue a aliquet placerat. In aliquam auctor quam",
            "created_at" => "2019-12-23 06:25:45",
            "updated_at" => "2019-12-23 06:25:45",
        ]);

        DB::table('comments')->insert([
            "id" => 12,
            "user_id" => 6,
            "bug_id" => 5,
            "message" => "In aliquam auctor quam Phasellus ut felis in orci tempor tempor ac vitae arcu.",
            "created_at" => "2019-12-23 06:25:45",
            "updated_at" => "2019-12-23 06:25:45",
        ]);

        DB::table('comments')->insert([
            "id" => 13,
            "user_id" => 2,
            "bug_id" => 5,
            "message" => "Vitae arcu aliquam auctor quam Phasellus.",
            "created_at" => "2019-12-23 06:25:45",
            "updated_at" => "2019-12-23 06:25:45",
        ]);

        DB::table('comments')->insert([
            "id" => 14,
            "user_id" => 1,
            "bug_id" => 6,
            "message" => "In aliquam auctor quam Phasellus ut felis in orci tempor tempor ac vitae arcu.",
            "created_at" => "2019-12-26 06:25:45",
            "updated_at" => "2019-12-26 06:25:45",
        ]);

        DB::table('comments')->insert([
            "id" => 15,
            "user_id" => 3,
            "bug_id" => 7,
            "message" => "Vivamus et ex et lacus pharetra suscipit sit amet a risus. Sed aliquet risus et leo cursus vitae arcu.",
            "created_at" => "2019-12-24 06:25:45",
            "updated_at" => "2019-12-24 06:25:45",
        ]);

        DB::table('comments')->insert([
            "id" => 16,
            "user_id" => 4,
            "bug_id" => 7,
            "message" => "In amet a risus. Sed aliquet risus et leo cursus.",
            "created_at" => "2019-12-26 06:25:45",
            "updated_at" => "2019-12-26 06:25:45",
        ]);

        DB::table('comments')->insert([
            "id" => 17,
            "user_id" => 5,
            "bug_id" => 7,
            "message" => "In in felis. Vestibulum ante ipsum primis in faucibus orci. Sed aliquet risus et leo cursus.",
            "created_at" => "2019-12-25 06:25:45",
            "updated_at" => "2019-12-25 06:25:45",
        ]);

        DB::table('comments')->insert([
            "id" => 18,
            "user_id" => 5,
            "bug_id" => 4,
            "message" => "Vivamus et ex et lacus pharetra suscipit sit amet a risus. In in felis. Vestibulum ante ipsum primis in faucibus orci. Sed aliquet risus et leo cursus.",
            "created_at" => "2019-12-25 06:25:45",
            "updated_at" => "2019-12-25 06:25:45",
        ]);

    }
}
