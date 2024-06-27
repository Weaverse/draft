import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import {forwardRef} from 'react';

type TermsPolicyItemData = {
  title: string;
  titleColor: string;
  description: string;
  // More type definitions...
};

type TermsPolicyItemProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  TermsPolicyItemData;

let TermsPolicyItem = forwardRef<HTMLElement, TermsPolicyItemProps>(
  (props, ref) => {
    let {title, titleColor, description, children, ...rest} = props;
    // More component logic...

    return (
      <section ref={ref} {...rest}>
        <div className="p-2">
          <h4
            style={{color: titleColor}}
            className="text-xl pt-4 font-bold leading-tight "
          >
            {title}
          </h4>
          <p
            dangerouslySetInnerHTML={{__html: description}}
            className="text-base pt-4 leading-relaxed text-justify"
          ></p>
        </div>
        {/* Thêm các đoạn thông báo khác nếu cần */}
      </section>
    );
  },
);

export let loader = async (args: ComponentLoaderArgs<TermsPolicyItemData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'terms-policy-item-type',
  title: 'Item',
  inspector: [
    {
      group: 'General',
      inputs: [
        {
          type: 'text',
          label: 'Title',
          name: 'title',
          defaultValue: 'Title',
        },
        {
          type: 'color',
          label: 'Title color',
          name: 'titleColor',
          defaultValue: '#00000',
        },
        {
          type: 'richtext',
          label: 'Description',
          name: 'description',
          defaultValue:
            'Orders will arrive within 2-7 business days after your order is placed via regular ground fedex/usps, unless we inform you otherwise on our website or by email. shipments leave from new york state and transit time will vary based on your distance from our facility. at this time, all shipments will be shipped via ground shipping. we are not able to expedite shipping.',
        },
      ],
    },
  ],
};

export default TermsPolicyItem;
