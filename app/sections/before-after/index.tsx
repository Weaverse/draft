import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import {forwardRef} from 'react';
import clsx from 'clsx';
type BeforeAfterData = {
  bgColor: string;
  announceHeight: number;
  enableAnimation: boolean;
  // More type definitions...
};

type BeforeAfterProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  BeforeAfterData;

let BeforeAfter = forwardRef<HTMLElement, BeforeAfterProps>((props, ref) => {
  let {bgColor, announceHeight, enableAnimation, children, ...rest} = props;
  // More component logic...

  return (
    <section ref={ref} {...rest}>
      {children}
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<BeforeAfterData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'before-after-type',
  title: 'Before After Slider',
  // More schema definitions...
  childTypes: ['before-after-heading-type', 'before-after-slider-type'],
  inspector: [
    {
      group: 'General',
      inputs: [
        {
          type: 'range',
          label: 'Height',
          name: 'announceHeight',
          defaultValue: 40,
          configs: {
            min: 40,
            max: 300,
            step: 1,
            unit: 'px',
          },
        },
        {
          type: 'color',
          label: 'Background color',
          name: 'bgColor',
          defaultValue: '#F08D27',
        },
        {
          type: 'switch',
          label: 'Enable Animation',
          name: 'enableAnimation',
          defaultValue: false,
        },
      ],
    },
  ],
  presets: {
    children: [
      {
        type: 'before-after-heading-type',
      },
      {
        type: 'before-after-slider-type',
      },
    ],
  },
};

export default BeforeAfter;
