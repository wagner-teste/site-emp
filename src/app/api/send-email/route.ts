import { NextResponse } from 'next/server';
import { sendEmail as sendUserConfirmationEmail } from '../../../lib/nodemailerConfig'; // Importa a função de envio

export async function POST(req: Request) {
  try {
    const { to, subject, html } = await req.json();

    if (!to || !subject || !html) {
      return NextResponse.json({ message: 'Destinatário, assunto e conteúdo HTML são obrigatórios para o e-mail.' }, { status: 400 });
    }

    // Enviar e-mail de confirmação para o usuário
    await sendUserConfirmationEmail({
      to,
      subject,
      html,
    });

    return NextResponse.json({ message: 'E-mail de confirmação enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar e-mail de confirmação (API /api/send-email):', error);
    return NextResponse.json({ message: 'Erro interno do servidor ao enviar e-mail de confirmação.' }, { status: 500 });
  }
}