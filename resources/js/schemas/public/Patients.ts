// @generated
// This file is automatically generated by Kanel. Do not modify manually.

/** Identifier type for public.patients */
export type PatientsId = string & { __brand: 'PatientsId' };

/** Represents the table public.patients */
export default interface Patients {
    id: PatientsId;

    first_name: string | null;

    last_name: string;

    email: string;

    created_at: Date | null;

    updated_at: Date | null;
}

/** Represents the initializer for the table public.patients */
export interface PatientsInitializer {
    /** Default value: nextval('patients_id_seq'::regclass) */
    id?: PatientsId;

    first_name?: string | null;

    last_name: string;

    email: string;

    created_at?: Date | null;

    updated_at?: Date | null;
}

/** Represents the mutator for the table public.patients */
export interface PatientsMutator {
    id?: PatientsId;

    first_name?: string | null;

    last_name?: string;

    email?: string;

    created_at?: Date | null;

    updated_at?: Date | null;
}
