import type {CreateWeaverseClientArgs} from '@weaverse/hydrogen';
import {WeaverseClient} from '@weaverse/hydrogen';
import {components} from '~/weaverse/components';
import {themeSchema} from '~/weaverse/schema.server';
import type {AppLoadContext} from '@shopify/remix-oxygen';

export function createWeaverseClient(args: CreateWeaverseClientArgs) {
  return new WeaverseClient({
    ...args,
    themeSchema,
    components,
  });
}

export function getWeaverseCsp(request: Request, context: AppLoadContext) {
  let url = new URL(request.url);
  // Get weaverse host from query params
  let weaverseHost =
    url.searchParams.get('weaverseHost') || context.env.WEAVERSE_HOST;
  let isDesignMode = url.searchParams.get('weaverseHost');
  let weaverseHosts = ['*.weaverse.io', '*.shopify.com', '*.myshopify.com'];
  if (weaverseHost) {
    weaverseHosts.push(weaverseHost);
  }
  let updatedCsp: {
    [x: string]: string[] | string | boolean;
  } = {
    defaultSrc: [
      'data:',
      '*.youtube.com',
      '*.youtu.be',
      '*.vimeo.com',
      '*.google.com',
      '*.google-analytics.com',
      '*.googletagmanager.com',
      ...weaverseHosts,
    ],
    connectSrc: ['vimeo.com', '*.google-analytics.com', ...weaverseHosts],
    styleSrc: weaverseHosts,
  };
  if (isDesignMode) {
    updatedCsp.frameAncestors = ['*'];
  }
  return updatedCsp;
}
