<?php

namespace App\Enums;

enum PermissionsEnum: string
{
    // Users
    case LIST_USERS   = 'list-users';
    case CREATE_USERS = 'create-users';
    case UPDATE_USERS = 'update-users';
    case DELETE_USERS = 'delete-users';

    public function label(): string
    {
        return match ($this) {
            self::LIST_USERS   => 'List Users',
            self::CREATE_USERS => 'Create Users',
            self::UPDATE_USERS => 'Update Users',
            self::DELETE_USERS => 'Delete Users',
        };
    }
}
