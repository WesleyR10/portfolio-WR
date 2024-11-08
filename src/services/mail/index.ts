import nodemailer from 'nodemailer'

import { env } from '@/env'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: env.EMAIL_SERVER_HOST,
  port: Number(env.EMAIL_SERVER_PORT),
  auth: {
    user: env.EMAIL_USERNAME,
    pass: env.EMAIL_APP_PASSWORD,
  },
})

export const sendContactEmail = async (
  name: string,
  email: string,
  message: string
) => {
  await transporter.sendMail({
    from: `"Contact Form" <wesleyribas2015@gmail.com>`,
    to: 'wesleyribas2015@gmail.com',
    subject: 'Contato pelo Formulário Portfolio',
    html: `<p>Nome: ${name}</p><p>Email: ${email}</p><p>Mensagem: ${message}</p>`,
  })
}
