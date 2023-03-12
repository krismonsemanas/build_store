<?php

namespace App\Policies;

use App\Models\ProductHistory;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ProductHistoryPolicy
{

    /**
     * Perform pre-authorization checks.
     */
    public function before(User $user, string $ability): bool | null
    {
        return $user->hasRole('super-admin') ?? null;
    }

    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->hasDirectPermission('product.history.index');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, ProductHistory $productHistory): bool
    {
        return $user->hasAllDirectPermissions('product.history.show');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->hasAllDirectPermissions('product.history.create');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, ProductHistory $productHistory): bool
    {
        return $user->hasAllDirectPermissions('product.history.update');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, ProductHistory $productHistory): bool
    {
        return $user->hasAllDirectPermissions('product.history.delete');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, ProductHistory $productHistory): bool
    {
        return $user->hasAllDirectPermissions('product.history.restore');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, ProductHistory $productHistory): bool
    {
        return $user->hasAllDirectPermissions('product.history.forceDelete');
    }
}
