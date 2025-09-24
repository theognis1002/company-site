import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <div>
            <footer className="bg-white py-14 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent lg:py-[100px]">
                <div className="container">
                    <div className="grid gap-y-10 gap-x-4 sm:grid-cols-3 lg:grid-cols-5">
                        <div className="relative">
                            <Image src="/assets/images/logo.png" alt="plurk" width={150} height={28} className="h-7 w-auto" />
                            <ul className="mt-12 flex items-center gap-8">
                                <li>
                                    <Link
                                        href="https://www.linkedin.com/company/arclite-technologies/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block p-2 transition hover:scale-110 hover:text-secondary"
                                    >
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-gray-600 dark:text-gray-400 hover:text-secondary transition-colors"
                                        >
                                            <path
                                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                            <Image src="/assets/images/footer-shape.png" alt="footer-shape" width={200} height={100} className="absolute bottom-0 right-0 sm:left-0" />
                            <Image
                                src="/assets/images/footer-shape-dark.png"
                                alt="footer-shape-dark"
                                width={200}
                                height={100}
                                className="absolute bottom-0 right-0 hidden dark:block sm:left-0"
                            />
                        </div>
                        <div>
                            <ul className="flex flex-col gap-3 font-bold">
                                <li className="mb-3 text-lg font-extrabold text-black dark:text-white">Quick Menu</li>
                                <li>
                                    <Link href="/" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        Service
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/team" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        Team
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/about" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        About
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/career" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        Career
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                        <div>
                            <ul className="flex flex-col gap-3 font-bold">
                                <li className="mb-3 text-lg font-extrabold text-black dark:text-white">AI Services</li>
                                <li>
                                    <Link href="/services-detail" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        AI Strategy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services-detail" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        AI Integration
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services-detail" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        AI Automation
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex flex-col gap-3 font-bold">
                                <li className="mb-3 text-lg font-extrabold text-black dark:text-white">Legal</li>
                                <li>
                                    <Link href="/terms-conditions" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        Privacy Policy
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/faq" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        FAQs
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/blog" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex flex-col gap-3 font-bold">
                                <li className="mb-3 text-lg font-extrabold text-black dark:text-white">Information</li>
                                <li>Washington, DC, USA</li>
                                <li>
                                    {/* <a href="tel:+(555) 555-5555" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        +(555) 555-5555
                                    </a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="py-5 dark:border-t-2 dark:border-white/5">
                <div className="container">
                    <div className="items-center justify-between text-center font-bold dark:text-white md:flex">
                        <div>
                            Copyright© {new Date().getFullYear() + ' '}
                            <Link href="/" className="text-primary transition hover:text-secondary">
                                Arclite Technologies, LLC
                            </Link>
                        </div>
                        <div>
                            Need help? Visit the{' '}
                            <Link href="/contact-us" className="text-secondary transition hover:text-primary">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
