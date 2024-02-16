import { UploadDropzone } from '@/utils/uploadthing'

const FormUploadDropzone = ({ endpointname, value, setValue, token }) => {
  return (
    <div className="mx-8 my-4">
      <UploadDropzone
        appearance={{
          button: 'hidden',
          container: ' bg-background border-solid border-accent  rounded-md',
          label: 'text-text hover:text-text',
          allowedContent: 'text-text ',
          uploadIcon: 'text-text',
        }}
        content={{
          allowedContent({ ready, isUploading }) {
            if (!ready) return 'Loading...'
            if (isUploading) return 'Uploading...'
          },
        }}
        endpoint={endpointname}
        config={{ mode: 'auto' }}
        onClientUploadComplete={(res) => {
          setValue({ ...value, [token]: res[0].url })
        }}
        onUploadError={(error) => {
          alert(`ERROR! ${error.message}`)
        }}
      />
    </div>
  )
}

export default FormUploadDropzone
