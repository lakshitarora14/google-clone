import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Form from '../components/Form'
export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google</title>
        <meta name='description' content='Google.com' />
        <link rel='icon' href='/google.png' />
      </Head>
      <Header/>
      <Form/>
      <Footer/>
    </div>
  )
}
