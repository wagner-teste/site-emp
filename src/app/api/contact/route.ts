// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { sendEmail as sendAdminEmail } from '../../../lib/nodemailerConfig';

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, service, message } = await req.json();

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' }, { status: 400 });
    }

    const adminEmailTo = process.env.NODEMAILER_TO_EMAIL as string;
    if (!adminEmailTo) {
      console.error('NODEMAILER_TO_EMAIL não está configurado nas variáveis de ambiente.');
      return NextResponse.json({ message: 'Configuração de e-mail do administrador ausente.' }, { status: 500 });
    }

    // --- E-MAIL PARA O ADMINISTRADOR ---
    const adminEmailSubject = `Novo Contato do Site: ${name} (${service})`; 
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #2563eb;">Novo Contato Recebido!</h1>
        <p>Você recebeu uma nova mensagem do formulário de contato do seu site:</p>
        <ul style="list-style-type: none; padding: 0;">
          <li><strong>Nome:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Telefone:</strong> ${phone}</li>
          <li><strong>Empresa:</strong> ${company || 'Não informado'}</li>
          <li><strong>Serviço de Interesse:</strong> ${service}</li>
        </ul>
        <h2 style="color: #2563eb;">Mensagem:</h2>
        <p style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; background-color: #f9f9f9;">
          ${message}
        </p>
        <p style="font-size: 0.9em; color: #777; margin-top: 20px;">
          Esta mensagem foi enviada através do formulário de contato do seu site.
        </p>
      </div>
    `;

    await sendAdminEmail({
      to: adminEmailTo,
      subject: adminEmailSubject,
      html: adminEmailHtml,
    });


    // --- NOVO: E-MAIL DE CONFIRMAÇÃO PARA O USUÁRIO ---
    const userEmailSubject = `Confirmação de Contato - PrimeCode Solutions`; // Assunto para o usuário
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #2563eb;">Olá ${name},</h1>
        <p>Obrigado por entrar em contato com a PrimeCode Solutions!</p>
        <p>Recebemos sua mensagem e entraremos em contato com você o mais breve possível.</p>
        <p><strong>Detalhes da sua mensagem:</strong></p>
        <ul style="list-style-type: none; padding: 0;">
          <li><strong>Serviço de Interesse:</strong> ${service}</li>
          <li><strong>Mensagem:</strong> ${message}</li>
        </ul>
        <p>Atenciosamente,</p>
        <p>A Equipe da PrimeCode Solutions</p>
        <p style="font-size: 0.9em; color: #777; margin-top: 20px;">
          Este é um e-mail automático, por favor, não responda a esta mensagem.
        </p>
      </div>
    `;

    await sendAdminEmail({ // Reutiliza a mesma função de envio
      to: email, 
      subject: userEmailSubject,
      html: userEmailHtml,
    });

    // Se tudo correr bem, retorna sucesso
    return NextResponse.json({ message: 'Formulário recebido com sucesso! E-mail de confirmação enviado.' }, { status: 200 });

  } catch (error) {
    console.error('Erro no processamento do formulário (API /api/contact):', error);
    return NextResponse.json({ message: (error as Error).message || 'Erro interno do servidor ao processar o formulário.' }, { status: 500 });
  }
}