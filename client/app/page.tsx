import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Posts from '@/components/Posts';
import Titles from '@/components/Titles';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-2">
      <Hero />
      <Posts />
      <Titles />
      <Features />
    </main>
  )
}

export default Home;