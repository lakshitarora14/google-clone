import Head from "next/head";
import ResultsHeader from "../components/ResultsHeader";
function Search() {
  return <div className = 'sm:grid flex w-full'>
      <Head>
          <title>Google Search</title>
          <link rel='icon' href='/google.png' />
      </Head>
      <ResultsHeader/>
  </div>;
}

export default Search;
