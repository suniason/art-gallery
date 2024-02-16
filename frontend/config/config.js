import dotenv from 'dotenv'

dotenv.config()

const config = {
  beport: process.env.NEXT_PUBLIC_BE_PORT || '',
  utsecret: process.env.NEXT_PUBLIC_UPLOADTHING_SECRET || '',
  utid: process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID || '',
  nauthsecret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET || '',
  nauthurl: process.env.NEXT_PUBLIC_NEXTAUTH_URL || '',
}

export default config
