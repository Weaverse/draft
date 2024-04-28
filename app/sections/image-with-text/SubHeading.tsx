import {
  type HydrogenComponentProps,
  type HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import {clsx} from 'clsx';
import {forwardRef} from 'react';

import type {Alignment} from '~/lib/type';

type Size = 'small' | 'base' | 'large';
type Weight = 'normal' | 'medium';
type SubHeadingProps = HydrogenComponentProps & {
  content: string;
  as?: 'h4' | 'h5' | 'h6' | 'div' | 'p';
  color?: string;
  subHeadingSize?: Size;
  weight?: Weight;
  alignment: Alignment;
  className?: string;
};

let sizes: Record<Size, string> = {
  base: 'text-base',
  large: 'text-lg',
  small: 'text-xs',
};

let SubHeading = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement,
  SubHeadingProps
>((props, ref) => {
  let {content, color, subHeadingSize, ...rest} = props;
  return (
    <p
      ref={ref}
      {...rest}
      style={{color}}
      className={clsx(sizes[subHeadingSize!])}
    >
      {content}
    </p>
  );
});

export default SubHeading;

export let schema: HydrogenComponentSchema = {
  type: 'image-with-text-subheading',
  title: 'Subheading',
  inspector: [
    {
      group: 'Subheading',
      inputs: [
        {
          type: 'text',
          name: 'content',
          label: 'Subheading',
          defaultValue: 'Subheading',
          placeholder: 'Section subheading',
        },
        {
          type: 'toggle-group',
          name: 'subHeadingSize',
          label: 'Subheading size',
          configs: {
            options: [
              {value: 'small', label: 'S'},
              {value: 'base', label: 'M'},
              {value: 'large', label: 'L'},
            ],
          },
          defaultValue: 'base',
        },
        {
          type: 'color',
          name: 'color',
          label: 'Text color',
        },
      ],
    },
  ],
  toolbar: ['general-settings', ['duplicate', 'delete']],
};
