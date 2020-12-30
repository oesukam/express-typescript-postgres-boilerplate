import 'dotenv/config';
import mail, { MailDataRequired } from '@sendgrid/mail';

const { SENDGRID_API_KEY, NODE_ENV } = process.env;

const isTest = NODE_ENV === 'test';

if (!isTest) {
  mail.setApiKey(SENDGRID_API_KEY);
}

/**
 * @author Olivier
 * @param {Object} msg
 */
const send = async (msg: MailDataRequired): Promise<any> => {
  if (isTest) {
    return Promise.resolve();
  }
  console.log(JSON.stringify(msg))
  try {
    if (!msg.from) {
      msg.from = 'BEACASH <noreply@beacash.com>';
    }
    await mail.send(msg);
  } catch (error) {
    console.log(error.message, error.response, error.response.body.errors);
  }
};

export default send;
