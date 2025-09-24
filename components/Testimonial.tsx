import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const Testimonial = ({
    showTitle = true,
    type = 'common',
    feedbacks = [
        {
            id: 1,
            name: 'Joseph Edwards',
            role: 'Push Pressure',
            thumbnail: '/assets/images/testimonials/1.png',
            message: "Amazing value at base level. Real scan happened because real pentesting does take actual processing time and power. [~37 min] It found the ones I knew about, and one I didn't.",
        },
        {
            id: 2,
            name: 'Trevie Sweets',
            role: 'Ballast',
            thumbnail: '/assets/images/testimonials/2.png',
            message: "Found a bunch of security holes I had no clue about. 10/10 would recommend 👍",
        },
    ],
    className = '',
}) => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <section className={`relative bg-black py-14 dark:bg-transparent lg:py-[100px] ${className}`}>
            {type.toLowerCase() === 'common' && (
                <div className="absolute top-0 ltr:right-0 rtl:left-0">
                    <svg width="758" height="741" viewBox="0 0 758 741" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.03">
                            <ellipse
                                opacity="0.1"
                                cx="752"
                                cy="370.646"
                                rx="750"
                                ry="749.646"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                            <path
                                opacity="0.1"
                                d="M1443.13 370.646C1443.13 752.153 1133.7 1061.43 752 1061.43C370.296 1061.43 60.8655 752.153 60.8655 370.646C60.8655 -10.8606 370.296 -320.134 752 -320.134C1133.7 -320.134 1443.13 -10.8606 1443.13 370.646Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <ellipse
                                opacity="0.2"
                                cx="752"
                                cy="370.646"
                                rx="634.561"
                                ry="634.207"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                            <path
                                opacity="0.3"
                                d="M1328.4 370.646C1328.4 688.789 1070.34 946.696 752 946.696C433.66 946.696 175.596 688.789 175.596 370.646C175.596 52.5037 433.66 -205.403 752 -205.403C1070.34 -205.403 1328.4 52.5037 1328.4 370.646Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <ellipse
                                opacity="0.4"
                                cx="752"
                                cy="370.646"
                                rx="519.83"
                                ry="519.476"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                            <path
                                opacity="0.5"
                                d="M1211.55 370.646C1211.55 624.251 1005.8 829.84 752 829.84C498.197 829.84 292.452 624.251 292.452 370.646C292.452 117.041 498.197 -88.5479 752 -88.5479C1005.8 -88.5479 1211.55 117.041 1211.55 370.646Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <path
                                opacity="0.6"
                                d="M1155.6 370.646C1155.6 593.351 974.903 773.891 752 773.891C529.097 773.891 348.401 593.351 348.401 370.646C348.401 147.942 529.097 -32.5986 752 -32.5986C974.903 -32.5986 1155.6 147.942 1155.6 370.646Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <ellipse
                                opacity="0.7"
                                cx="752"
                                cy="370.646"
                                rx="350.567"
                                ry="350.212"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                            <path
                                opacity="0.8"
                                d="M1040.16 370.647C1040.16 529.596 911.148 658.453 752 658.453C592.852 658.453 463.84 529.596 463.84 370.647C463.84 211.698 592.852 82.8408 752 82.8408C911.148 82.8408 1040.16 211.698 1040.16 370.647Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <ellipse
                                opacity="0.9"
                                cx="752"
                                cy="370.646"
                                rx="223.088"
                                ry="222.734"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                            <path
                                d="M909.848 370.646C909.848 457.624 839.18 528.14 752 528.14C664.82 528.14 594.152 457.624 594.152 370.646C594.152 283.667 664.82 213.151 752 213.151C839.18 213.151 909.848 283.667 909.848 370.646Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <ellipse
                                cx="752"
                                cy="370.646"
                                rx="106.941"
                                ry="106.586"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                        </g>
                    </svg>
                </div>
            )}
            {type.toLowerCase() === 'modern-saas' && (
                <div>
                    <div className="absolute top-0 ltr:left-1/4 rtl:right-1/4 rtl:rotate-y-180">
                        <svg width="191" height="66" viewBox="0 0 191 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M170.824 61.5578C175.418 60.5885 180.185 59.2256 183.479 57.6552C184.495 57.171 185.331 56.6855 185.965 56.2111C186.611 55.7268 186.962 55.3161 187.121 55.0099C187.253 54.7559 187.246 54.6023 187.185 54.4414C187.098 54.215 186.83 53.8109 186.087 53.2803C181.964 50.3354 179.058 47.674 177.124 44.6091C175.171 41.5143 174.287 38.1331 173.982 33.8874C173.922 33.0611 174.544 32.343 175.37 32.2835C176.196 32.224 176.914 32.8456 176.974 33.6719C177.257 37.5995 178.051 40.4569 179.661 43.0082C181.29 45.5892 183.83 47.9812 187.831 50.8392L187.112 51.845L187.831 50.8392C188.828 51.5512 189.61 52.3819 189.988 53.3725C190.39 54.4286 190.26 55.4742 189.784 56.3918C189.335 57.2571 188.593 57.9902 187.763 58.6121C186.92 59.2438 185.896 59.8267 184.77 60.3633C180.303 62.4927 173.608 64.1814 168.027 65.1505L168.027 65.1506C166.756 65.371 165.708 64.6347 165.345 63.6195C164.986 62.6159 165.315 61.396 166.397 60.7379L166.397 60.7378L174.882 55.5806C152.61 51.8672 140.004 40.8181 133.482 27.8829C127.159 15.3435 126.631 1.19667 128.247 -9.40786C106.166 13.6399 88.6882 19.9881 73.8366 17.1671C59.2682 14.3999 47.7799 2.8588 37.4629 -8.53095C30.7044 21.1799 11.7482 31.9735 2.43129 33.5822C1.61495 33.7232 0.838896 33.1757 0.697937 32.3593C0.556977 31.543 1.10449 30.7669 1.92083 30.626C10.0533 29.2217 28.4196 19.199 34.7432 -10.1243C35.1562 -12.0396 37.6201 -12.8334 39.0166 -11.2858L39.0167 -11.2857C49.61 0.455029 60.6479 11.6083 74.3964 14.2198C87.9663 16.7974 104.76 11.1066 127.019 -12.4698L127.019 -12.47C127.903 -13.4061 129.149 -13.4012 130.003 -12.992C130.862 -12.5804 131.659 -11.593 131.431 -10.2917C129.624 0.024426 129.93 14.1773 136.16 26.5322C142.345 38.7973 154.454 49.4712 176.659 52.8253C177.798 52.9972 178.531 53.8584 178.738 54.7623C178.948 55.6773 178.65 56.8003 177.626 57.4234L177.626 57.4238L170.824 61.5578ZM128.476 -10.8096C128.476 -10.8095 128.476 -10.8095 128.476 -10.8094ZM176.211 55.7916C176.211 55.7917 176.211 55.7917 176.211 55.7917Z"
                                fill="url(#paint0_linear_823_12546)"
                                fillOpacity="0.5"
                            />
                            <defs>
                                <linearGradient id="paint0_linear_823_12546" x1="180" y1="51.5" x2="34" y2="-15.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#B476E5" />
                                    <stop offset="1" stopColor="#B476E5" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="absolute top-1/4 hidden ltr:right-4 rtl:left-4 rtl:rotate-y-180 lg:block">
                        <svg width="301" height="322" viewBox="0 0 301 322" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M284.743 4C284.743 1.79086 282.952 0 280.743 0C278.534 0 276.743 1.79086 276.743 4V11.0115C276.743 13.2206 278.534 15.0115 280.743 15.0115C282.952 15.0115 284.743 13.2206 284.743 11.0115V4ZM280.743 28.7715C282.952 28.7715 284.743 30.5623 284.743 32.7715V96.6719H296.066C298.275 96.6719 300.066 98.4627 300.066 100.672C300.066 102.881 298.275 104.672 296.066 104.672H284.743V115.228C284.743 117.437 282.952 119.228 280.743 119.228C278.534 119.228 276.743 117.437 276.743 115.228V104.672H213.361V185.877H225.432C227.641 185.877 229.432 187.668 229.432 189.877C229.432 192.086 227.641 193.877 225.432 193.877H213.361V204.621C213.361 206.831 211.571 208.621 209.361 208.621C207.152 208.621 205.361 206.831 205.361 204.621V193.877H122.547V249.516H134.616C136.826 249.516 138.616 251.306 138.616 253.516C138.616 255.725 136.826 257.516 134.616 257.516H122.547V267.699C122.547 269.908 120.756 271.699 118.547 271.699C116.337 271.699 114.547 269.908 114.547 267.699V257.516H8V317.341C8 319.55 6.20914 321.341 4 321.341C1.79086 321.341 0 319.55 0 317.341V249.516H114.547V185.877H205.361V96.6719H276.743V32.7715C276.743 30.5623 278.534 28.7715 280.743 28.7715Z"
                                fill="url(#paint0_linear_823_12555)"
                                fillOpacity="0.3"
                            />
                            <defs>
                                <linearGradient id="paint0_linear_823_12555" x1="177" y1="146" x2="218.5" y2="201.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#47BDFF" />
                                    <stop offset="1" stopColor="#47BDFF" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            )}
            <div className="container">
                <div className={`heading text-center ltr:lg:text-left rtl:lg:text-right ${showTitle ? '' : 'hidden'}`}>
                    <h6>Testimonial</h6>
                    <h4 className="!text-white">Feedback from our clients</h4>
                </div>
                <div className={`mx-auto ${type.toLowerCase() === 'common' ? 'lg:w-11/12' : ''} `}>
                    <div className="relative sm:py-12 md:py-0">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            slidesPerView="auto"
                            spaceBetween={30}
                            loop={true}
                            speed={1000}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            navigation={{
                                nextEl: '.testimonial-button-next',
                                prevEl: '.testimonial-button-prev',
                            }}
                            dir={isRtl ? 'rtl' : 'ltr'}
                            key={isRtl ? 'true' : 'false'}
                        >
                            {type.toLowerCase() === 'common' &&
                                feedbacks.map((feedback: any) => {
                                    return (
                                        <SwiperSlide key={feedback.id}>
                                            <div className="items-center gap-4 sm:grid sm:grid-cols-3">
                                                <div className="col-span-2">
                                                    <div className="relative rounded-3xl bg-white/[0.02] p-6">
                                                        <p className="font-medium text-white">
                                                            "{feedback.message}"
                                                        </p>
                                                        <div className="mt-12">
                                                            <h5 className="font-extrabold text-primary">{feedback.name}</h5>
                                                            <h6 className="text-sm font-bold italic">{feedback.role}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4 h-24 w-24 overflow-hidden rounded-full bg-white ltr:ml-4 rtl:mr-4 dark:bg-gray-dark">
                                                    <Image src={feedback.thumbnail} alt="testimonial" width={96} height={96} className="h-full w-full rounded-full object-cover object-center" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            {type.toLowerCase() === 'modern-saas' &&
                                feedbacks.map((feedback: any) => {
                                    return (
                                        <SwiperSlide key={feedback.id}>
                                            <div className="mb-6 flex flex-col items-center justify-between gap-6 md:mb-14 md:flex-row">
                                                <div className="relative rounded-3xl bg-white/[0.02] p-6 md:w-2/3 lg:w-1/2">
                                                    <p className="font-medium text-white">"{feedback.message}"</p>
                                                    <div className="mt-12">
                                                        <h5 className="font-extrabold text-primary">{feedback.name}</h5>
                                                        <h6 className="text-sm font-bold italic">{feedback.role}</h6>
                                                    </div>
                                                </div>
                                                <div className="h-24 w-24 overflow-hidden rounded-full bg-white ltr:ml-4 rtl:mr-4 dark:bg-gray-dark">
                                                    <Image src={feedback.thumbnail} alt="testimonial" width={96} height={96} className="h-full w-full rounded-full object-cover object-center" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                        <div
                            className={`bottom-0 z-[1] mt-5 flex items-center justify-center gap-4 ${
                                type.toLowerCase() === 'common' && 'ltr:right-1/3 rtl:left-1/3 sm:absolute sm:mt-0 sm:justify-end'
                            } ${type.toLowerCase() === 'modern-saas' && 'ltr:left-0 rtl:right-0 md:absolute md:mt-0 md:justify-end'}`}
                        >
                            {/* <Link href="#" className="text-sm font-extrabold text-white transition hover:text-secondary dark:hover:text-secondary">
                                View All
                            </Link> */}
                            <button
                                type="button"
                                className="testimonial-button-prev static mt-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition after:hidden after:text-[0px] hover:bg-secondary rtl:rotate-180"
                            >
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="testimonial-button-next static mt-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition after:hidden after:text-[0px] hover:bg-secondary rtl:rotate-180"
                            >
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
