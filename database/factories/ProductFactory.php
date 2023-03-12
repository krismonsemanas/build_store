<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = 'Default Product';
        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'unit' => 'Kg',
            'total_stock' => 10,
            'category_id' => 1
        ];
    }
}
