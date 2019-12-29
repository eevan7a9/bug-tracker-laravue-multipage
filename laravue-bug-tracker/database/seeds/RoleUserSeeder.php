<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('role_user')->insert([
            "id" => 1,
            "user_id" => 1,
            "role_id" => 1,
            "created_at" => now(),
            "updated_at" => now(),
        ]);

        DB::table('role_user')->insert([
            "id" => 2,
            "user_id" => 2,
            "role_id" => 1,
            "created_at" => now(),
            "updated_at" => now(),
        ]);

        DB::table('role_user')->insert([
            "id" => 3,
            "user_id" => 3,
            "role_id" => 3,
            "created_at" => now(),
            "updated_at" => now(),
        ]);

        DB::table('role_user')->insert([
            "id" => 4,
            "user_id" => 4,
            "role_id" => 2,
            "created_at" => now(),
            "updated_at" => now(),
        ]);

        DB::table('role_user')->insert([
            "id" => 5,
            "user_id" => 5,
            "role_id" => 2,
            "created_at" => now(),
            "updated_at" => now(),
        ]);

        DB::table('role_user')->insert([
            "id" => 6,
            "user_id" => 6,
            "role_id" => 2,
            "created_at" => now(),
            "updated_at" => now(),
        ]);

        DB::table('role_user')->insert([
            "id" => 7,
            "user_id" => 7,
            "role_id" => 2,
            "created_at" => now(),
            "updated_at" => now(),
        ]);

        DB::table('role_user')->insert([
            "id" => 8,
            "user_id" => 8,
            "role_id" => 1,
            "created_at" => now(),
            "updated_at" => now(),
        ]);

    }
}
