import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import {forwardRef} from 'react';
import clsx from 'clsx';
type MenuItemData = {
  bgColor: string;
  announceHeight: number;
  enableAnimation: boolean;
  // More type definitions...
};

type MenuItemProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  MenuItemData;

let MenuItem = forwardRef<HTMLElement, MenuItemProps>((props, ref) => {
  let {bgColor, announceHeight, enableAnimation, children, ...rest} = props;
  // More component logic...

  return (
    <section ref={ref} {...rest}>
      <div
        style={{backgroundColor: bgColor, height: announceHeight}}
        className="py-2 px-4 overflow-x-hidden relative flex justify-center items-center"
      >
        <div
          className={clsx(
            'flex justify-around w-full',
            enableAnimation ? ' animate-marquee ' : '',
          )}
        >
          {children?.map((child, index) => <div key={index}>{child}</div>)}
        </div>
        {enableAnimation && (
          <div className=" absolute animate-marquee2 flex justify-around w-full ">
            {children?.map((child, index) => <div key={index}>{child}</div>)}
          </div>
        )}
      </div>
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<MenuItemData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'announce-bar-type',
  title: 'Announce Bar',
  // More schema definitions...
  childTypes: ['announce-bar-item-type'],
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
        type: 'announce-bar-item-type',
      },
    ],
  },
};

export default MenuItem;
