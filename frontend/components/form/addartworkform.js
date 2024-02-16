import Image from 'next/image'
import FormButton from './input/formbutton'
import FormInput from './input/forminput'
import FormTextArea from './input/formtextarea'
import FormUploadDropzone from './input/formuploaddropzone'

const AddArtworkForm = ({
  handleAddArtwork,
  credentials,
  setCredentials,
  loading,
}) => {
  return (
    <div className="">
      <div>
        <FormInput
          value={credentials}
          setValue={setCredentials}
          token="name"
          name="Artwork Name"
        />
      </div>
      <div>
        <div>
          <FormTextArea
            value={credentials}
            setValue={setCredentials}
            token="description"
            name="Description"
          />
        </div>
        <div>
          <FormUploadDropzone
            value={credentials}
            setValue={setCredentials}
            token="image"
            endpointname="artworkImage"
          />
          <div>
            {credentials.image && (
              <Image
                src={credentials.image}
                alt="Image Uploaded"
                width={200}
                height={200}
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <FormButton
          handleClick={handleAddArtwork}
          name={'Add'}
          loading={loading}
          isDisabled={loading}
        />
      </div>
    </div>
  )
}

export default AddArtworkForm
