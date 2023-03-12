<?php

namespace Database\Seeders;

use App\Models\Supplier;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SupplierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $supplier = Supplier::create([
            'name' => 'DEFAULT SUPPLIER',
            'code' => Str::random(10),
            'phone' => '081234567890',
            'address' => 'UNNAMED ROAD',
        ]);

        $supplier->products()->attach(1);
    }
}
