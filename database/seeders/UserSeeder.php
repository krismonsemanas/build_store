<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // initial roles
        $roles = [
            [
                'name' => 'super-admin',
            ],
            [
                'name' => 'administrator',
            ],
            [
                'name' => 'cashier',
            ],
        ];

        // insert inital roles
        foreach ($roles as $role) {
            Role::create($role);
        }

        // initial permissions
        $permissions = [
            [
                'name' => 'user.index',
            ],
            [
                'name' => 'user.show',
            ],
            [
                'name' => 'user.create',
            ],
            [
                'name' => 'user.update',
            ],
            [
                'name' => 'user.delete',
            ],
            [
                'name' => 'role.index'
            ],
            [
                'name' => 'role.create'
            ],
            [
                'name' => 'role.show'
            ],
            [
                'name' => 'role.update'
            ],
            [
                'name' => 'role.delete'
            ],
            [
                'name' => 'role.assign.permission'
            ],
            [
                'name' => 'role.assign.user'
            ],
            [
                'name' => 'permission.index'
            ],
            [
                'name' => 'permission.create'
            ],
            [
                'name' => 'permission.show'
            ],
            [
                'name' => 'permission.update'
            ],
            [
                'name' => 'permission.delete'
            ],
            [
                'name' => 'permission.assign.role'
            ],
            [
                'name' => 'permission.assign.user'
            ],
        ];

        // insert initial permission
        foreach ($permissions as $permission) {
            Permission::create($permission);
        }


        // assign all permission to role super admin
        $roleSuperAdmin = Role::findById(1);
        $roleSuperAdmin->givePermissionTo(Permission::all());


        // initial users
        $users = [
            [
                'first_name' => 'Emon',
                'last_name' => 'Krismon',
                'username' => 'emonkrismon98',
                'email' => 'emonkrismon98@gmail.com',
                'email_verified_at' => now(),
                'avatar' => 'avatars/default.png',
                'address' => 'Jl. Pembangunan Gg Hidayah No. 5 Desa Kawat Tayan Hilir',
                'password' => '$2y$10$6AMUH754X.BwlilrPN9Sreo2am45FhxBeigqN/qPE1XaC0N0Nk0mq'
            ],
            [
                'first_name' => 'Admin',
                'last_name' => 'Testing',
                'username' => 'admintesting',
                'email' => 'admintesting@gmail.com',
                'email_verified_at' => now(),
                'avatar' => 'avatars/default.png',
                'address' => 'Jl. Pembangunan Gg Hidayah No. 5 Desa Kawat Tayan Hilir',
                'password' => '$2y$10$6AMUH754X.BwlilrPN9Sreo2am45FhxBeigqN/qPE1XaC0N0Nk0mq'
            ],
            [
                'first_name' => 'Kasir',
                'last_name' => 'Testing',
                'username' => 'kasirtesting',
                'email' => 'kasirtesting@gmail.com',
                'email_verified_at' => now(),
                'avatar' => 'avatars/default.png',
                'address' => 'Jl. Pembangunan Gg Hidayah No. 5 Desa Kawat Tayan Hilir',
                'password' => '$2y$10$6AMUH754X.BwlilrPN9Sreo2am45FhxBeigqN/qPE1XaC0N0Nk0mq'
            ]
        ];

        // insert inital user
        User::insert($users);

        // find user and attach role as super admin
        $superAdmin = User::find(1);
        $superAdmin->assignRole($roleSuperAdmin);

        // find user and attach role as adminisitrator
        $administrator = User::find(2);
        $administrator->assignRole('administrator');

        // find user and attach role as cashier
        $administrator = User::find(3);
        $administrator->assignRole('cashier');
    }
}
