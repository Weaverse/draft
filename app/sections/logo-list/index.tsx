import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import type {CSSProperties} from 'react';
import {forwardRef} from 'react';
import clsx from 'clsx';
type LogoListData = {
  paddingTop: number;
  paddingBottom: number;
  backgroundColor: string;
  textPosition: string;
  maxWidth: string;
  enableMaxWidth: boolean;
  // More type definitions...
};

type LogoListProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  LogoListData;

let LogoList = forwardRef<HTMLElement, LogoListProps>((props, ref) => {
  let {
    paddingTop,
    backgroundColor,
    textPosition,
    paddingBottom,
    maxWidth,
    enableMaxWidth,
    children,
    ...rest
  } = props;
  // More component logic...
  let styleSection: CSSProperties = {
    paddingTop,
    paddingBottom,
    backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: enableMaxWidth ? maxWidth : 'none',
    margin: '0 auto',
  } as CSSProperties;
  return (
    <section ref={ref} {...rest} style={styleSection}>
      {children}
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<LogoListData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'logo-list',
  title: 'Logo List',
  // More schema definitions...
  childTypes: ['heading', 'logo-list-container'],
  inspector: [
    {
      group: 'Icon list',
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
        {
          type: 'color',
          name: 'backgroundColor',
          label: 'Background color',
          defaultValue: '#ffffff',
        },
        {
          type: 'switch',
          label: 'Enable maximum width limit',
          name: 'enableMaxWidth',
          defaultValue: false,
        },
        {
          type: 'range',
          label: 'Max Width',
          name: 'maxWidth',
          defaultValue: 400,
          condition: 'enableMaxWidth.eq.true',
          configs: {
            min: 200,
            max: 1000,
            step: 10,
            unit: 'px',
          },
        },
      ],
    },
  ],
  presets: {
    children: [
      {
        type: 'heading',
        content: 'Featured on',
      },
    ],
  },
};

export default LogoList;
