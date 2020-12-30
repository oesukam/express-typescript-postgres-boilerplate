import User from 'models/User';
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'test' | 'development' | 'production';
      readonly PORT?: string;
      readonly PWD: string;
      readonly DATABASE_URL: string;
      readonly DATABASE_URL_DEV: string;
      readonly DATABASE_URL_TEST: string;
    }

    interface Error {
      status?: number;
    }
  }

  namespace Express {
    interface Request {
    }
  }

  interface ResponseError extends Error {
    status?: number;
  }
}

export {};
