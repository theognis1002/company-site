import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const Blogdetail = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>Blog Detail | Arclite Technologies</title>
            </Head>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                            <div className="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                                <h6>AI Technology</h6>
                                <h4 className="!text-white">Understanding Model Context Protocol: The Future of AI Integration</h4>
                                <ul className="items-center justify-center pt-6 sm:flex lg:justify-start">
                                    <li className="flex items-center justify-center">
                                        <img src="/assets/images/sophia-avtar.png" alt="avtar" />
                                        <span className="px-4 font-semibold sm:text-lg">Michael McClelland</span>
                                    </li>
                                    <li className="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1">
                                        August 19, 2025
                                    </li>
                                    <li className="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1">
                                        4 mins read
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="top-0 mt-6 ltr:right-0 rtl:left-0 md:mt-0 lg:absolute"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                            >
                                <img
                                    src="/assets/images/blog-detail-hero.png"
                                    alt="blog-detail-hero"
                                    className="mx-auto h-80 rounded-[32px] object-cover sm:h-[400px] sm:w-[445px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-t from-white to-transparent py-14 dark:bg-none md:py-[100px]">
                <div className="container">
                    <div className="prose max-w-full dark:prose-invert">
                        <h2>What is Model Context Protocol?</h2>
                        <p>
                            Model Context Protocol (MCP) is an open standard that enables AI assistants to securely connect with external data sources and tools. 
                            Developed by Anthropic, MCP provides a universal way for AI systems to access databases, APIs, file systems, and other resources 
                            while maintaining strict security and user control.
                        </p>
                        <p>
                            Unlike traditional integrations that require custom APIs for each service, MCP creates a standardized protocol that works across 
                            different AI assistants and applications. This means developers can build MCP servers once and have them work with any compatible AI system.
                        </p>

                        <h2>How MCP Works</h2>
                        <p>
                            MCP operates through a client-server architecture where AI assistants act as clients connecting to MCP servers. These servers expose 
                            resources, tools, and prompts that the AI can utilize while ensuring all access is controlled and auditable.
                        </p>

                        <h2>Key Benefits</h2>
                        <ul>
                            <li>Standardized integration protocol across AI platforms</li>
                            <li>Enhanced security with controlled access permissions</li>
                            <li>Simplified development for AI-powered applications</li>
                            <li>Seamless connection to existing enterprise systems</li>
                        </ul>

                        <h4>The Future of AI Integration</h4>
                        <p>
                            MCP represents a fundamental shift in how AI assistants interact with the world. By providing a secure, standardized way to access 
                            external resources, it opens up possibilities for more powerful and versatile AI applications across industries.
                        </p>

                        <div className="not-prose grid gap-[30px] pb-12 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="group h-[400px] overflow-hidden rounded-[32px] lg:col-span-2" data-aos="fade-up" data-aos-duration="1000">
                                <img
                                    src="/assets/images/blog-detail-1.png"
                                    alt="blog-detail-1"
                                    className="h-full w-full rounded-[32px] object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="group h-[400px] overflow-hidden rounded-[32px]" data-aos="fade-up" data-aos-duration="1000">
                                <img
                                    src="assets/images/blog-detail-2.png"
                                    alt="blog-detail-2"
                                    className="h-full w-full rounded-[32px] object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>

                        <h2>Getting Started with MCP</h2>
                        <p>
                            Implementing MCP in your applications is straightforward. Developers can create MCP servers using Python, TypeScript, or other supported 
                            languages. These servers can then expose file systems, databases, web APIs, or custom business logic to AI assistants through the 
                            standardized MCP protocol.
                        </p>

                        <h2>Real-World Applications</h2>
                        <p>
                            MCP is already being used to connect AI assistants to Git repositories, databases, cloud services, and enterprise systems. 
                            This enables AI to help with code reviews, data analysis, customer support, and complex business workflows that previously 
                            required manual intervention.
                        </p>
                        <p>
                            As more organizations adopt MCP, we're seeing the emergence of a rich ecosystem of MCP servers that provide AI assistants 
                            with unprecedented capabilities while maintaining the security and control that enterprises require.
                        </p>

                        <div className="not-prose grid gap-[30px] pb-12 sm:grid-cols-2">
                            <div className="group h-[324px] overflow-hidden rounded-[20px]" data-aos="fade-up" data-aos-duration="1000">
                                <img
                                    src="/assets/images/blog-detail-3.png"
                                    alt="blog-detail-3"
                                    className="h-full w-full rounded-[20px] object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="group h-[324px] overflow-hidden rounded-[20px]" data-aos="fade-up" data-aos-duration="1000">
                                <img
                                    src="/assets/images/blog-detail-4.png"
                                    alt="blog-detail-4"
                                    className="h-full w-full rounded-[20px] object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>

                        <h2>Nunc et sem vel diam dignissim</h2>
                        <p>
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of
                            pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame
                            belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogdetail;
