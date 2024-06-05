import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
  WeaverseImage,
} from '@weaverse/hydrogen';
import type {CSSProperties} from 'react';
import {forwardRef} from 'react';
import {Image} from '@shopify/hydrogen';

type LogoListItemData = {
  title: string;
  color: string;
  mainImage: WeaverseImage;
  textSize: string;
  // More type definitions...
};

type LogoListItemProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  LogoListItemData;

let ListIcon = forwardRef<HTMLElement, LogoListItemProps>((props, ref) => {
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
      <Image data={mainImage} />
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<LogoListItemData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'logo-list-item',
  title: 'Image',
  // More schema definitions...
  inspector: [
    {
      group: 'General',
      inputs: [
        {
          type: 'image',
          name: 'mainImage',
          label: 'Icon',
        },
      ],
    },
  ],
};

export default ListIcon;
