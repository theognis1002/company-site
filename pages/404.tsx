import Link from 'next/link';
import DefaultLayout from '../components/Layouts/DefaultLayout';

const Error404 = () => {
    return (
        <DefaultLayout>
            <div className="flex min-h-[500px] items-center justify-center">
                <div className="p-5 text-center font-semibold">
                    <h2 className="mb-8 text-[50px] font-bold leading-none md:text-[80px] dark:text-white">404</h2>
                    <h4 className="mb-5 text-xl font-semibold text-primary sm:text-5xl">Ooops!</h4>
                    <p className="text-base dark:text-gray-400">The page you requested was not found!</p>
                    <Link href="/" className="btn mx-auto mt-10 w-max">
                        Back To Home
                    </Link>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Error404;
