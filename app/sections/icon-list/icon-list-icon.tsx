import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
  WeaverseImage,
} from '@weaverse/hydrogen';
import type {CSSProperties} from 'react';
import {forwardRef} from 'react';
import {Image} from '@shopify/hydrogen';

type IconListIconData = {
  title: string;
  color: string;
  mainImage: WeaverseImage;
  textSize: string;
  // More type definitions...
};

type IconListIconProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  IconListIconData;

let ListIcon = forwardRef<HTMLElement, IconListIconProps>((props, ref) => {
  let {
    title,
    mainImage,
    color,
    textSize,
    children,

    ...rest
  } = props;
  // More component logic...
  let styleSection: CSSProperties = {
    color,
  } as CSSProperties;
  return (
    <section ref={ref} {...rest}>
      <div className="p-4 center flex flex-col justify-center items-center">
        {/* Icon 1 */}
        <Image data={mainImage} />
        <div className={`text-${textSize}`} style={styleSection}>
          {title}
        </div>
      </div>
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<IconListIconData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'icon-list-icon',
  title: 'Icon',
  // More schema definitions...
  inspector: [
    {
      group: 'General',
      inputs: [
        {
          type: 'text',
          label: 'Title',
          name: 'title',
          defaultValue: 'Shop by life style',
          placeholder: 'Enter section title',
        },
        {
          type: 'image',
          name: 'mainImage',
          label: 'Icon',
          defaultValue: {
            url: 'https://cdn.shopify.com/s/files/1/0669/0262/2504/files/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg?v=1697429747',
            altText: 'icon',
          },
        },
        {
          type: 'toggle-group',
          label: 'Size',
          name: 'textSize',
          configs: {
            options: [
              {value: 'xl', label: 'S'},
              {value: '2xl', label: 'M'},
              {value: '3xl', label: 'L'},
            ],
          },
          defaultValue: '2xl',
        },
      ],
    },
    {
      group: 'Color',
      inputs: [
        {
          type: 'color',
          label: 'Color',
          name: 'color',
          defaultValue: '#FAF6F0',
        },
      ],
    },
  ],
};

export default ListIcon;
