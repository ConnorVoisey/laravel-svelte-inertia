<?php

use App\Enums\PermissionsEnum;
use App\Enums\RolesEnum;
use Illuminate\Database\Migrations\Migration;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

return new class extends Migration
{
    public $newPermissions = [
        PermissionsEnum::LIST_USERS,
        PermissionsEnum::CREATE_USERS,
        PermissionsEnum::UPDATE_USERS,
        PermissionsEnum::DELETE_USERS,
    ];

    public $newRoles = [
        RolesEnum::ADMIN,
        RolesEnum::CUSTOMER,
    ];

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Permission::insert(
            array_map(
                fn ($per) => [
                    'name'       => $per->value,
                    'guard_name' => 'web',
                ],
                $this->newPermissions
            )
        );

        $adminRole = Role::create([
            'name'       => RolesEnum::ADMIN->value,
            'guard_name' => 'web',
        ]);
        $customerRole = Role::create([
            'name'       => RolesEnum::CUSTOMER->value,
            'guard_name' => 'web',
        ]);

        $permissions = Permission::get();
        $adminRole->syncPermissions($permissions);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Permission::whereIn(
            'name',
            array_map(
                fn ($per) => $per->value,
                $this->newPermissions
            )
        )->delete();

        Role::whereIn(
            'name',
            array_map(
                fn ($per) => $per->value,
                $this->newRoles
            )
        )->delete();
    }
};
