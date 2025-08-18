import Head from 'next/head';
import CounterComponent from '../components/CounterComponent';
import ServicesHero from '../components/services/ServicesHero';
import ServicesGrid from '../components/services/ServicesGrid';
import ProcessSteps from '../components/services/ProcessSteps';
import TechnologiesGrid from '../components/services/TechnologiesGrid';
import NewsletterSection from '../components/services/NewsletterSection';
// Uncomment these components if you want to use them
// import VideoModal from '../components/services/VideoModal';
// import PartnersSlider from '../components/services/PartnersSlider';
// import Testimonial from '../components/Testimonial';
// import ProjectSlider from '../components/ProjectSlider';

const Services = () => {
    return (
        <div>
            <Head>
                <title>Services | Arclite Technologies</title>
            </Head>
            
            <ServicesHero />
            <ServicesGrid />

            <section className="py-14 lg:py-[100px]">
                <CounterComponent />
            </section>

            {/* <ProjectSlider title1="Our Project" title2="Some of our finest work." /> */}
            <ProcessSteps />
            {/* <VideoModal /> */}
            <TechnologiesGrid />
            {/* <PartnersSlider /> */}
            {/* <Testimonial /> */}
            <NewsletterSection />
        </div>
    );
};

export default Services;