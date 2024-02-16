import { UploadButton } from '@/utils/uploadthing'

const FormUploadButton = ({ endpointname, value, setValue, token }) => {
  return (
    <>
      <UploadButton
        appearance={{
          button:
            'bg-accent ut-uploading:bg-accent/80 ut-uploading:bg-accent/80 ut-readying:bg-accent/80 after:bg-accent/80 font-semibold w-full text-primary  rounded-md',
        }}
        endpoint={endpointname}
        onClientUploadComplete={(res) => {
          setValue({ ...value, [token]: res[0].url })
        }}
        onUploadError={(error) => {
          alert(`ERROR! ${error.message}`)
        }}
      />
    </>
  )
}

export default FormUploadButton
