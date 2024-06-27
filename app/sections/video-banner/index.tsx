import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import {forwardRef, lazy, Suspense} from 'react';
import clsx from 'clsx';
import type {CSSProperties} from 'react';

import {gapClasses} from '~/sections/shared/Section';
import {overlayInputs} from '~/sections/shared/Overlay';
type VideoBannerData = {
  videoLink: string;
  gap: number;
  sectionHeightDesktop: string;
  sectionHeightMobile: string;
  enableOverlay: boolean;
  overlayColor: string;
  overlayOpacity: number;
  enableAutoPlay: boolean;
  enableLoop: boolean;
  enableMuted: boolean;
  // More type definitions...
};
let FALLBACK_VIDEO = 'https://www.youtube.com/watch?v=Su-x4Mo5xmU';
type VideoBannerProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  VideoBannerData;

let RP = lazy(() => import('react-player/lazy'));
let ReactPlayer = (props: any) => (
  <Suspense fallback={null}>
    <RP {...props} />
  </Suspense>
);

let VideoBanner = forwardRef<HTMLElement, VideoBannerProps>((props, ref) => {
  let {
    videoLink,
    sectionHeightMobile,
    sectionHeightDesktop,
    enableOverlay,
    overlayColor,
    overlayOpacity,
    enableAutoPlay,
    enableLoop,
    enableMuted,
    gap,
    children,
    ...rest
  } = props;
  // More component logic...
  let sectionStyle: CSSProperties = {
    '--desktop-height': `${sectionHeightDesktop}px`,
    '--mobile-height': `${sectionHeightMobile}px`,
  } as CSSProperties;
  return (
    <section
      ref={ref}
      {...rest}
      className="overflow-hidden w-full h-full"
      style={sectionStyle}
    >
      <div
        className={clsx(
          'flex items-center justify-center relative overflow-hidden',
          'h-[var(--mobile-height)] sm:h-[var(--desktop-height)]',
          'w-[max(var(--mobile-height)/9*16,100vw)] sm:w-[max(var(--desktop-height)/9*16,100vw)]',
          'translate-x-[min(0px,calc((var(--mobile-height)/9*16-100vw)/-2))] sm:translate-x-[min(0px,calc((var(--desktop-height)/9*16-100vw)/-2))]',
        )}
      >
        <ReactPlayer
          url={videoLink || FALLBACK_VIDEO}
          playing
          autoPlay={enableAutoPlay}
          muted={enableMuted}
          loop={enableLoop}
          width="100%"
          height="auto"
          controls={false}
          className="aspect-video"
        />
        {enableOverlay ? (
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: overlayColor,
              opacity: (overlayOpacity || 50) / 100,
            }}
          />
        ) : null}
        <div
          className={clsx(
            'absolute inset-0 max-w-[100vw] mx-auto px-3 flex flex-col justify-center z-10',
            gapClasses[gap],
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<VideoBannerData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'video-banner',
  title: 'Video Banner',
  // More schema definitions...
  childTypes: ['subheading', 'heading', 'description'],
  inspector: [
    {
      group: 'Video',
      inputs: [
        {
          type: 'text',
          label: 'Video Link',
          name: 'videoLink',
          placeholder: 'https://',
          helpText: 'Support YouTube, Vimeo, MP4, WebM, and HLS streams.',
        },
        ...overlayInputs,
        {
          type: 'heading',
          label: 'Layout',
        },
        {
          type: 'range',
          name: 'sectionHeightDesktop',
          label: 'Height on desktop',
          defaultValue: 650,
          configs: {
            min: 400,
            max: 800,
            step: 10,
            unit: 'px',
          },
        },
        {
          type: 'range',
          name: 'sectionHeightMobile',
          label: 'Height on mobile',
          defaultValue: 300,
          configs: {
            min: 250,
            max: 500,
            step: 10,
            unit: 'px',
          },
        },
        {
          type: 'range',
          name: 'gap',
          label: 'Content spacing',
          configs: {
            min: 0,
            max: 40,
            step: 4,
            unit: 'px',
          },
          defaultValue: 20,
        },
        {
          type: 'switch',
          name: 'enableAutoPlay',
          label: 'Autoplay',
        },
        {
          type: 'switch',
          name: 'enableLoop',
          label: 'Loop',
        },
        {
          type: 'switch',
          name: 'enableMuted',
          label: 'Muted',
        },
      ],
    },
  ],
  presets: {
    enableOverlay: true,
    enableAutoPlay: true,
    enableLoop: true,
    children: [
      {
        type: 'heading',
      },
      {
        type: 'subheading',
      },
    ],
  },
};

export default VideoBanner;
