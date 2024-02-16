import config from '@/config/config'
import { ourFileRouter } from '@/server/uploadthing'
import { createRouteHandler } from 'uploadthing/next-legacy'

export default createRouteHandler({
  router: ourFileRouter,
  config: {
    uploadthingId: config.utid,
    uploadthingSecret: config.utsecret,
  },
})
