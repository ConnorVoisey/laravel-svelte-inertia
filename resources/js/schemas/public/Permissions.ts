// @generated
// This file is automatically generated by Kanel. Do not modify manually.

/** Identifier type for public.permissions */
export type PermissionsId = string & { __brand: 'PermissionsId' };

/** Represents the table public.permissions */
export default interface Permissions {
    id: PermissionsId;

    name: string;

    guard_name: string;

    created_at: Date | null;

    updated_at: Date | null;
}

/** Represents the initializer for the table public.permissions */
export interface PermissionsInitializer {
    /** Default value: nextval('permissions_id_seq'::regclass) */
    id?: PermissionsId;

    name: string;

    guard_name: string;

    created_at?: Date | null;

    updated_at?: Date | null;
}

/** Represents the mutator for the table public.permissions */
export interface PermissionsMutator {
    id?: PermissionsId;

    name?: string;

    guard_name?: string;

    created_at?: Date | null;

    updated_at?: Date | null;
}