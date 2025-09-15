
# Modern TypeScript Backend Setup Guide

### Create Project Folder & Initialize PNPM
```bash
pnpm init -y
```

---

### Install Runtime Dependencies

```bash
pnpm add express cors cookie-parser dotenv mongoose jsonwebtoken bcrypt
```

---

### Install Dev Dependencies (TypeScript + Types)

```bash
pnpm add -D typescript tsx nodemon @types/node @types/express @types/cors @types/cookie-parser prettier
```

---

### Initialize TypeScript

```bash
npx tsc --init
```

> Optional: edit `tsconfig.json` for Node + ESM + strict typing:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "verbatimModuleSyntax": true
  },
  "include": ["src/**/*"]
}
```

---

### Create `.env` File (Optional for Config)

```env
PORT=8000
MONGODB_URI=your-mongodb-uri
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=your-secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your-secret
REFRESH_TOKEN_EXPIRY=10d
```

---

### Add Dev Scripts in `package.json`

```json
"scripts": {
  "dev": "tsx watch src/index.ts",
  "start": "node dist/index.js"
}
```

