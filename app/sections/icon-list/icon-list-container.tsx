import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import {forwardRef} from 'react';
import type {CSSProperties} from 'react';

type IconListContainerData = {
  // More type definitions...
  backgroundColor: string;
  iconNumber: string;
};

type IconListContainerProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  IconListContainerData;

let ListIcon = forwardRef<HTMLElement, IconListContainerProps>((props, ref) => {
  let {children, iconNumber, backgroundColor, ...rest} = props;
  // More component logic...
  let styleSection: CSSProperties = {
    backgroundColor,
  } as CSSProperties;
  return (
    <section ref={ref} {...rest} style={styleSection}>
      <div
        style={{gridTemplateColumns: `repeat(${iconNumber},1fr)`}}
        className="grid"
      >
        {children}
      </div>
    </section>
  );
});

export let loader = async (
  args: ComponentLoaderArgs<IconListContainerData>,
) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'icon-list-container',
  title: 'Icon List',
  childTypes: ['icon-list-icon'],
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
