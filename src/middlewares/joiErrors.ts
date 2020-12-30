import { NextFunction, Response } from 'express';
import { isCelebrate, CelebrateInternalError } from 'celebrate';
import { BAD_REQUEST } from 'constants/statusCodes';
import jsonResponse from 'helpers/jsonResponse';

const joiErrors = () => (
  err: CelebrateInternalError,
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response<any> => {
  if (!isCelebrate(err)) return next(err);
  const joiError = err.joi.details[0];
  const errors = {
    [joiError?.context?.key as string]: joiError,
  };

  return jsonResponse({
    res,
    status: BAD_REQUEST,
    message: joiError.message,
    errors,
  });
};

export default joiErrors;
