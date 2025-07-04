// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

export default Sentry.init({
  dsn: process.env.SENTRY_DSN,
  // Use the organization and project names
  organization: 'codeforge-ai',
  project: 'javascript-nextjs',
  // Enable performance monitoring
  tracesSampleRate: 1.0,
  // Use the @sentry/nextjs plugin
  integrations: [new Sentry.BrowserTracing()],
});