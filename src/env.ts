import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {},
  client: {},
  shared: {
    NEXT_PUBLIC_APP_URL: z.string(),
    AUTH_SECRET: z.string(),
    READY_PLAYER_ME_SUBDOMAIN: z.string(),
    READY_PLAYER_ME_APP_ID: z.string(),
    READY_PLAYER_ME_ORG_ID: z.string(),
    READY_PLAYER_ME_MY_AVATAR_URL: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    READY_PLAYER_ME_SUBDOMAIN: process.env.READY_PLAYER_ME_SUBDOMAIN,
    READY_PLAYER_ME_APP_ID: process.env.READY_PLAYER_ME_APP_ID,
    READY_PLAYER_ME_ORG_ID: process.env.READY_PLAYER_ME_ORG_ID,
    READY_PLAYER_ME_MY_AVATAR_URL: process.env.READY_PLAYER_ME_MY_AVATAR_URL,
  },
})
