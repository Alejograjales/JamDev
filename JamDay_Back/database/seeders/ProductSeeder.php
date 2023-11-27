<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table("products")->insert([
            'name' => "Camisa",
            'description' => "azul",
            'amount' => 1000,
        ]);
        DB::table("products")->insert([
            'name' => "pantalon",
            'description' => "verde",
            'amount' => 3000,
        ]);
        DB::table("products")->insert([
            'name' => "zapatos",
            'description' => "blancos",
            'amount' => 540,
        ]);
    }
}
