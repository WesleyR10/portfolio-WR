import { NextResponse } from 'next/server'

import { sendContactEmail } from '@/services/mail'

export async function POST(request: Request) {
  const { fullName, email, message } = await request.json()

  try {
    await sendContactEmail(fullName, email, message)
    return NextResponse.json({ success: 'Email enviado com sucesso!' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Falha ao enviar o email.' },
      { status: 500 }
    )
  }
}
