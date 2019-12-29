<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            "id" => 1,
            "name" => "Moneky D. Luffy",
            "email" => "monkey@email.com",
            "password" => bcrypt("password"),
            "created_at" => "2019-08-21 22:49:07",
            "updated_at" => now(),
        ]);

        DB::table('users')->insert([
            "id" => 2,
            "name" => "Boa hancock",
            "email" => "boa@email.com",
            "password" => bcrypt("password"),
            "created_at" => "2019-08-21 22:49:07",
            "updated_at" => now(),
        ]);

        DB::table('users')->insert([
            "id" => 3,
            "name" => "admin",
            "email" => "admin@email.com",
            "password" => bcrypt("password"),
            "created_at" => "2019-08-21 22:49:07",
            "updated_at" => now(),
        ]);

        DB::table('users')->insert([
            "id" => 4,
            "name" => "tony stark",
            "email" => "dev1@email.com",
            "password" => bcrypt("password"),
            "created_at" => "2019-08-21 22:49:07",
            "updated_at" => now(),
        ]);

        DB::table('users')->insert([
            "id" => 5,
            "name" => "Thanos",
            "email" => "dev2@email.com",
            "password" => bcrypt("password"),
            "created_at" => "2019-08-21 22:49:07",
            "updated_at" => now(),
        ]);

        DB::table('users')->insert([
            "id" => 6,
            "name" => "Scarlet Witch",
            "email" => "dev3@email.com",
            "password" => bcrypt("password"),
            "created_at" => "2019-08-21 22:49:07",
            "updated_at" => now(),
        ]);

        DB::table('users')->insert([
            "id" => 7,
            "name" => "Vision",
            "email" => "dev4@email.com",
            "password" => bcrypt("password"),
            "created_at" => "2019-08-21 22:49:07",
            "updated_at" => now(),
        ]);

        DB::table('users')->insert([
            "id" => 8,
            "name" => "Nami",
            "email" => "Nami@email.com",
            "password" => bcrypt("password"),
            "created_at" => "2019-08-21 22:49:07",
            "updated_at" => now(),
        ]);

    }
}
