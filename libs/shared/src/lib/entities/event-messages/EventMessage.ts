import { Expose } from "class-transformer";
import { IsOptional } from "class-validator";

@Expose()
export class EventMessage {
  constructor(partial: Partial<EventMessage>) {
    Object.assign(this, partial);
  }


  /**
   * The type of the event message.
   */
  @IsOptional()
  type = "unknown";


  /**
   * The payload of the event message.
   */
  @IsOptional()
  payload: object = {};

  // protected set SetPayload(value: object) {
  //   this.payload = value;
  // }

  /**
   * Checks if the event message is valid.
   *
   * This getter evaluates whether the event message meets the necessary criteria
   * to be considered valid. Specifically, it checks if the message exists, has content,
   * and has a type.
   *
   * @returns {boolean} `true` if the event message is valid, otherwise `false`.
   */
  get isValid(): boolean {
    return this.isMessage && this.hasContent && this.hasType;
  }


  private get isMessage(): boolean {
    return this != undefined && typeof this === "object"
  }

  private get hasContent(): boolean {
    return this.payload !== undefined;
  }

  private get hasType(): boolean {
    return this.type !== undefined;
  }


}
