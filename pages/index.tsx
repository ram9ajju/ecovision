import type { NextPage } from 'next'
import HeroImgScroller from '../components/homePage/HeroImgScroller';
import HowItWorks from '../components/homePage/HowItWorks';
import RecentListing from '../components/homePage/RecentListing';
import StartListing from '../components/homePage/StartListing';
import Layout from '../components/Layouts/BaseLayout';
import Footer from '../components/Layouts/Footer';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <HeroImgScroller />
        <HowItWorks />
        <RecentListing />
        <StartListing />

        <Footer />
      </div>
    </Layout>
    
    // <div className="flex min-h-screen flex-col items-center justify-center">
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
      
    //   <Header />
      
    //   <HeroImgScroller />
    //   <HowItWorks />
    //   <RecentListing />
    //   <StartListing />
      
      
      
    //  <footer className="flex h-24 w-full items-center justify-center border-t">
    //     <a
    //       className="flex items-center justify-center gap-2"
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //     </a>
    //   </footer>
    // </div>
  )
}

export default Home
