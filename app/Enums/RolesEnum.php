<?php

namespace App\Enums;

enum RolesEnum: string
{
    case ADMIN    = 'admin';
    case CUSTOMER = 'customer';

    // extra helper to allow for greater customization of displayed values, without disclosing the name/value data directly
    public function label(): string
    {
        return match ($this) {
            self::ADMIN    => 'Admins',
            self::CUSTOMER => 'Customers',
        };
    }
}
