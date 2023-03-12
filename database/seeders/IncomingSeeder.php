<?php

namespace Database\Seeders;

use App\Models\Incoming;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IncomingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Incoming::create([
            'supplier_id' => 1,
            'code' => config('store.income_prefix').time(),
            'date' => now(),
            'amount' => '1000000'
        ]);
    }
}
