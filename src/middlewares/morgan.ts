import morganJS from 'morgan';
import moment from 'dayjs';
import logger from 'helpers/logger';

const morgan = morganJS(
  (tokens, req: any, res: any): any =>
    [
      '\n',
      `Origin: ${req.headers.origin}`,
      `IP Address: ${req.clientIp}`,
      `Country: ${req?.userAgentLocation?.country}`,
      moment().format('YYYY-MM-DD hh:mm:ss:SS'),
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms',
      '\n',
      '-'.repeat(50),
      `\nHeaders: ${JSON.stringify(req.headers)}\n`,
      `\nBody: ${JSON.stringify({ ...(req.body || {}), password: undefined })}\n`,
    ].join(' '),
  {
    stream: {
      write(message: string): any {
        logger.info(message);
      },
    },
  },
);

export default morgan;
