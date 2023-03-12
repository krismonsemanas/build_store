<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Incoming>
 */
class IncomingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'supplier_id' => 1,
            'code' => config('store.income_prefix').time(),
            'date' => fake()->date(),
            'amount' => '1000000'
        ];
    }
}
