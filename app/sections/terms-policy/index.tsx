import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import type {CSSProperties} from 'react';
import {forwardRef} from 'react';
import {clsx} from 'clsx';

type TermsPolicyData = {
  paddingTop: number;
  paddingBottom: number;
  title: string;
  buttonColor: string;
  buttonText: string;
  titlePosition: string;
  subTitle: string;
  // More type definitions...
};

type TermsPolicyProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  TermsPolicyData;

let TermsPolicy = forwardRef<HTMLElement, TermsPolicyProps>((props, ref) => {
  let {
    paddingTop,
    title,
    paddingBottom,
    children,
    buttonColor,
    buttonText,
    titlePosition,
    subTitle,
    ...rest
  } = props;
  // More component logic...
  let styleSection: CSSProperties = {
    paddingTop,
    paddingBottom,
  } as CSSProperties;
  return (
    <section ref={ref} {...rest} style={styleSection}>
      <div className=" mx-auto mt-10 bg-white p-6 rounded-md">
        <h2
          className={clsx(
            'text-2xl font-semibold mb-4',
            `text-${titlePosition}`,
          )}
        >
          {title}
        </h2>
        <p
          className={clsx('text-lg font-medium  mb-4', `text-${titlePosition}`)}
        >
          {subTitle}
        </p>
        <div>{children}</div>
      </div>
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<TermsPolicyData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'terms-policy-type',
  title: 'Terms & Policy',
  childTypes: ['terms-policy-item-type'],
  presets: {
    children: [
      {
        type: 'terms-policy-item-type',
      },
    ],
  },
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
        {
          type: 'text',
          label: 'Title',
          name: 'title',
          defaultValue: 'Shipping & return policy',
        },
        {
          type: 'text',
          label: 'Subtitle',
          name: 'subTitle',
          defaultValue: 'When will my order be delivered?',
        },
        {
          type: 'toggle-group',
          label: 'Title position',
          name: 'titlePosition',
          configs: {
            options: [
              {label: 'Left', value: 'left'},
              {label: 'Center', value: 'center'},
            ],
          },
          defaultValue: 'left',
        },
      ],
    },
  ],
};

export default TermsPolicy;
