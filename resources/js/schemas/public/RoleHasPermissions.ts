// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { PermissionsId } from './Permissions';
import type { RolesId } from './Roles';

/** Represents the table public.role_has_permissions */
export default interface RoleHasPermissions {
    permission_id: PermissionsId;

    role_id: RolesId;
}

/** Represents the initializer for the table public.role_has_permissions */
export interface RoleHasPermissionsInitializer {
    permission_id: PermissionsId;

    role_id: RolesId;
}

/** Represents the mutator for the table public.role_has_permissions */
export interface RoleHasPermissionsMutator {
    permission_id?: PermissionsId;

    role_id?: RolesId;
}
