import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
  WeaverseImage,
} from '@weaverse/hydrogen';
import type {CSSProperties} from 'react';
import {forwardRef} from 'react';

type RichTextData = {
  paddingTop: number;
  paddingBottom: number;
  backgroundColor: string;
  textPosition: string;
  // More type definitions...
};

type RichTextProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  RichTextData;

let RichText = forwardRef<HTMLElement, RichTextProps>((props, ref) => {
  let {
    paddingTop,
    backgroundColor,
    textPosition,
    paddingBottom,
    children,
    ...rest
  } = props;
  // More component logic...
  let styleSection: CSSProperties = {
    paddingTop,
    paddingBottom,
    backgroundColor,
    alignItems: textPosition,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: textPosition,
  } as CSSProperties;
  return (
    <section ref={ref} {...rest} style={styleSection}>
      {children}
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<RichTextData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'rich-text',
  title: 'Rich Text',
  // More schema definitions...
  childTypes: ['heading', 'paragraph'],
  inspector: [
    {
      group: 'Rich Text',
      inputs: [
        {
          type: 'toggle-group',
          label: 'Text position',
          name: 'textPosition',
          configs: {
            options: [
              {label: 'Left', value: 'flex-start'},
              {label: 'Center', value: 'center'},
              {label: 'Right', value: 'flex-end'},
            ],
          },
          defaultValue: 'center',
        },
        {
          type: 'range',
          label: 'Padding Top',
          name: 'paddingTop',
          defaultValue: 40,
          configs: {
            min: 0,
            max: 300,
            step: 1,
            unit: 'px',
          },
        },
        {
          type: 'range',
          label: 'Padding Bottom',
          name: 'paddingBottom',
          defaultValue: 40,
          configs: {
            min: 0,
            max: 300,
            step: 1,
            unit: 'px',
          },
        },
        {
          type: 'color',
          name: 'backgroundColor',
          label: 'Background color',
          defaultValue: '#ffffff',
        },
      ],
    },
  ],
  presets: {
    children: [
      {
        type: 'heading',
        content: 'Talk about your brand',
      },
      {
        type: 'description',
        content:
          'Share information about your brand with your customers. Describe a product, make announcements, or welcome customers to your store.',
      },
    ],
  },
};

export default RichText;
