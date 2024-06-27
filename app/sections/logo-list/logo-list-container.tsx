import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import {forwardRef} from 'react';
import type {CSSProperties} from 'react';

type LogoListContainerData = {
  // More type definitions...
  backgroundColor: string;
  iconNumber: string;
  gap: string;
};

type LogoListContainerProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  LogoListContainerData;

let ListIcon = forwardRef<HTMLElement, LogoListContainerProps>((props, ref) => {
  let {children, iconNumber, backgroundColor, gap, ...rest} = props;
  // More component logic...
  let styleSection: CSSProperties = {
    backgroundColor,
  } as CSSProperties;
  return (
    <section ref={ref} {...rest} style={styleSection}>
      <div
        style={{gridTemplateColumns: `repeat(${iconNumber},1fr)`, gap}}
        className="grid"
      >
        {children}
      </div>
    </section>
  );
});

export let loader = async (
  args: ComponentLoaderArgs<LogoListContainerData>,
) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'logo-list-container',
  title: 'Logo list',
  childTypes: ['logo-list-item'],
  // More schema definitions...
  inspector: [
    {
      group: 'General',
      inputs: [
        {
          type: 'range',
          label: 'Number of icons per row',
          name: 'iconNumber',
          defaultValue: 3,
          configs: {
            min: 1,
            max: 10,
            step: 1,
            unit: 'icons',
          },
        },
        {
          type: 'range',
          label: 'Gap',
          name: 'gap',
          defaultValue: 50,
          configs: {
            min: 0,
            max: 300,
            step: 1,
            unit: 'px',
          },
        },

        {
          type: 'color',
          label: 'Background Color',
          name: 'backgroundColor',
          defaultValue: '#FAF6F0',
        },
      ],
    },
  ],
};

export default ListIcon;
