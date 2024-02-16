import { createUploadthing } from 'uploadthing/next-legacy'

const f = createUploadthing()

export const ourFileRouter = {
  profilePhoto: f({
    image: { maxFileSize: '2MB', maxFileCount: 1 },
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log('Upload completed')
  }),
  artworkImage: f({
    image: { maxFileSize: '4MB', maxFileCount: 1 },
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log('Upload completed')
  }),
}
