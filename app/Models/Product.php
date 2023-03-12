<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'unit',
        'total_stock',
        'thumbnail'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'thumbnail_url'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'category_id' => 'integer',
    ];

    protected function thumbnailUrl() : Attribute
    {
        return new Attribute(
            get: fn () => Storage::url($this->attributes['thumbnail'])
        );
    }

    /**
     * Get the category that owns the product.
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * The products that belong to the supplier.
     */
    public function suppliers(): BelongsToMany
    {
        return $this->belongsToMany(Supplier::class)->using(ProductSupplier::class);
    }

    /**
     * Get the history for the product.
     */
    public function histories(): HasMany
    {
        return $this->hasMany(ProductHistory::class);
    }
}
