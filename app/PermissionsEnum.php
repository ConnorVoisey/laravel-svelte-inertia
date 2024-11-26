<?php

namespace App\Enums;

enum RolesEnum: string
{
    // case NAMEINAPP = 'name-in-database';

    case WRITER      = 'writer';
    case EDITOR      = 'editor';
    case USERMANAGER = 'user-manager';

    // extra helper to allow for greater customization of displayed values, without disclosing the name/value data directly
    public function label(): string
    {
        return match ($this) {
            self::WRITER      => 'Writers',
            self::EDITOR      => 'Editors',
            self::USERMANAGER => 'User Managers',
        };
    }
}
