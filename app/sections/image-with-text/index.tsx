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
  imageAlignment?: AlignImage;
}

let AlignImageClasses: Record<AlignImage, string> = {
  left: 'flex-row-reverse',
  right: 'flex-row',
};

let ImageWithText = forwardRef<HTMLElement, ImageWithTextProps>(
  (props, ref) => {
    let {imageAlignment, sectionHeight, backgroundColor, children, ...rest} =
      props;
    let styleSection: CSSProperties = {
      '--section-height': `${sectionHeight}px`,
      backgroundColor,
    } as CSSProperties;

    return (
      <section
        ref={ref}
        {...rest}
        style={styleSection}
        className="h-[var(--section-height)] sm-max:h-auto sm-max:overflow-hidden"
      >
        <div className="h-full px-10 sm-max:px-6 sm-max:w-full">
          <div
            className={clsx(
              'flex justify-center items-center gap-5 h-full w-full sm-max:flex-col',
              AlignImageClasses[imageAlignment!],
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
          type: 'toggle-group',
          label: 'Text Alignment',
          name: 'textAlignment',
          configs: {
            options: [
              {label: 'Left', value: 'left'},
              {label: 'Center', value: 'center'},
              {label: 'Right', value: 'right'},
            ],
          },
          defaultValue: 'center',
        },
        {
          type: 'color',
          name: 'backgroundColor',
          label: 'Background color',
          defaultValue: '#f4f4f4',
        },
        {
          type: 'color',
          name: 'backgroundText',
          label: 'Background Text',
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
          name: 'topPadding',
          label: 'Top padding',
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
          name: 'bottomPadding',
          label: 'Bottom padding',
          defaultValue: 800,
          configs: {
            min: 400,
            max: 1800,
            step: 10,
            unit: 'px',
          },
        },
      ],
    },
  ],
  childTypes: ['content-items', 'image-items'],
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
