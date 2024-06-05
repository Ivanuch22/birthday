import {
    getConnection
} from '../../../src/lib/db';
import decryptObject from '@/utils/decryptObject';
const nodemailer = require("nodemailer");

export async function POST(req, res) {

    const data = await req.json();

    const {
        email
    } = data;

    const connection = await getConnection();

    try {
        const [results] = await connection.query('SELECT password FROM users WHERE email = ?', [email]);

        if (results.length === 0) {
            return Response.json({
                error: 'User not found'
            }, {
                status: 404
            });
        }

        const {
            password
        } = results[0];

        const decryptedPassword = decryptObject(password, process.env.NEXT_SECRET_KEY);
        console.log("🚀 ~ POST ~ decryptedPassword:", decryptedPassword)

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
            // tls: {
            //     rejectUnauthorized: false
            // },
            // dkim: {
            //     domainName: process.env.DOMAIN_NAME,
            //     keySelector: 'dkim',
            //     privateKey: process.env.DKIM_PRIVATE_KEY,
            // }
        });

        const sendPasswordReminder = (email) => {
            console.log("start sending emails")
            const mailOptions = {
                from: `reminder@366dates.com`,
                to: email,
                subject: 'Password Reminder',
                text: 'Your password is: ' + decryptedPassword,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Email sent: ' + info.response);
            });
        };

        sendPasswordReminder(email);

        return Response.json({
            message: 'Password reminder sent'
        });
    } catch (error) {
        console.error('Error decrypting user password:', error);
        return Response.json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    } finally {
        connection.end();
    }
}