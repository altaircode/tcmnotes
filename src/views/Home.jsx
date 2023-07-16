import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Pricing } from '../components/Pricing';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Pricing />
            <Contact />
            <Footer />
        </>
    )
}