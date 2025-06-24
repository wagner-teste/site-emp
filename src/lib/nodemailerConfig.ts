import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: parseInt(process.env.NODEMAILER_PORT || '587', 10),
  secure: process.env.NODEMAILER_SECURE === 'true',
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
},
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  try {
    await transporter.sendMail({
      from: process.env.NODEMAILER_FROM_EMAIL || process.env.NODEMAILER_USER,
      to,
      subject,
      html,
    });
    console.log('E-mail de confirmação enviado com sucesso para:', to); 
  } catch (err: any) { 
    console.error('--- INÍCIO DO ERRO DETALHADO DO NODEMAILER ---');
    console.error(`Falha ao enviar e-mail para: ${to}`);
    if (err && typeof err === 'object' && err.message) {
      console.error('Mensagem do erro:', err.message);
    }
    if (err && typeof err === 'object' && err.code) {
      console.error('Código do erro (Nodemailer/SMTP):', err.code);
    }
    if (err && typeof err === 'object' && err.response) {
      console.error('Resposta do servidor SMTP:', err.response);
    }
    console.error('Objeto de erro completo:', err); 
    console.error('--- FIM DO ERRO DETALHADO DO NODEMAILER ---');

    // Manter o throw para que a API Route ainda saiba que houve falha
    throw new Error('Falha ao enviar e-mail. Verifique os logs do servidor para mais detalhes.');
  }
}