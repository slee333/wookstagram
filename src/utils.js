import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import jwt from "jsonwebtoken";

// JS to create secrets or etc
// Random String generator: Math.random().toString(36).substring(2, 8);
export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

// 이건 외부에서 사용하지 않을거. Export 안해도 됨. 외부에선 sendSecretMail을 사용.
// 이메일 주소와 형식에 상관없이 이메일을 보낼 수 있다
const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

//외부로 export 되는뇨석
export const sendSecretmail = (address, secret) => {
  const email = {
    from: "somewhere@wook.com",
    to: address,
    subject: "Login Secret from WOOKSTAGRAM",
    html: `Hello! Your login secret is <strong>${secret}<strong>. <br/>Go to your site and log in with it`
  };
  sendMail(email);
};

//Encrypting user token
export const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET);