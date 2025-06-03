export type KeycloakUser = {
  sub?: string;
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phoneVerified?: boolean;
  enabled?: boolean;
  phone?: string;
  picture?: string;
  attributes?: {
    picture?: string;
    phone?: string;
  };
};

export type KeycloakResponseUser = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  attributes?: {
    picture?: string;
    phone?: string;
  };
  emailVerified: boolean;
  createdTimestamp: number;
  enabled: boolean;
  totp: boolean;
  disableableCredentialTypes: string[];
  requiredActions: string[];
  notBefore: number;
  access: {
    manageGroupMembership: boolean;
    view: boolean;
    mapRoles: boolean;
    impersonate: boolean;
    manage: boolean;
  };
};
