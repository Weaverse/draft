import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
  WeaverseImage,
} from '@weaverse/hydrogen';
import type {CSSProperties} from 'react';
import {forwardRef} from 'react';

type IconListTitleData = {
  color: string;
  heading: string;
  textSize: string;
  // More type definitions...
};

type IconListTitleProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  IconListTitleData;

let ListIcon = forwardRef<HTMLElement, IconListTitleProps>((props, ref) => {
  let {color, textSize, heading, children, ...rest} = props;
  // More component logic...
  let styleSection: CSSProperties = {
    color,
  } as CSSProperties;
  return (
    <section ref={ref} {...rest} style={styleSection}>
      <div className="text-center mb-6">
        <h2 className={`text-${textSize} font-bold`}>{heading}</h2>
      </div>
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<IconListTitleData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'icon-list-title',
  title: 'Heading',
  // More schema definitions...
  inspector: [
    {
      group: 'Heading',
      inputs: [
        {
          type: 'text',
          label: 'Heading',
          name: 'heading',
          defaultValue: 'Shop by life style',
          placeholder: 'Enter section title',
        },
        {
          type: 'toggle-group',
          label: 'Size',
          name: 'textSize',
          configs: {
            options: [
              {value: 'xl', label: 'S'},
              {value: '2xl', label: 'M'},
              {value: '3xl', label: 'L'},
            ],
          },
          defaultValue: '2xl',
        },
        {
          type: 'color',
          label: 'Heading Color',
          name: 'color',
          defaultValue: '#000000',
        },
      ],
    },
  ],
};

export default ListIcon;
