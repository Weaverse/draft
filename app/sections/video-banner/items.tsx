import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import {forwardRef} from 'react';

type VideoBannerItemData = {
  text: string;
  textColor: string;
  // More type definitions...
};

type VideoBannerItemProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  VideoBannerItemData;

let VideoBannerItem = forwardRef<HTMLElement, VideoBannerItemProps>(
  (props, ref) => {
    let {text, textColor, children, ...rest} = props;
    // More component logic...

    return (
      <section ref={ref} {...rest}>
        <p style={{color: textColor}} className="text-sm  mr-4">
          {text}
        </p>
        {/* Thêm các đoạn thông báo khác nếu cần */}
      </section>
    );
  },
);

export let loader = async (args: ComponentLoaderArgs<VideoBannerItemData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'video-banner-item-type',
  title: 'Item',

  inspector: [
    {
      group: 'General',
      inputs: [
        {
          type: 'text',
          label: 'Text',
          name: 'text',
          defaultValue: 'Announcement text',
          placeholder: 'Enter Announcement',
        },
        {
          type: 'color',
          label: 'Text color',
          name: 'textColor',
          defaultValue: '#FFFFFF',
        },
      ],
    },
  ],
};

export default VideoBannerItem;
