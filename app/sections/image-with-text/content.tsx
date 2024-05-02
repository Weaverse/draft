import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import type {CSSProperties} from 'react';
import {forwardRef} from 'react';

interface ContentItemsProps extends HydrogenComponentProps {
  gap: number;
  backgroundColor: string;
  textAlignment: string;
  paddingTop: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;
}

let ContentItems = forwardRef<HTMLDivElement, ContentItemsProps>(
  (props, ref) => {
    let {
      children,
      textAlignment,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      backgroundColor,
      ...rest
    } = props;
    let style = {
      backgroundColor,
      textAlign: textAlignment,
      paddingBottom,
      paddingTop,
    } as CSSProperties;
    return (
      <div
        ref={ref}
        {...rest}
        className={`w-1/2 flex flex-col justify-${textAlignment} items-${textAlignment} gap-5 p-16 sm-max:w-full sm-max:pt-0 sm-max:px-0 sm-max:pb-10`}
        style={style}
      >
        {children}
      </div>
    );
  },
);

export default ContentItems;

export let schema: HydrogenComponentSchema = {
  type: 'image-with-text--content',
  title: 'Content',
  limit: 1,
  toolbar: ['general-settings', ['duplicate', 'delete']],
  inspector: [
    {
      group: 'General',
      inputs: [
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
          label: 'Background Text',
          defaultValue: '#f4f4f4',
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
  childTypes: [
    'image-with-text-subheading',
    'image-with-text-heading',
    'image-with-text-description',
    'image-with-text-button',
  ],
  presets: {
    children: [
      {
        type: 'image-with-text-subheading',
        content: 'Subheading',
      },
      {
        type: 'image-with-text-heading',
        content: 'Heading for image',
      },
      {
        type: 'image-with-text-description',
        content: 'Pair large text with an image to tell a story.',
      },
      {
        type: 'image-with-text-button',
        content: 'Button section',
      },
    ],
  },
};
