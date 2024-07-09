import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import type {CSSProperties} from 'react';
import {forwardRef} from 'react';

type RichTextData = {
  backgroundColor: string;
  textColor: string;
  heading: string;
  contentAlignment: string;
  text: string;
  sectionHeight: string;
  buttonLabel: string;
  buttonLink: string;
  buttonColor: string;
  openNewTab: boolean;
  buttonStyle: string;
  paddingTop: number;
  paddingBottom: number;
  // More type definitions...
};

type RichTextProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  RichTextData;

let RichText = forwardRef<HTMLElement, RichTextProps>((props, ref) => {
  let {
    backgroundColor,
    textColor,
    heading,
    contentAlignment,
    text,
    sectionHeight,
    buttonLabel,
    buttonLink,
    buttonColor,
    openNewTab,
    buttonStyle,
    paddingTop,
    paddingBottom,
    children,
    ...rest
  } = props;
  // More component logic...
  let styleSection: CSSProperties = {
    paddingTop,
    paddingBottom,
    backgroundColor,
    color: textColor,
    height: sectionHeight,
    alignItems: contentAlignment,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: contentAlignment,
  } as CSSProperties;

  return (
    <section ref={ref} {...rest} style={styleSection}>
      <h1 className="text-3xl font-bold mb-4">{heading}</h1>
      <div className=" block mb-6">
        <p className="text-lg">{text}</p>
      </div>
      <a
        style={{backgroundColor: buttonColor, color: textColor}}
        href={buttonLink}
        target={openNewTab ? '_blank' : '_self'}
        rel={openNewTab ? 'noopener noreferrer' : undefined}
        className="inline-bloc py-2 px-4 rounded "
      >
        {buttonLabel}
      </a>
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
  inspector: [
    {
      group: 'Rich Text',
      inputs: [
        {
          type: 'color',
          name: 'backgroundColor',
          label: 'Background color',
          defaultValue: '#ffffff',
        },
        {
          type: 'color',
          name: 'textColor',
          label: 'Text color',
          defaultValue: '#000000',
        },
        {
          type: 'text',
          label: 'Heading',
          name: 'heading',
          defaultValue: 'Rich Text',
          placeholder: 'Enter section heading',
        },
        {
          type: 'toggle-group',
          label: 'Content alignment',
          name: 'contentAlignment',
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
          type: 'textarea',
          label: 'Text',
          name: 'text',
          defaultValue:
            'Pair large text with an image to tell a story, explain a detail about your product.',
          placeholder: 'Enter your text here...',
        },
        {
          type: 'range',
          label: 'Section Height',
          name: 'sectionHeight',
          defaultValue: 200,
          configs: {
            min: 0,
            max: 800,
            step: 1,
            unit: 'px',
          },
        },
        {
          type: 'text',
          label: 'Button label',
          name: 'buttonLabel',
          defaultValue: 'Button',
          placeholder: 'Enter the button text!',
        },
        {
          type: 'url',
          label: 'Button link',
          name: 'buttonLink',
          defaultValue: 'https://',
        },
        {
          type: 'color',
          name: 'buttonColor',
          label: 'Button color',
          defaultValue: '#ffffff',
        },
        {
          type: 'switch',
          label: 'Open in new tab',
          name: 'openNewTab',
          defaultValue: true,
        },
        {
          type: 'toggle-group',
          label: 'Button style',
          name: 'buttonStyle',
          configs: {
            options: [
              {label: '1', value: '1'},
              {label: '2', value: '2'},
              {label: '3', value: '3'},
            ],
          },
          defaultValue: '1',
        },
        {
          type: 'range',
          label: 'Padding Top',
          name: 'paddingTop',
          defaultValue: 64,
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
          defaultValue: 64,
          configs: {
            min: 0,
            max: 800,
            step: 1,
            unit: 'px',
          },
        },
      ],
    },
  ],
};

export default RichText;
