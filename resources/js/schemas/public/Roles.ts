// @generated
// This file is automatically generated by Kanel. Do not modify manually.

/** Identifier type for public.roles */
export type RolesId = string & { __brand: 'RolesId' };

/** Represents the table public.roles */
export default interface Roles {
    id: RolesId;

    name: string;

    guard_name: string;

    created_at: Date | null;

    updated_at: Date | null;
}

/** Represents the initializer for the table public.roles */
export interface RolesInitializer {
    /** Default value: nextval('roles_id_seq'::regclass) */
    id?: RolesId;

    name: string;

    guard_name: string;

    created_at?: Date | null;

    updated_at?: Date | null;
}

/** Represents the mutator for the table public.roles */
export interface RolesMutator {
    id?: RolesId;

    name?: string;

    guard_name?: string;

    created_at?: Date | null;

    updated_at?: Date | null;
}
