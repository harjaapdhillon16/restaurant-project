import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';
const sendGridAPI = process.env.NEXT_PUBLIC_SENDGRID_KEY;
sgMail.setApiKey(sendGridAPI as string);

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, numberOfGuests, remarks } = data;
  console.log(data);
  const message = {
    to: email, // Change to your receiving email address
    from: 'harjaapdhillon.hrizn@gmail.com', // Change to your verified sender email in SendGrid
    subject: 'New Table Booking',
    text: `Booking Details: \nName: ${name} \nEmail: ${email} \nNumber of Guests: ${numberOfGuests} \nRemarks: ${remarks}`,
  };
  try {
    await sgMail.send(message);
    return NextResponse.json({ message: 'Message Successfully Sent' });
  } catch (err) {
    console.log(err);
  }
}
