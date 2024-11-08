import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {},
  client: {},
  shared: {
    NEXT_PUBLIC_APP_URL: z.string(),
    AUTH_SECRET: z.string(),
    EMAIL_SERVER_HOST: z.string(),
    EMAIL_SERVER_PORT: z.string(),
    EMAIL_USERNAME: z.string(),
    EMAIL_APP_PASSWORD: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT,
    EMAIL_USERNAME: process.env.EMAIL_USERNAME,
    EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD,
  },
})
