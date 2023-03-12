<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\Category;
use App\Models\Incoming;
use App\Models\Payment;
use App\Models\Product;
use App\Models\ProductHistory;
use App\Models\Supplier;
use App\Policies\CategoryPolicy;
use App\Policies\IncomingPolicy;
use App\Policies\PaymentPolicy;
use App\Policies\ProductHistoryPolicy;
use App\Policies\ProductPolicy;
use App\Policies\SupplierPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Category::class => CategoryPolicy::class,
        Product::class => ProductPolicy::class,
        Supplier::class => SupplierPolicy::class,
        ProductHistory::class => ProductHistoryPolicy::class,
        Payment::class => PaymentPolicy::class,
        Incoming::class => IncomingPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        //
    }
}
