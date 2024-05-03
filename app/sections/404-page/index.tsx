import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
  WeaverseImage,
} from '@weaverse/hydrogen';
import {forwardRef} from 'react';
import clsx from 'clsx';
import {Image} from '@shopify/hydrogen';
import type {CSSProperties} from 'react';

type NotFoundData = {
  paddingTop: number;
  paddingBottom: number;
  title: string;
  description: string;
  mainImage: WeaverseImage;
  // More type definitions...
};

type NotFoundProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  NotFoundData;

let NotFound = forwardRef<HTMLElement, NotFoundProps>((props, ref) => {
  let {
    paddingTop,
    title,
    mainImage,
    description,
    paddingBottom,
    children,
    ...rest
  } = props;
  // More component logic...
  let styleSection: CSSProperties = {
    paddingTop,
    paddingBottom,
  } as CSSProperties;
  return (
    <section ref={ref} {...rest} style={styleSection}>
      <div className="lg:flex lg:items-center lg:justify-center">
        {/* Phần 1 */}
        <div className="lg:w-1/2 lg:order-1 lg:text-center lg:mb-4 mx-4 lg:mx-0">
          <div className="flex flex-col justify-center mb-4">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p dangerouslySetInnerHTML={{__html: description}} />
          </div>

          <div className="flex justify-center mb-4">
            <button
              style={{backgroundColor: '#F78B1C'}}
              className="text-white font-bold py-2 px-4 rounded mr-2"
            >
              Visit our homepage
            </button>
            <button
              style={{backgroundColor: '#F78B1C'}}
              className="  text-white font-bold py-2 px-4 rounded"
            >
              Browse all products
            </button>
          </div>
        </div>
        {/* Phần 2 */}
        <div className="lg:w-1/2 lg:order-2 mx-4 lg:mx-0">
          <Image
            className="w-full"
            data={mainImage}
            sizes={`(min-width: 45em) 50vw, 100vw`}
          />
        </div>
      </div>
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<NotFoundData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'not-found',
  title: '404-page',
  // More schema definitions...
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
            min: 40,
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
            min: 40,
            max: 300,
            step: 1,
            unit: 'px',
          },
        },
        {
          type: 'text',
          label: 'Title',
          name: 'title',
          defaultValue: 'We’re sorry, this page is not available',
          placeholder: 'Enter section heading',
        },
        {
          type: 'richtext',
          label: 'Description',
          name: 'description',
          defaultValue:
            ' The page URL might be outdated or contains typo errors. Select options below.',
        },
      ],
    },
    {
      group: 'Image',
      inputs: [
        {
          type: 'image',
          name: 'mainImage',
          label: 'Image',
          defaultValue: {
            url: 'https://cdn.shopify.com/s/files/1/0669/0262/2504/files/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg?v=1697429747',
            altText: 'Man standing beside wall',
          },
        },
      ],
    },
  ],
};

export default NotFound;
