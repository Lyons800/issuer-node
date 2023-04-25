export interface Credential {
  createdAt: Date;
  credentialSubject: Record<string, unknown>;
  expired: boolean;
  expiresAt: Date | null;
  id: string;
  revNonce: number;
  revoked: boolean;
  schemaType: string;
  schemaUrl: string;
}

export type CredentialsTabIDs = "issued" | "links";

export type LinkStatus = "active" | "inactive" | "exceeded";

export type ProofType = "MTP" | "SIG" | "MTP & SIG";

export interface Link {
  active: boolean;
  createdAt: Date;
  credentialSubject: Record<string, unknown>;
  expiration: Date | null;
  id: string;
  issuedClaims: number;
  maxIssuance: number | null;
  proofType: ProofType;
  schemaHash: string;
  schemaType: string;
  schemaUrl: string;
  status: LinkStatus;
}
