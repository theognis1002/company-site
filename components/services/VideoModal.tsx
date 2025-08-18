import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Modal';
import { IRootState } from '../../store';

const VideoModal = () => {
    const dialog: any = useRef();
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <>
            <section className="overflow-x-hidden bg-gradient-to-t from-white/[55%] to-transparent dark:bg-none md:py-14 lg:pb-[100px] lg:pt-[130px]">
                <div className="relative bg-center">
                    <img
                        src="/assets/images/how-we-do-it_.png"
                        alt="how-we-do-it"
                        className="absolute inset-x-0 bottom-[93%] mx-auto hidden md:block xl:bottom-[91%]"
                    />
                    <img
                        src="/assets/images/service-video-bg.png"
                        alt="service-video-bg"
                        className="relative z-[1] h-[400px] w-full object-cover object-top sm:h-[500px] lg:h-[738px]"
                    />
                    <div className="absolute -inset-x-4 bottom-0 h-12 -rotate-[2deg] bg-[#7780A1]/10 xl:bottom-3"></div>
                    <div className="absolute top-1/2 z-[1] -translate-y-1/2 ltr:left-5 ltr:pr-5 rtl:right-5 rtl:pl-5 ltr:lg:left-[10%] rtl:lg:right-[10%] xl:w-[620px]">
                        <p className="pb-8 text-2xl font-extrabold text-white sm:text-4xl sm:leading-[50px]">
                            Find out everything you need to know about creating a business process model.
                        </p>
                        <button
                            type="button"
                            className="group flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white ring-[5px] ring-white/10 transition hover:bg-secondary"
                            onClick={() => dialog.current.open()}
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-secondary group-hover:text-black/60"
                            >
                                <g clipPath="url(#clip0_279_1223)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.12543 0.661061C4.53562 -1.06548 1.06668 0.791048 1.06668 3.90361V12.0964C1.06668 15.209 4.53562 17.0655 7.12543 15.3389L13.27 11.2425C15.5838 9.70001 15.5838 6.3 13.27 4.75746L7.12543 0.661061Z"
                                        fill="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_279_1223">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <Modal
                ref={dialog}
                width="960"
                closeByOverlay={true}
                closeBtn={true}
                closeStyle="floating"
                contentClass="pt-8 px-0 pb-0 !bg-transparent"
                closeBtnClass="!top-0 ltr:!right-0 rtl:!right-auto rtl:!left-0 !text-white !text-3xl"
                modal={false}
            >
                <div className="bg-black !p-4 dark:bg-gray-dark">
                    <div className="relative">
                        <div className="aspect-video">
                            <iframe
                                className="absolute top-0 left-0 h-full w-full"
                                src="https://www.youtube.com/embed/D0UnqGm_miA"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default VideoModal;
