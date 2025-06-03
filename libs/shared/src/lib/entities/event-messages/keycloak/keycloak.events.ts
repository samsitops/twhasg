import { IsObject, IsOptional } from "class-validator";

import { EventMessage } from "../EventMessage";

export class KeycloakEventMessage extends EventMessage {
  constructor(event: Partial<KeycloakEventMessage>) {
    super(event);
    Object.assign(this, event);
  }

  @IsObject()
  details!: unknown;

  @IsOptional()
  userId = '';


  override get isValid(): boolean {
    return this.details != undefined && this.details != null;
  }
}


