import Hero from "../components/home/hero";
import CompanyOverview from "../components/home/overview";
import WhyChooseUs from "../components/home/whyUs";
import Process from "../components/home/process";
import Certifications from "../components/home/certifications";
import CTABanner from "../components/home/cta";

export default function Home() {
    return (
        <>
            <Hero />
            <CompanyOverview />
            <WhyChooseUs />
            <Process />
            <Certifications />
            <CTABanner />
        </>
    );
}
