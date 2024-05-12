import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
  WeaverseImage,
} from '@weaverse/hydrogen';
import type {CSSProperties} from 'react';
import {forwardRef} from 'react';

type IconListData = {
  paddingTop: number;
  paddingBottom: number;
  title: string;
  backgroundColor: string;
  mainImage: WeaverseImage;
};

type IconListProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  IconListData;

let ListIcon = forwardRef<HTMLElement, IconListProps>((props, ref) => {
  let {
    paddingTop,
    title,
    mainImage,
    backgroundColor,
    paddingBottom,
    children,

    ...rest
  } = props;
  // More component logic...
  let styleSection: CSSProperties = {
    paddingTop,
    paddingBottom,
    backgroundColor,
  } as CSSProperties;
  return (
    <section ref={ref} {...rest} style={styleSection}>
      {children}
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<IconListData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'icon-list',
  title: 'Icon List',
  childTypes: ['icon-list-title', 'icon-list-item'],
  inspector: [
    {
      group: 'General',
      inputs: [
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
      ],
    },
    {
      group: 'Color',
      inputs: [
        {
          type: 'color',
          label: 'Background Color',
          name: 'backgroundColor',
          defaultValue: '#FAF6F0',
        },
        {
          type: 'color',
          label: 'Icon Color',
          name: 'iconColor',
          defaultValue: '#F78B1C',
        },
      ],
    },
  ],
};

export default ListIcon;
