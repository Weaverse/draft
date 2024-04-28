import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import type {CSSProperties} from 'react';
import {forwardRef} from 'react';
import {clsx} from 'clsx';

type AlignImage = 'left' | 'right';
interface ImageWithTextProps extends HydrogenComponentProps {
  sectionHeight: number;
  backgroundColor: string;
  imagePosition?: AlignImage;
  maxWidth: number;
  paddingTop: number;
  paddingBottom: number;
}

let AlignImageClasses: Record<AlignImage, string> = {
  left: 'flex-row-reverse',
  right: 'flex-row',
};

let ImageWithText = forwardRef<HTMLElement, ImageWithTextProps>(
  (props, ref) => {
    let {
      imagePosition,
      sectionHeight,
      backgroundColor,
      maxWidth,
      paddingTop,
      paddingBottom,
      children,
      ...rest
    } = props;
    let styleSection: CSSProperties = {
      '--section-height': `${sectionHeight}px`,
      backgroundColor,
      'max-width': `${maxWidth}px`,
      paddingTop,
      paddingBottom,
    } as CSSProperties;

    return (
      <section
        ref={ref}
        {...rest}
        style={styleSection}
        className="mx-auto sm-max:h-auto sm-max:overflow-hidden"
      >
        <div className="h-full sm-max:w-full">
          <div
            className={clsx(
              'flex justify-center items-center gap-5 h-full w-full sm-max:flex-col',
              AlignImageClasses[imagePosition!],
            )}
          >
            {children}
          </div>
        </div>
      </section>
    );
  },
);

export default ImageWithText;

export let schema: HydrogenComponentSchema = {
  type: 'image-with-text',
  title: 'Image with text',
  toolbar: ['general-settings', ['duplicate', 'delete']],
  inspector: [
    {
      group: 'Image with text',
      inputs: [
        {
          type: 'toggle-group',
          label: 'Image position',
          name: 'imagePosition',
          configs: {
            options: [
              {label: 'Left', value: 'left'},
              {label: 'Right', value: 'right'},
            ],
          },
          defaultValue: 'left',
        },

        {
          type: 'color',
          name: 'backgroundColor',
          label: 'Background color',
          defaultValue: '#f4f4f4',
        },

        {
          type: 'range',
          name: 'maxWidth',
          label: 'Max Width',
          defaultValue: 800,
          configs: {
            min: 400,
            max: 1800,
            step: 10,
            unit: 'px',
          },
        },

        {
          type: 'range',
          name: 'paddingTop',
          label: 'Top padding',
          defaultValue: 20,
          configs: {
            min: 0,
            max: 100,
            step: 1,
            unit: 'px',
          },
        },
        {
          type: 'range',
          name: 'paddingBottom',
          label: 'Bottom padding',
          defaultValue: 20,
          configs: {
            min: 0,
            max: 100,
            step: 1,
            unit: 'px',
          },
        },
      ],
    },
  ],
  childTypes: ['image-with-text--content', 'image-with-text--image'],
  presets: {
    children: [
      {
        type: 'image-with-text--content',
      },
      {
        type: 'image-with-text--image',
      },
    ],
  },
};
