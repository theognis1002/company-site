import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Link from 'next/link';
import Image from 'next/image';
const LogoSlider = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView="auto"
            spaceBetween={30}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={2500}
            breakpoints={{
                320: {
                    slidesPerView: 1.7,
                },
                600: {
                    slidesPerView: 3,
                },
                1000: {
                    slidesPerView: 5,
                },
                1600: {
                    slidesPerView: 7,
                },
            }}
            dir={isRtl ? 'rtl' : 'ltr'}
            key={isRtl ? 'true' : 'false'}
        >
            <SwiperSlide>
                <Link href="#">
                    <Image src="/assets/images/logo-1.svg" alt="logo-1" width={120} height={60} className="mx-auto transition hover:scale-110" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <Image src="/assets/images/logo-2.svg" alt="logo-2" width={120} height={60} className="mx-auto transition hover:scale-110" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <Image src="/assets/images/logo-3.svg" alt="logo-3" width={120} height={60} className="mx-auto transition hover:scale-110" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <Image src="/assets/images/logo-4.svg" alt="logo-4" width={120} height={60} className="mx-auto transition hover:scale-110" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <Image src="/assets/images/logo-5.svg" alt="logo-5" width={120} height={60} className="mx-auto transition hover:scale-110" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <Image src="/assets/images/logo-6.svg" alt="logo-6" width={120} height={60} className="mx-auto transition hover:scale-110" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <Image src="/assets/images/logo-7.svg" alt="logo-7" width={120} height={60} className="mx-auto transition hover:scale-110" />
                </Link>
            </SwiperSlide>
        </Swiper>
    );
};

export default LogoSlider;
