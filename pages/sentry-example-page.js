// pages/sentry-example-page.js
import * as Sentry from '@sentry/nextjs';

export default function SentryExamplePage() {
  const handleThrowError = () => {
    throw new Error('This is a test error');
  };

  const handleCaptureError = () => {
    Sentry.captureException(new Error('This is a test error'));
  };

  const handleCaptureMessage = () => {
    Sentry.captureMessage('This is a test message');
  };

  return (
    <div>
      <h1>Sentry Example Page</h1>
      <button onClick={handleThrowError}>Throw Error</button>
      <button onClick={handleCaptureError}>Capture Error</button>
      <button onClick={handleCaptureMessage}>Capture Message</button>
    </div>
  );
}