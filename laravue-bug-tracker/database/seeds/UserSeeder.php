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
            "name" => "Moneky D. Luffy",
            "email" => "monkey@email.com",
            "password" => bcrypt("password"),
            "created_at" => "2019-12-22 22:49:07",
            "updated_at" => now(),
        ]);

        DB::table('users')->insert([
            "name" => "Boa hancock",
            "email" => "boa@email.com",
            "password" => bcrypt("password"),
            "created_at" => "2019-12-22 22:49:07",
            "updated_at" => now(),
        ]);

        DB::table('users')->insert([
            "name" => "admin",
            "email" => "admin@email.com",
            "password" => bcrypt("password"),
            "created_at" => "2019-12-22 22:49:07",
            "updated_at" => now(),
        ]);

        DB::table('users')->insert([
            "name" => "developer one",
            "email" => "dev1@email.com",
            "password" => bcrypt("password"),
            "created_at" => "2019-12-22 22:49:07",
            "updated_at" => now(),
        ]);

        DB::table('users')->insert([
            "name" => "developer two",
            "email" => "dev2@email.com",
            "password" => bcrypt("password"),
            "created_at" => "2019-12-22 22:49:07",
            "updated_at" => now(),
        ]);

        DB::table('users')->insert([
            "name" => "developer three",
            "email" => "dev3@email.com",
            "password" => bcrypt("password"),
            "created_at" => "2019-12-22 22:49:07",
            "updated_at" => now(),
        ]);
    }
}
