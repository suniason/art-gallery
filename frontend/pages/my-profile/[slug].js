import EditArtworkForm from '@/components/form/editartworkform'
import config from '@/config/config'
import { checkArtworkUser, checkAuth } from '@/hooks/auth'
import useEditArtwork from '@/hooks/useeditartwork'
import useGet from '@/hooks/useget'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const EditArtworkPage = (props) => {
  const route = useRouter()
  checkAuth(route)
  const {
    isDisabled,
    setPrevCredentials,
    credentials,
    setCredentials,
    handleEdit,
    handleSave,
    handleCancel,
    deleting,
    patching,
    handleDelete,
  } = useEditArtwork()
  const [fetchData, data, loading] = useGet(
    `${config.beport}/api/artworks/${props.slug}`,
    true
  )

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (data) {
      if (checkArtworkUser(data.user.id)) route.replace('/gallery')
      else {
        setCredentials(data)
        setPrevCredentials(data)
      }
    }
  }, [data])

  if (!data || loading) return <p>Loading...</p>

  return (
    <>
      <Head>
        <title>{`Art Gallery | ${credentials?.name ?? ''}`}</title>
      </Head>

      <div>
        <EditArtworkForm
          credentials={credentials}
          setCredentials={setCredentials}
          isDisabled={isDisabled || deleting || patching}
          handleEdit={handleEdit}
          handleCancel={handleCancel}
          handleSave={handleSave}
          handleDelete={handleDelete}
        />
      </div>
    </>
  )
}

export function getServerSideProps(context) {
  const { params } = context
  const { slug } = params

  return { props: { slug: slug } }
}

export default EditArtworkPage
