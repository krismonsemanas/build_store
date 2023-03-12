<?php

namespace App\Policies;

use App\Models\Incoming;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class IncomingPolicy
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
        return $user->hasDirectPermission('incoming.index');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Incoming $incoming): bool
    {
        return $user->hasDirectPermission('incoming.show');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->hasDirectPermission('incoming.create');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Incoming $incoming): bool
    {
        return $user->hasDirectPermission('incoming.update');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Incoming $incoming): bool
    {
        return $user->hasDirectPermission('incoming.delete');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Incoming $incoming): bool
    {
        return $user->hasDirectPermission('incoming.restore');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Incoming $incoming): bool
    {
        return $user->hasDirectPermission('incoming.forceDelete');
    }
}
