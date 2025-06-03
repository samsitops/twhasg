import { Expose } from 'class-transformer';
import { IsOptional, IsString, IsObject, IsNumber } from 'class-validator';
import { EventMessage } from '../EventMessage';

@Expose()
export class KeycloakAdminEventMessage extends EventMessage {
  constructor(event: Partial<KeycloakAdminEventMessage>) {
    super(event);
    Object.assign(this, event);
  }

  /**
   * Unique identifier for the event.
   */
  @IsString()
  id!: string;

  /**
   * Timestamp of the event.
   */
  @IsNumber()
  time!: number;

  /**
   * ID of the realm where the event occurred.
   */
  @IsString()
  realmId!: string;

  /**
   * Name of the realm where the event occurred.
   */
  @IsString()
  realmName!: string;

  /**
   * Details of the authentication.
   */
  @IsObject()
  authDetails!: {
    realmId: string;
    realmName: string;
    clientId: string;
    userId: string;
    ipAddress: string;
  };

  /**
   * Type of the resource involved in the event.
   */
  @IsString()
  resourceType!: string;

  /**
   * Type of operation performed on the resource.
   */
  @IsString()
  operationType!: string;

  /**
   * Path of the resource.
   */
  @IsString()
  resourcePath!: string;

  /**
   * Representation of the resource as an object.
   */
  @IsObject()
  private _representation!: object;

  @Expose()
  get representation(): object {
    return this._representation;
  }

  set representation(value: string | object) {
    // Parse the string if it's in JSON format; otherwise, assign directly
    if (typeof value === 'string') {
      try {
        this._representation = JSON.parse(value);
      } catch (error) {
        console.error('Failed to parse representation JSON:', error);
        this._representation = {}; // Fallback to an empty object
      }
    } else {
      this._representation = value;
    }
  }

  /**
   * Error details if any.
   */
  @IsOptional()
  @IsString()
  error?: string;

  /**
   * String representation of the resource type.
   */
  @IsString()
  resourceTypeAsString!: string;

  override payload: KeycloakPayload | object = {
    realmName: this.realmName,
    ...this._representation,
  };

  override get isValid(): boolean {
    return (
      this.authDetails != undefined &&
      this.resourceType != undefined &&
      this.operationType != undefined
    );
  }
}

export interface KeycloakPayload {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  enabled: boolean;
  bunkerToken?: string;
  credentials: [
    {
      type: string;
      value: string;
      temporary: boolean;
    },
  ];
  attributes: {
    phoneNumber: string;
    bunkerToken: string;
  };
}
