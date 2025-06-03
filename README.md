# Nx Monorepo - Angular + NestJS + Supabase

A modern full-stack application built with Nx monorepo architecture, featuring Angular frontend, NestJS backend, and Supabase as the database and authentication provider.

## 🏗️ Architecture

This monorepo contains:

- **Frontend**: Angular application with modern UI components
- **Backend**: NestJS API with TypeScript
- **Database**: Supabase (PostgreSQL) with real-time capabilities
- **Authentication**: Supabase Auth
- **Monorepo Management**: Nx for efficient development and build processes

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Docker** (for containerized deployment)
- **Git**

### Server Requirements

- **OS**: Ubuntu 20.04 or higher
- **CPU**: 2 vCPUs minimum
- **Memory**: 4GB RAM
- **Storage**: 80GB disk space
- **Docker**: Latest version

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create environment files for both frontend and backend:

#### Backend Environment (`.env`)

```bash
# Database
DATABASE_URL="your-supabase-database-url"
SUPABASE_URL="your-supabase-project-url"
SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"

# Application
PORT=3000
NODE_ENV=development
JWT_SECRET="your-jwt-secret"

# CORS
CORS_ORIGIN="http://localhost:4200"
```

#### Frontend Environment (`apps/frontend/src/environments/environment.ts`)

```typescript
export const environment = {
  production: false,
  supabaseUrl: 'your-supabase-project-url',
  supabaseAnonKey: 'your-supabase-anon-key',
  apiUrl: 'http://localhost:3000/api',
};
```

### 4. Supabase Setup

