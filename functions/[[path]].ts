// @ts-nocheck
import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';

export const onRequest: PagesFunction = async (context) => {
  // @ts-expect-error - the Remix server build is generated during the build step and is not present during typecheck.
  const serverBuild = (await import('../build/server')).default;

  const handler = createPagesFunctionHandler({
    build: serverBuild as any,
  });

  return handler(context);
};
