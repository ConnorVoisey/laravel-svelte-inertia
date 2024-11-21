// @generated
// This file is automatically generated by Kanel. Do not modify manually.

/** Identifier type for public.job_batches */
export type JobBatchesId = string & { __brand: 'JobBatchesId' };

/** Represents the table public.job_batches */
export default interface JobBatches {
    id: JobBatchesId;

    name: string;

    total_jobs: number;

    pending_jobs: number;

    failed_jobs: number;

    failed_job_ids: string;

    options: string | null;

    cancelled_at: number | null;

    created_at: number;

    finished_at: number | null;
}

/** Represents the initializer for the table public.job_batches */
export interface JobBatchesInitializer {
    id: JobBatchesId;

    name: string;

    total_jobs: number;

    pending_jobs: number;

    failed_jobs: number;

    failed_job_ids: string;

    options?: string | null;

    cancelled_at?: number | null;

    created_at: number;

    finished_at?: number | null;
}

/** Represents the mutator for the table public.job_batches */
export interface JobBatchesMutator {
    id?: JobBatchesId;

    name?: string;

    total_jobs?: number;

    pending_jobs?: number;

    failed_jobs?: number;

    failed_job_ids?: string;

    options?: string | null;

    cancelled_at?: number | null;

    created_at?: number;

    finished_at?: number | null;
}