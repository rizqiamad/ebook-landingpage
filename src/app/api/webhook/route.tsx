import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { render } from "@react-email/render";
import { Email } from '@/emails/success';

const {
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  GMAIL_REFRESH_TOKEN,
  GMAIL_SENDER,
} = process.env;

async function getAccessToken() {
  const oAuth2Client = new google.auth.OAuth2(
    GMAIL_CLIENT_ID,
    GMAIL_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oAuth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });
  const accessTokenObj = await oAuth2Client.getAccessToken();
  return accessTokenObj?.token;
}

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  const accessToken = getAccessToken();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_SENDER,
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken,
    },
  } as nodemailer.TransportOptions);

  const emailHtml = await render(<Email url="https://example.com" />);

  await transport.sendMail({
    from: GMAIL_SENDER,
    to: email,
    subject: "Pembayaran Berhasil - Silakan unduh dokumen Anda di sini",
    html: emailHtml,
  });

  return NextResponse.json({ message: "success" });
}
