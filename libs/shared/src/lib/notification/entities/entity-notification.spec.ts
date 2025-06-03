import { NotificationEntity } from './notification.entity';

describe('EntityNotification', () => {
  it('should be defined', () => {
    expect(new NotificationEntity({})).toBeDefined();
  });
});
