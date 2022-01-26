import Head from 'next/head'
import { useRouter } from 'next/router'
import ResultsHeader from '../components/ResultsHeader'
import SearchResults from '../components/SearchResults'
import Footer from '../components/Footer'
const API_KEY = process.env.API_KEY
const CONTEXT_KEY = process.env.CONTEXT_KEY
const DUMMY_SEARCH = process.env.DUMMY_SEARCH
import Response from '../response'

function Search({ results }) {
  const router = useRouter()
  return (
    <>
      <div className='sm:grid flex w-full '>
        <Head>
          <title>{router.query.q} - Google Search</title>
          <link rel='icon' href='/google.png' />
        </Head>
        <ResultsHeader />
      </div>
      <SearchResults results={results} />
      <Footer />
    </>
  )
}

export default Search

export async function getServerSideProps(context) {
  const startIndex = isNaN(Number(context.query.start))
    ? '0'
    : Number(context.query.start)
  console.log(startIndex)
  const data =
    DUMMY_SEARCH === 'true'
      ? Response
      : await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.q}&start=${startIndex}]`
        ).then((response) => response.json())
  console.log(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.q}&start=${startIndex}]`
  )

  return {
    props: {
      results: data
    }
  }
}
