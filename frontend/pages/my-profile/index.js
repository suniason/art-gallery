import MyArtCard from '@/components/card/my-artcard'
import EditProfileForm from '@/components/form/editprofileform'
import config from '@/config/config'
import { checkAuth } from '@/hooks/auth'
import useEditProfile from '@/hooks/useeditprofile'
import useGet from '@/hooks/useget'
import Head from 'next/head'
import { useEffect } from 'react'

const MyProfilePage = () => {
  checkAuth()
  const {
    isDisabled,
    setIsDisabled,
    credentials,
    setCredentials,
    setPrevCredentials,
    handleEdit,
    handleSave,
    handleCancel,
    loading: isPatching,
  } = useEditProfile()

  const [fetchData, data, loading] = useGet(`${config.beport}/api/user`, true)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (data) {
      setCredentials(data)
      setPrevCredentials(data)
    }
  }, [data])

  if (!data || loading) return <p>Loading...</p>

  return (
    <>
      <Head>
        <title>Art Gallery | My Profile</title>
      </Head>
      <div>
        <EditProfileForm
          isDisabled={isDisabled || isPatching}
          setIsDisabled={setIsDisabled}
          handleEdit={handleEdit}
          handleCancel={handleCancel}
          handleSave={handleSave}
          credentials={credentials}
          setCredentials={setCredentials}
        />
      </div>
      <hr className="my-10 border-2" />
      <div className="my-10">
        <div>List of Artworks</div>
        {data && (
          <div className="flex h-52 relative gap-5 justify-stretch">
            {data?.artwork.map((val, index) => (
              <MyArtCard
                key={index}
                image={val.image}
                name={val.name}
                slug={val.slug}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default MyProfilePage
