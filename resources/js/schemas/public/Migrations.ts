// @generated
// This file is automatically generated by Kanel. Do not modify manually.

/** Identifier type for public.migrations */
export type MigrationsId = number & { __brand: 'MigrationsId' };

/** Represents the table public.migrations */
export default interface Migrations {
    id: MigrationsId;

    migration: string;

    batch: number;
}

/** Represents the initializer for the table public.migrations */
export interface MigrationsInitializer {
    /** Default value: nextval('migrations_id_seq'::regclass) */
    id?: MigrationsId;

    migration: string;

    batch: number;
}

/** Represents the mutator for the table public.migrations */
export interface MigrationsMutator {
    id?: MigrationsId;

    migration?: string;

    batch?: number;
}