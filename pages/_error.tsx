import { NextPage } from 'next';

interface ErrorProps {
    statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <h1>
                {statusCode
                    ? `A ${statusCode} error occurred on server`
                    : 'An error occurred on client'}
            </h1>
            <p>
                {statusCode === 404
                    ? 'This page could not be found.'
                    : 'Sorry, there was a problem.'}
            </p>
            <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
                Go back home
            </a>
        </div>
    );
};

Error.getInitialProps = ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;