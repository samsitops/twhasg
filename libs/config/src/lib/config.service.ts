import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  static loadFromEnv() {
    return this.parseConfigFromEnv(process.env);
  }

  static parseConfigFromEnv(env: NodeJS.ProcessEnv) {
    const kcAdminRealm = env['KEYCLOAK_ADMIN_REALM'] ?? 'master';
    const kcDefaultRealm = env['OIDC_DEFAULT_REALM'] ?? 'users';

    return {
      logLevel: env['LOG_LEVEL'] ?? 'debug',
      auth: {
        groupId: env['KAFKA_AUTH_GROUP_ID'] ?? 'auth',
        name: env['KAFKA_AUTH_NAME'] ?? 'auth',
        prefixUrl: env['AUTH_URL_PREFIX'] ?? 'api',
        registerUri: env['REGISTER_URI'],
        authPort: env['AUTH_PORT'],
      },
      urls: {
        baseUrl: env['BASE_URL'] ?? 'http://localhost:3000',
        proto: env['PROTO'] ?? 'http',
        domain: env['DOMAIN'] ?? 'localhost',
        prefix: env['PREFIX'] ?? '',
      },
      kafka: {
        groupId: env['KAFKA_GROUP_ID'] ?? 'gateway',
        username: env['KAFKA_INTER_BROKER_USER'] ?? 'admin',
        password: env['KAFKA_INTER_BROKER_PASSWORD'] ?? 'admin',
        brokers: env['KAFKA_BROKERS_URL']?.split(',') ?? [
          'localhost:29092',
          'localhost:29094',
        ],
      },
      tracing: {
        host: env['JAEGER_HOST'] ?? 'http://localhost:14268/api/traces',
      },
      keycloak: {
        adminUsername: env['KEYCLOAK_ADMIN_USERNAME'] ?? 'admin',
        adminPassword: env['KEYCLOAK_ADMIN_PASSWORD'] ?? 'admin',
        defaultRealm: kcDefaultRealm,
        adminRealm: kcAdminRealm,
        clientId: env['KEYCLOAK_CLIENT_ID'] ?? 'admin-cli',
        clientSecret: env['KEYCLOAK_CLIENT_SECRET'] ?? 'admin-cli',
        usersClientId: env['KEYCLOAK_USERS_CLIENT_ID'] ?? 'api-user',
        usersClientSecret:
          env['KEYCLOAK_USERS_CLIENT_SECRET'] ??
          'KMAfXEquBhqtGCPlAYzqfBGEascHprzX',
      },
      emailService: {
        host: env['EMAIL_HOST'] ?? 'smtp.gmail.com',
        port: env['EMAIL_PORT'] ?? 465,
        user: env['EMAIL_USER'] ?? 'omda.do.pave@gmail.com',
        pass: env['EMAIL_PASS'] ?? 'xxfk akfz lzgv efgu',
      },
      smsService: {
        sid: env['TWILIO_ACCOUNT_SID'] ?? 'ACdf60f99db4a4d078e91e328c86dfd5c4',
        token: env['TWILIO_AUTH_TOKEN'] ?? '54672c2f0b3c2e1dc9f7991b952f207f',
      },
      OIDC: {
        realms: [kcAdminRealm, kcDefaultRealm],
        host:
          env['OIDC_HOST'] ?? env['KEYCLOAK_HOST'] ?? 'http://localhost:28080',
      },
      Spree: {
        host: env['SPREE_HOST'] ?? 'http://localhost:3000',
        user: env['SPREE_USER'] ?? 'admin',
        pass: env['SPREE_PASS'] ?? '123456',
        clientId:
          env['SPREE_CLIENT_ID'] ??
          'HSyfmlU4aO5xZD6jI9Pa_JvnBikTNyE4Ful1uLtZst8',
        clientSecret:
          env['SPREE_CLIENT_SECRET'] ??
          'DfHTQklA9SUU3CFsKdKn8anlLRCS9kkWN5o-BOejkJY',
      },
      dataBunker: {
        host: env['DATABUNKER_HOST'] ?? 'http://localhost:3030',
        rootToken: env['DATABUNKER_ROOTTOKEN'] ?? 'DEMO',
        masterKey:
          env['DATABUNKER_MASTERKEY'] ??
          '0dc3304a9c8899ff854b53314c37d2ee54296c14447dfd2a',

        dbPGSQL: {
          PGSQLUserName: env['PGSQL_USER_NAME'] ?? 'bunkeruser',
          PGSQLUserPass: env['PGSQL_USER_PASS'] ?? 'userpass',
          PGSQLHost: env['PGSQL_HOST'] ?? 'postgresql',
          PGSQLPort: env['PGSQL_PORT'] ?? '5432',
        },
        dbMySql: {
          mySqlUserName: env['MYSQL_USER_NAME'] ?? '',
          mySqlUserPass: env['MYSQL_USER_PASS'] ?? '',
          mySqlHost: env['MYSQL_HOST'] ?? '',
          mySqlPort: env['MYSQL_PORT'] ?? '',
        },
      },
      dms: {
        s3: {
          bucketURL: env['BUCKET_URL'] ?? 'localhost',
          accessKey: env['S3_ACCESS_KEY'],
          secretAccessKey: env['S3_SECRET_ACCESS_KEY'],
          region: env['S3_REGION'],
          bucketName: env['S3_BUCKET_NAME'],
        },
      },
    };
  }

  static get() {
    return this.loadFromEnv();
  }

  static toJSON() {
    return JSON.stringify(this.get());
  }
}
