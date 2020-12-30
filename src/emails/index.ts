import 'dotenv/config';
import sendgrid from 'config/sendgrid';

const { FRONTEND_DOMAIN, DOMAIN, LOGO_URL } = process.env;

interface ITemplate {
  text: string;
}


export const template = ({ text }: ITemplate): string => `
<div style="background-color:#f9f9f9; font-family: Roboto, Arial, Helvetica, sans-serif; padding: 15px;">
    <div style="margin:0px auto;max-width:640px;background:transparent; text-align: center;">
      <a href="${FRONTEND_DOMAIN}" target="_blank">
        <img height="100" src="${LOGO_URL}" alt="" srcset="">
      </a>
    </div>
    <div style="max-width:640px;margin:0 auto;border-radius:4px;overflow:hidden; background-color: #fff; padding: 10px; border: 1px solid #f0f0f0;">
      <table style="width: 100%"">
        <tr>
          <td style="padding: 15px 0px;">
            ${text}
          </td>
        </tr>
        <tr>
          <td style="word-break:break-word;font-size:0px;">
            <p style="font-size:1px;margin:0px auto;border-top:1px solid #dcddde;width:100%"></p>
          </td>
        </tr>
        <tr>
          <td style="color: #707070; padding: 10px;">
            Need help? Contact our support team via support@${DOMAIN}
          </td>
        </tr>
      </table>
    </div>
    <div style="margin:0px auto;max-width:640px;background:transparent; font-size: 11px;">
      <p style="text-align: center;">
        Sent by oesukam<br>
        Kinshasa, DRCongo
      <p>
    </div>
  </div>
`;

export default sendgrid;
