<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\Pivot;

class ProductSupplier extends Pivot
{
    protected $table = 'supplier_has_products';

    public function suppliers() : HasMany
    {
        return $this->hasMany(Supplier::class);
    }

    public function products() : HasMany
    {
        return $this->hasMany(Product::class);
    }
}
