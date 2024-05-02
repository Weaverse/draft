import {
  type HydrogenComponentProps,
  type HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import {clsx} from 'clsx';
import {forwardRef} from 'react';

import type {Alignment} from '~/lib/type';

type DescriptionProps = HydrogenComponentProps & {
  content: string;
  color?: string;
};

let Description = forwardRef<
  HTMLParagraphElement | HTMLDivElement,
  DescriptionProps
>((props, ref) => {
  let {content, color, ...rest} = props;
  return (
    <p
      ref={ref}
      {...rest}
      style={{color}}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{__html: content}}
    />
  );
});

Description.defaultProps = {
  content:
    "Pair large text with an image or full-width video to showcase your brand's lifestyle to describe and showcase an important detail of your products that you can tag on your image.",
};

export default Description;

export let schema: HydrogenComponentSchema = {
  type: 'image-with-text-description',
  title: 'Description',
  inspector: [
    {
      group: 'Description',
      inputs: [
        {
          type: 'select',
          name: 'as',
          label: 'Tag name',
          configs: {
            options: [
              {value: 'p', label: 'Paragraph'},
              {value: 'div', label: 'Div'},
            ],
          },
          defaultValue: 'p',
        },
        {
          type: 'richtext',
          name: 'content',
          label: 'Content',
          defaultValue:
            "Pair large text with an image or full-width video to showcase your brand's lifestyle to describe and showcase an important detail of your products that you can tag on your image.",
          placeholder:
            "Pair large text with an image or full-width video to showcase your brand's lifestyle to describe and showcase an important detail of your products that you can tag on your image.",
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
