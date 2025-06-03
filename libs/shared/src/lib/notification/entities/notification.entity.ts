import { Exclude, Expose, Type } from 'class-transformer';

import i18n, { availableTranslationLocales } from '@monorepo/i18n';
import { ArrayMinSize, IsEnum, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { NotificationChannels, NotificationStatus, NotificationType } from '../types/notifications';
import { Entity } from '../../entities';



export class NotificationEntity extends Entity {


  constructor(partial: Partial<NotificationEntity>) {
    super();
    Object.assign(this, partial);
  }



  @Expose()
  @IsNumber()
  @IsOptional()
  override id?: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  title!: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  message!: string;


  /**
   * type of the notification (severity level)
   * @type {NotificationStatus}
   * @memberof NotificationEntity
   * @example 'PENDING'
   */
  @Expose()
  @IsEnum(NotificationType)
  type: NotificationType = NotificationType.Info;


  /**
   * Targeted channels for the notification (leave empty to send to all channels)
   * @type {NotificationChannels[]}
   * @memberof NotificationEntity
   * @example [{ name: AvailableChannels.Email }]
   */
  @Expose()
  @IsOptional()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  channels: NotificationChannels[] = [];


  /**
   * Receiver's access token (if any)
   */
  @Expose()
  @IsString()
  @IsOptional()
  receiverAccessToken?: string;

  /**
   * Receiver's id (if any)
   */
  @Expose()
  @IsString()
  @IsOptional()
  receiverId?: string;



  /**
   * The date and time when the notification is scheduled to be sent.
   * This property is optional and defaults to the current date and time if not provided.
   *
   * @type {Date}
   * @optional
   */
  @Expose()
  @IsOptional()
  @Type(() => Date)
  sendAt?: Date = new Date();


  /**
   * The ID of the sender.
   *
   * @optional
   * @type {string}
   */
  @Exclude()
  @IsOptional()
  @IsString()
  senderId?: string;


  /**
   * Optional data associated with the notification.
   *
   * @type {Record<string, string | object | unknown>}
   * @optional
   * @property {Record<string, string | object | unknown>} data - A record containing key-value pairs where the value can be a string, object, or any unknown type.
   */
  @Exclude()
  @IsOptional()
  @IsObject()
  data?: Record<string, string | object | unknown>;


  /**
   * The locale of the notification.
   *
   * @type {string}
   * @optional
   */
  @Exclude()
  @IsOptional()
  @IsString()
  @IsEnum(availableTranslationLocales)
  locale?: string;

  /**
   * Variables to be used in the i18n translation of the notification.
   *
   * @type {Record<string, string>}
   * @optional
   */
  @Exclude()
  @IsOptional()
  @IsObject()
  i18nVars?: Record<string, string>;

  @Exclude()
  override createdAt?: Date = new Date();

  @Exclude()
  override updatedAt?: Date = new Date();



  /**
   * Localized message for the notification entity
   * @returns {string}
   * @memberof NotificationEntity
   * @readonly
   */
  @Expose()
  get localizedMessage(): string {
    i18n.locale = this.locale ?? 'en';
    return i18n.translate(this.message, this.i18nVars);
  }

  /**
   * Localized title for the notification entity
   * @returns {string}
   * @memberof NotificationEntity
   * @readonly
   */
  @Expose()
  get localizedTitle(): string {
    i18n.locale = this.locale ?? 'en';
    return i18n.translate(this.title, this.i18nVars);
  }


  public updateNotificationLocale(locale: string): this {
    this.locale = locale;
    return this;
  }


  public updateSendAt(when: Date): this {
    this.sendAt = when;
    return this;
  }

}


// generate notification DTO

