export enum NotificationStatus {
  Unread = 'UNREAD',
  Read = 'READ',
  Archived = 'ARCHIVED',
  Sent = 'SENT',
  Unknown = 'UNKNOWN'
}


export enum NotificationType {
  Info = 'INFO',
  Warning = 'WARNING',
  Error = 'ERROR',
  Success = 'SUCCESS',
  Urgent = 'URGENT',
  Unknown = 'UNKNOWN',
  Delayed = 'DELAYED'
}


export enum AvailableChannels {
  Email = 'EMAIL',
  SMS = 'SMS',
  Push = 'PUSH',
  Webhook = 'WEBHOOK',
  Slack = 'SLACK',
  Discord = 'DISCORD',
  Telegram = 'TELEGRAM',
  WhatsApp = 'WHATSAPP',
  Signal = 'SIGNAL',
  Viber = 'VIBER',
  Line = 'LINE',
  Messenger = 'MESSENGER',
  Skype = 'SKYPE',
  Hangouts = 'HANGOUTS',
  WeChat = 'WECHAT',
  Zoom = 'ZOOM',
  MicrosoftTeams = 'MICROSOFT_TEAMS',
  GoogleChat = 'GOOGLE_CHAT',
  RocketChat = 'ROCKET_CHAT',
  Mattermost = 'MATTERMOST',
  Jira = 'JIRA',
  Confluence = 'CONFLUENCE',
  Bitbucket = 'BITBUCKET',
  Github = 'GITHUB',
  Gitlab = 'GITLAB',
  Jenkins = 'JENKINS',
  TravisCI = 'TRAVIS_CI',
  CircleCI = 'CIRCLE_CI',

  // Add more channels here
  // ...
}


export interface NotificationChannels {
  name: AvailableChannels;
  delivery?: NotificationStatus;
}
