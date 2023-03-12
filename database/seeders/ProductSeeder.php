<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $name = 'Default Product';
        Product::create([
            'name' => $name,
            'slug' => Str::slug($name),
            'category_id' => 1,
            'unit' => 'Kg',
            'total_stock' => 100,
            'thumbnail' => 'products/default.png'
        ]);
    }
}
