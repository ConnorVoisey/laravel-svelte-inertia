import type Permissions from './schemas/public/Permissions';
import type Roles from './schemas/public/Roles';
import type Users from './schemas/public/Users';

export type User = {
    id: number;
    email: string;
    name: string;
};

export type UserWithRolesAndPermissions = Users & {
    permissions: Permissions[];
    role: Roles;
};

export type RoleWithPermissions = Roles & {
    permissions: Permissions[];
};
