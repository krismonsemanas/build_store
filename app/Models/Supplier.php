<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Supplier extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'code',
        'address',
        'phone'
    ];

    /**
     * The suppliers that belong to the product.
     */
    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class)->using(ProductSupplier::class);
    }
}
