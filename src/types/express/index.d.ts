import User from 'models/User';

declare namespace Express {
  interface Request {
  }
}

interface ResponseError extends Error {
  status?: number;
}
