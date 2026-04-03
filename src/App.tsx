import { Nav }           from './components/Nav';
import { Hero }          from './components/Hero';
import { Ticker }        from './components/Ticker';
import { HowItWorks }    from './components/HowItWorks';
import { AudienceSplit } from './components/AudienceSplit';
import { Mission }       from './components/Mission';
import { Manifesto }     from './components/Manifesto';
import { Footer }        from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <HowItWorks />
        <AudienceSplit />
        <Mission />
        <Manifesto />
      </main>
      <Footer />
    </>
  );
}
