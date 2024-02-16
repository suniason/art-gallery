import Head from 'next/head'

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>Art Gallery | About</title>
      </Head>
      <div>
        <div>About [Name of Website]</div>
        <div>Welcome!!!</div>
        <ul>
          <div>Features</div>
          <li>
            <div>Upload and Showcase:</div>
            <div>
              Easily upload your artwork and create a stunning portfolio that
              reflects your artistic journey. Customize your profile to make it
              uniquely yours.
            </div>
          </li>
          <li>
            <div>Discover and Connect:</div>
            <div>
              Explore a diverse range of artwork from talented artists across
              the globe. Connect with fellow creatives, share insights, and
              inspire each other to reach new heights.
            </div>
          </li>
        </ul>
        <div>
          <div>Contact Us</div>
          <div>
            Got questions, suggestions, or just want to say hello? We'd love to
            hear from you! Reach out to us at{' '}
            <a href="mailto:galvezbrett17@gmail.com">galvezbrett17@gmail.com</a>{' '}
            or connect with us on [social media handles]. Thank you for being a
            part of the [Your Art Website Name] community. Together, let's paint
            the world with creativity!
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
