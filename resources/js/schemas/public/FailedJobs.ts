// @generated
// This file is automatically generated by Kanel. Do not modify manually.

/** Identifier type for public.failed_jobs */
export type FailedJobsId = string & { __brand: 'FailedJobsId' };

/** Represents the table public.failed_jobs */
export default interface FailedJobs {
    id: FailedJobsId;

    uuid: string;

    connection: string;

    queue: string;

    payload: string;

    exception: string;

    failed_at: Date;
}

/** Represents the initializer for the table public.failed_jobs */
export interface FailedJobsInitializer {
    /** Default value: nextval('failed_jobs_id_seq'::regclass) */
    id?: FailedJobsId;

    uuid: string;

    connection: string;

    queue: string;

    payload: string;

    exception: string;

    /** Default value: CURRENT_TIMESTAMP */
    failed_at?: Date;
}

/** Represents the mutator for the table public.failed_jobs */
export interface FailedJobsMutator {
    id?: FailedJobsId;

    uuid?: string;

    connection?: string;

    queue?: string;

    payload?: string;

    exception?: string;

    failed_at?: Date;
}
