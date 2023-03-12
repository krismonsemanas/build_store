<?php

namespace Database\Seeders;

use App\Models\ProductHistory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductHistorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProductHistory::create([
            'product_id' => 1,
            'stock' => 100,
            'capital_gain' => '10000',
            'sell_price' => '15000'
        ]);
    }
}
