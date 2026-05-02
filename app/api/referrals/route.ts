import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const referralName = formData.get('referralName') as string;
    const organization = formData.get('organization') as string;
    const contactNumber = formData.get('contactNumber') as string;
    const email = formData.get('email') as string;
    const proposedCareSetting = formData.get('proposedCareSetting') as string;
    const briefOverview = formData.get('briefOverview') as string;
    const file = formData.get('file') as File;

    // Validate required fields
    if (!referralName || !organization || !contactNumber || !email || !proposedCareSetting || !file) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure your email service (Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_EMAILJS_USER,
        pass: process.env.NEXT_PUBLIC_EMAILJS_PASSWORD,
      },
    });

    // Convert file to buffer
    const fileBuffer = await file.arrayBuffer();

    // Professional HTML email template
    const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #342A13; color: #FAF8F4; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .header h1 { margin: 0; font-size: 24px; }
            .header p { margin: 10px 0 0 0; font-size: 14px; }
            .section { margin-bottom: 20px; border: 1px solid #E5E7EB; padding: 15px; border-radius: 8px; }
            .section h3 { color: #AD9451; margin-top: 0; margin-bottom: 15px; font-size: 16px; }
            .field { margin-bottom: 12px; }
            .label { font-weight: bold; color: #1F2933; font-size: 14px; }
            .value { color: #6B7280; margin-top: 4px; font-size: 14px; word-wrap: break-word; }
            .footer { background-color: #F9F7F4; padding: 15px; border-radius: 8px; text-align: center; font-size: 12px; color: #6B7280; }
            .note { background-color: #FDE8D1; border: 1px solid #AD9451; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
            .note p { margin: 0; font-size: 14px; color: #1F2933; }
            .note strong { color: #AD9451; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Referral Submission</h1>
                <p>A new referral has been submitted to Terebinth Limited</p>
            </div>

            <div class="section">
                <h3>Referrer Information</h3>
                <div class="field">
                    <div class="label">Referral Name:</div>
                    <div class="value">${referralName}</div>
                </div>
                <div class="field">
                    <div class="label">Organization/Local Authority:</div>
                    <div class="value">${organization}</div>
                </div>
                <div class="field">
                    <div class="label">Contact Number:</div>
                    <div class="value">${contactNumber}</div>
                </div>
                <div class="field">
                    <div class="label">Email Address:</div>
                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
            </div>

            <div class="section">
                <h3>Referral Details</h3>
                <div class="field">
                    <div class="label">Proposed Care Setting:</div>
                    <div class="value">${proposedCareSetting}</div>
                </div>
                <div class="field">
                    <div class="label">Brief Overview of Needs:</div>
                    <div class="value">${briefOverview || 'Not provided'}</div>
                </div>
                <div class="field">
                    <div class="label">Attached Document:</div>
                    <div class="value"><strong>${file.name}</strong></div>
                </div>
            </div>

            <div class="note">
                <p><strong>✓ File Successfully Attached</strong><br>The care plan/assessment file has been securely attached to this email.</p>
            </div>

            <div class="footer">
                <p style="margin: 0;">This is an automated referral notification from Terebinth Limited.</p>
                <p style="margin: 10px 0 0 0;"><strong>For urgent matters:</strong><br>Phone: 01253 341550 | Email: enquiries@terebinthltd.com</p>
            </div>
        </div>
    </body>
    </html>
    `;

    // Send email with attachment
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAILJS_USER,
      to: 'enquiries@terebinthltd.com',
      replyTo: email,
      subject: `New Referral Submission - ${referralName} from ${organization}`,
      html: htmlTemplate,
      attachments: [
        {
          filename: file.name,
          content: Buffer.from(fileBuffer),
          contentType: file.type,
        },
      ],
    });

    return NextResponse.json({ success: true, message: 'Referral submitted successfully' });
  } catch (error) {
    console.error('Referral API Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit referral. Please try again later.' },
      { status: 500 }
    );
  }
}