1. Create a new project at [Supabase](https://supabase.com)
2. Copy your project URL and anon key
3. Set up your database tables (see [Database Schema](#database-schema))
4. Configure authentication providers if needed

### 5. Run the Application

#### Development Mode

```bash
# Start both frontend and backend
npm run dev

# Or start individually
npm run start:frontend
npm run start:backend
```

#### Production Mode

```bash
# Build the applications
npm run build

# Start production server
npm run start:prod
```

## 🛠️ Development

### Available Scripts

| Command                  | Description                                         |
| ------------------------ | --------------------------------------------------- |
| `npm run dev`            | Start both frontend and backend in development mode |
| `npm run start:frontend` | Start Angular development server                    |
| `npm run start:backend`  | Start NestJS development server                     |
| `npm run build`          | Build both applications for production              |
| `npm run build:frontend` | Build Angular application                           |
| `npm run build:backend`  | Build NestJS application                            |
| `npm run test`           | Run all tests                                       |
| `npm run test:frontend`  | Run Angular tests                                   |
| `npm run test:backend`   | Run NestJS tests                                    |
| `npm run lint`           | Lint all projects                                   |
| `npm run format`         | Format code with Prettier                           |

### Project Structure

```
├── apps/
│   ├── frontend/              # Angular application
│   │   ├── src/
│   │   │   ├── app/
│   │   │   ├── assets/
│   │   │   └── environments/
│   │   └── project.json
│   └── backend/               # NestJS application
│       ├── src/
│       │   ├── app/
│       │   ├── auth/
│       │   └── main.ts
│       └── project.json
├── libs/                      # Shared libraries
│   ├── shared/
│   │   ├── interfaces/
│   │   ├── utils/
│   │   └── constants/
│   └── ui/                    # Shared UI components
├── tools/                     # Build tools and scripts
├── docker-compose.yml
├── Dockerfile
├── nx.json
├── package.json
└── README.md
```

## 🗄️ Database Schema

### User Management

Supabase handles user authentication automatically. Additional user profile data can be stored in custom tables:

```sql
-- User profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);
```

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

1. **Build and run with Docker Compose:**

```bash
docker-compose up --build
```

2. **For production deployment:**

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

### Manual Docker Build

1. **Build the Docker image:**

```bash
docker build -t your-app-name .
```

2. **Run the container:**

```bash
docker run -p 3000:3000 -p 4200:4200 --env-file .env your-app-name
```

### Docker Configuration

#### Dockerfile

```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM node:18-alpine AS production
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

EXPOSE 3000 4200

CMD ["npm", "run", "start:prod"]
```

## 🚀 Production Deployment

### Server Setup (Ubuntu 20.04+)

1. **Update system packages:**

```bash
sudo apt update && sudo apt upgrade -y
```

2. **Install Docker:**

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

3. **Install Docker Compose:**

```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

4. **Clone and deploy:**

```bash
git clone <your-repo>
cd <your-repo>
cp .env.example .env
# Edit .env with your production values
docker-compose -f docker-compose.prod.yml up -d
```

### Environment Variables for Production

```bash
NODE_ENV=production
PORT=3000
DATABASE_URL="your-production-supabase-url"
SUPABASE_URL="your-production-supabase-url"
SUPABASE_ANON_KEY="your-production-anon-key"
CORS_ORIGIN="https://yourdomain.com"
```

## 🔧 Configuration

### Nx Configuration

The `nx.json` file contains workspace configuration:

```json
{
  "npmScope": "your-app",
  "affected": {
    "defaultBase": "main"
  },
  "tasksRunnerOptions": {
    "default": {
      "runner": "nx/tasks-runners/default",
      "options": {
        "cacheableOperations": ["build", "lint", "test", "e2e"]
      }
    }
  }
}
```

### Angular Configuration

Key Angular configurations in `apps/frontend/project.json`:

- Build optimization for production
- Development server proxy configuration
- Testing setup with Jest

### NestJS Configuration

Key NestJS configurations:

- Global pipes and guards
- Swagger API documentation
- CORS configuration
- Database connection setup

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run e2e tests
npm run e2e

# Generate test coverage
npm run test:coverage
```

### Test Structure

- **Unit Tests**: Individual component/service testing
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Full application workflow testing

## 📊 Monitoring and Logging

### Application Monitoring

- Health check endpoints available at `/health`
- Structured logging with Winston (NestJS)
- Error tracking and reporting

### Performance Monitoring

```bash
# Monitor application performance
docker stats

# View application logs
docker-compose logs -f
```

## 🔒 Security

### Security Measures Implemented

- **Authentication**: Supabase Auth with JWT tokens
- **Authorization**: Role-based access control
- **CORS**: Configured for production domains
- **Input Validation**: Class-validator for API inputs
- **Rate Limiting**: Request throttling middleware
- **Environment Variables**: Sensitive data protection

### Security Best Practices

- Keep dependencies updated
- Use HTTPS in production
- Implement proper error handling
- Regular security audits
- Database query sanitization

## 📈 Performance Optimization

### Frontend Optimization

- Lazy loading for Angular modules
- OnPush change detection strategy
- Tree shaking and bundle optimization
- Service worker for caching

### Backend Optimization

- Database connection pooling
- Response caching strategies
- Async/await for non-blocking operations
- Compression middleware

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write tests for new features
- Update documentation as needed

## 📄 API Documentation

API documentation is available at `/api/docs` when running the backend server. The documentation is generated using Swagger/OpenAPI.

### Key Endpoints

- `GET /api/health` - Health check
- `POST /api/auth/login` - User authentication
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Kill process using port 4200
lsof -ti:4200 | xargs kill -9
```

#### Database Connection Issues

- Verify Supabase URL and keys
- Check network connectivity
- Ensure database is accessible

#### Build Failures

```bash
# Clear Nx cache
npx nx reset

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Docker Issues

```bash
# Clean Docker system
docker system prune -a

# Rebuild without cache
docker-compose build --no-cache
```

## 📞 Support

For support and questions:

- Create an issue in the repository
- Check existing documentation
- Review logs for error details

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Nx](https://nx.dev/) - Smart, fast and extensible build system
- [Angular](https://angular.io/) - Platform for building mobile and desktop web applications
- [NestJS](https://nestjs.com/) - Progressive Node.js framework
- [Supabase](https://supabase.com/) - Open source Firebase alternative

---

**Happy coding! 🚀**
