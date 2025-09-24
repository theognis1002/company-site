import { useSelector } from 'react-redux';
import Image from 'next/image';
import { IRootState } from '../../store';

const NewsletterSection = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <section className="relative overflow-x-hidden border-t-2 border-transparent px-4 py-14 dark:border-gray/20 lg:py-[100px]">
            <div className="items-center justify-center gap-10 lg:flex">
                <div className="text-center" data-aos={isRtl ? 'fade-left' : 'fade-right'} data-aos-duration="1000">
                    <Image src="/assets/images/services-form-txt.png" alt="services-form-txt" width={400} height={100} className="mx-auto mb-10 sm:pt-4 xl:mx-0" />
                    <form action="" className="relative z-[1] text-center lg:pt-[50px]">
                        <div className="relative inline-block w-full sm:w-auto">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full rounded-3xl py-4 font-bold leading-5 outline-none ltr:pl-4 ltr:pr-[110px] rtl:pr-4 rtl:pl-[110px] dark:bg-gray-dark sm:w-[540px] sm:py-6 ltr:sm:pl-[30px] ltr:sm:pr-[140px] rtl:sm:pr-[30px] rtl:sm:pl-[140px]"
                            />
                            <button
                                type="submit"
                                className="absolute top-0 h-full bg-secondary px-4 font-extrabold uppercase text-white ltr:right-0 ltr:rounded-r-3xl rtl:left-0 rtl:rounded-l-3xl sm:px-7"
                            >
                                submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="mt-10 lg:mt-0" data-aos={isRtl ? 'fade-right' : 'fade-left'} data-aos-duration="1000">
                    <svg
                        width="320"
                        height="282"
                        viewBox="0 0 320 282"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto my-8 w-[90%] sm:w-auto"
                    >
                        <path
                            d="M254.182 123.52L203.127 119.709C198.183 119.334 193.219 120.151 188.656 122.091L175.076 127.872C173.249 131.184 171.005 134.248 168.397 136.989C161.845 143.977 136.719 156.969 123.457 159.701C120.332 160.256 117.111 159.694 114.361 158.113C108.352 162.928 102.056 167.373 95.5072 171.426C95.5072 171.426 107.911 206.717 154.095 186.768L190.829 170.854L182.782 190.136C183.005 201.158 183.069 215.611 182.337 225.245C190.961 227.868 200.16 227.956 208.832 225.497C212.297 201.991 214.937 164.889 205.968 150.88L249.86 150.467C255.391 140.518 254.904 134.861 254.182 123.52Z"
                            fill="#B476E5"
                        />
                        {/* Additional SVG paths can be added here for the complete illustration */}
                        <path
                            d="M172.633 109.862L177.977 86.3878C178.096 85.8739 178.003 85.3342 177.724 84.8875C177.443 84.4406 176.996 84.1235 176.482 84.0054C175.968 83.8876 175.427 83.9785 174.98 84.2585C174.532 84.5386 174.215 84.9845 174.097 85.4984L167.799 113.166"
                            fill="#B476E5"
                        />
                        <path
                            d="M168.499 20.9169C168.499 24.8561 167.329 28.7067 165.138 31.982C162.946 35.2574 159.832 37.8102 156.189 39.3177C152.545 40.8252 148.535 41.2196 144.667 40.451C140.799 39.6826 137.245 37.7857 134.457 35.0003C131.668 32.2148 129.768 28.6659 128.999 24.8024C128.23 20.9389 128.625 16.9343 130.134 13.295C131.643 9.65572 134.199 6.54505 137.478 4.35659C140.758 2.16813 144.613 1 148.557 1C153.845 1.00318 158.916 3.10253 162.655 6.83696C166.393 10.5714 168.495 15.6356 168.499 20.9169Z"
                            fill="#B476E5"
                        />
                    </svg>
                </div>
            </div>
            <div className="absolute bottom-20 ltr:left-0 rtl:right-0">
                <svg width="171" height="216" viewBox="0 0 171 216" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.06" d="M160.487 10.9038L47.9038 205.904L-64.6795 10.9038L160.487 10.9038Z" stroke="#7780A1" strokeWidth="20" />
                </svg>
            </div>
        </section>
    );
};

export default NewsletterSection;
