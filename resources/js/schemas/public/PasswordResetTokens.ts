// @generated
// This file is automatically generated by Kanel. Do not modify manually.

/** Identifier type for public.password_reset_tokens */
export type PasswordResetTokensEmail = string & { __brand: 'PasswordResetTokensEmail' };

/** Represents the table public.password_reset_tokens */
export default interface PasswordResetTokens {
    email: PasswordResetTokensEmail;

    token: string;

    created_at: Date | null;
}

/** Represents the initializer for the table public.password_reset_tokens */
export interface PasswordResetTokensInitializer {
    email: PasswordResetTokensEmail;

    token: string;

    created_at?: Date | null;
}

/** Represents the mutator for the table public.password_reset_tokens */
export interface PasswordResetTokensMutator {
    email?: PasswordResetTokensEmail;

    token?: string;

    created_at?: Date | null;
}