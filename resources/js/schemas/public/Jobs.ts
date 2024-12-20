// @generated
// This file is automatically generated by Kanel. Do not modify manually.

/** Identifier type for public.jobs */
export type JobsId = string & { __brand: 'JobsId' };

/** Represents the table public.jobs */
export default interface Jobs {
    id: JobsId;

    queue: string;

    payload: string;

    attempts: number;

    reserved_at: number | null;

    available_at: number;

    created_at: number;
}

/** Represents the initializer for the table public.jobs */
export interface JobsInitializer {
    /** Default value: nextval('jobs_id_seq'::regclass) */
    id?: JobsId;

    queue: string;

    payload: string;

    attempts: number;

    reserved_at?: number | null;

    available_at: number;

    created_at: number;
}

/** Represents the mutator for the table public.jobs */
export interface JobsMutator {
    id?: JobsId;

    queue?: string;

    payload?: string;

    attempts?: number;

    reserved_at?: number | null;

    available_at?: number;

    created_at?: number;
}
