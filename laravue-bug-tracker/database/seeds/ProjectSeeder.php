<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects')->insert([
            "id" => 1,
            "name" => "E-commerce Fishstore",
            "version" => "1.0.0",
            "environment" => "Web",
            "os" => "cross platform",
            "description" => "Online-store with Stripe that facilitate online transactions of koi(s) and services through means of the transfer of information and funds over the Internet.",
            "development_start" => "2019-10-08",
            "release_date" => "2019-12-10",
            "image_src" => "https://images2.imgbox.com/77/74/vRtFNXge_o.jpg",
            "created_at" => "2019-10-22 04:55:45",
            "updated_at" => now(),
        ]);

        DB::table('projects')->insert([
            "id" => 2,
            "name" => "Note Storage",
            "version" => "1.0.0",
            "environment" => "Desktop",
            "os" => "cross platform",
            "description" => "Simple Desktop app that can manage and encrypt written Notes(password,url links, etc) only to be viewd by it's owner",
            "development_start" => "2019-10-08",
            "release_date" => "2019-12-10",
            "image_src" => "https://images.imgbox.com/da/7e/dGFCTUDM_o.png",
            "created_at" => "2019-10-22 04:55:45",
            "updated_at" => now(),
        ]);

        DB::table('projects')->insert([
            "id" => 3,
            "name" => "Library-MS",
            "version" => "1.3.0",
            "environment" => "Web",
            "os" => "cross platform",
            "description" => "System that helps manage the number of books, transactions between librarian and a user.",
            "development_start" => "2018-10-24",
            "release_date" => "2019-11-20",
            "image_src" => "https://images2.imgbox.com/f6/23/TSzykTCM_o.png",
            "created_at" => "2019-11-22 04:55:45",
            "updated_at" => "2019-12-22 04:55:45",
        ]);

        DB::table('projects')->insert([
            "id" => 4,
            "name" => "Social Media App",
            "version" => "2.1.0",
            "environment" => "Web",
            "os" => "cross platform",
            "description" => "Social media are interactive computer-mediated technologies that facilitate the creation and sharing of information, ideas, career interests and other forms of expression via virtual communities and networks.",
            "development_start" => "2019-9-11",
            "release_date" => "2019-10-10",
            "image_src" => "https://images2.imgbox.com/c9/a2/mApOb7kj_o.jpg",
            "created_at" => "2019-11-23 04:55:45",
            "updated_at" => now(),
        ]);

        DB::table('projects')->insert([
            "id" => 5,
            "name" => "Survey Voting System",
            "version" => "1.3.0",
            "environment" => "Web",
            "os" => "cross platform",
            "description" => "Laravel vue js application that enables users to create surveys and allow users to vote. a method used for collecting data on certain topics that gets you the insights you need.",
            "development_start" => "2019-10-08",
            "release_date" => "2019-12-10",
            "image_src" => "https://images.imgbox.com/8b/56/QyoiEjQ1_o.png",
            "created_at" => "2019-12-22 04:55:45",
            "updated_at" => now(),
        ]);

        DB::table('projects')->insert([
            "id" => 6,
            "name" => "Current Weather App",
            "version" => "1.1.0",
            "environment" => "Web",
            "os" => "cross platform",
            "description" => " It's a web application that gives information about current weather.",
            "development_start" => "2019-10-08",
            "release_date" => "2019-12-10",
            "image_src" => "https://images2.imgbox.com/2e/cc/1dAgPDw5_o.jpg",
            "created_at" => "2019-12-22 04:55:45",
            "updated_at" => now(),
        ]);

    }
}
