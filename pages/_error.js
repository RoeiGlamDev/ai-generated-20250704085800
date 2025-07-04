// pages/_error.js
import * as Sentry from '@sentry/nextjs';

export default function Error({ statusCode }) {
  return (
    <div>
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on the server`
          : 'An error occurred on the client'}
      </h1>
    </div>
  );
}