import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
  WeaverseImage,
} from '@weaverse/hydrogen';
import type {CSSProperties} from 'react';
import {forwardRef} from 'react';

type NotFoundData = {
  paddingTop: number;
  paddingBottom: number;
  title: string;
  description: string;
  mainImage: WeaverseImage;
  buttonColor: string;
  homeButton: string;
  productButton: string;
  buttonHomeURL: string;
  buttonProductURL: string;

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
    buttonColor,
    homeButton,
    productButton,
    buttonHomeURL,
    buttonProductURL,
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
            <h2 className=" text-center text-2xl lg:text-3xl font-bold mb-2">
              {title}
            </h2>
            <p dangerouslySetInnerHTML={{__html: description}} />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center mb-4">
            <Link to={buttonHomeURL}>
              <button
                style={{backgroundColor: buttonColor, borderRadius: '20px'}}
                className="text-white flex justify-around items-center font-bold mt-2 py-2 px-4 rounded lg:mr-2"
              >
                <p className="mr-2">{homeButton}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={17}
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.59331 1.30718C7.83405 1.11994 8.17116 1.11994 8.4119 1.30718L14.4119 5.97385C14.5743 6.10015 14.6693 6.29435 14.6693 6.50008V13.8334C14.6693 14.3638 14.4586 14.8726 14.0835 15.2476C13.7084 15.6227 13.1997 15.8334 12.6693 15.8334H3.33594C2.8055 15.8334 2.2968 15.6227 1.92172 15.2476C1.54665 14.8726 1.33594 14.3638 1.33594 13.8334V6.50008C1.33594 6.29435 1.43092 6.10015 1.59331 5.97385L7.59331 1.30718ZM2.66927 6.82614V13.8334C2.66927 14.0102 2.73951 14.1798 2.86453 14.3048C2.98956 14.4298 3.15913 14.5001 3.33594 14.5001H12.6693C12.8461 14.5001 13.0157 14.4298 13.1407 14.3048C13.2657 14.1798 13.3359 14.0102 13.3359 13.8334V6.82614L8.0026 2.67799L2.66927 6.82614Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.33594 8.49992C5.33594 8.13173 5.63441 7.83325 6.0026 7.83325H10.0026C10.3708 7.83325 10.6693 8.13173 10.6693 8.49992V15.1666C10.6693 15.5348 10.3708 15.8333 10.0026 15.8333C9.63441 15.8333 9.33594 15.5348 9.33594 15.1666V9.16659H6.66927V15.1666C6.66927 15.5348 6.37079 15.8333 6.0026 15.8333C5.63441 15.8333 5.33594 15.5348 5.33594 15.1666V8.49992Z"
                    fill="white"
                  />
                </svg>
              </button>
            </Link>
            <Link to={buttonProductURL}>
              <button
                style={{backgroundColor: buttonColor, borderRadius: '20px'}}
                className=" mt-2 last:flex justify-around items-center text-white font-bold py-2 px-4 rounded"
              >
                <p className="mr-2 ">{productButton}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1493_1174)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 14.0001C4 13.2637 4.59695 12.6667 5.33333 12.6667C6.06971 12.6667 6.66667 13.2637 6.66667 14.0001C6.66667 14.7365 6.06971 15.3334 5.33333 15.3334C4.59695 15.3334 4 14.7365 4 14.0001Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.3359 14.0001C11.3359 13.2637 11.9329 12.6667 12.6693 12.6667C13.4057 12.6667 14.0026 13.2637 14.0026 14.0001C14.0026 14.7365 13.4057 15.3334 12.6693 15.3334C11.9329 15.3334 11.3359 14.7365 11.3359 14.0001Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.703125 1.36662C0.703125 0.998428 1.0016 0.699951 1.36979 0.699951H2.70313C3.01751 0.699951 3.28917 0.919589 3.35501 1.227L3.95603 4.03328H14.7298C14.932 4.03328 15.1233 4.12505 15.2498 4.28276C15.3763 4.44048 15.4244 4.64709 15.3806 4.84448L14.2809 9.79662C14.2808 9.79679 14.2809 9.79644 14.2809 9.79662C14.1829 10.2409 13.9363 10.6391 13.5819 10.9245C13.2274 11.2099 12.786 11.3659 12.3309 11.3666H5.81648C5.35423 11.375 4.90324 11.223 4.54033 10.9363C4.17529 10.6479 3.9222 10.2413 3.82462 9.78645L2.77161 4.86974C2.7665 4.8503 2.76225 4.83051 2.7589 4.81042L2.16412 2.03328H1.36979C1.0016 2.03328 0.703125 1.73481 0.703125 1.36662ZM4.24159 5.36662L5.12829 9.50678C5.12828 9.50671 5.12831 9.50686 5.12829 9.50678C5.16086 9.65831 5.24524 9.79399 5.36687 9.89007C5.48854 9.9862 5.63993 10.0369 5.79496 10.0334L5.80979 10.0333L12.3287 10.0333C12.3286 10.0333 12.3288 10.0333 12.3287 10.0333C12.4803 10.033 12.6276 9.98098 12.7457 9.8859C12.8639 9.79074 12.9461 9.65813 12.9787 9.50995L13.8988 5.36662H4.24159Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1493_1174">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </Link>
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
    {
      group: 'Button',
      inputs: [
        {
          type: 'color',
          label: 'Button Color',
          name: 'buttonColor',
          defaultValue: '#F78B1C',
        },
        {
          type: 'text',
          label: 'Home Button',
          name: 'homeButton',
          defaultValue: 'Visit our homepage',
        },
        {
          type: 'url',
          label: 'Button Home URL',
          name: 'buttonHomeURL',
          defaultValue: '/',
        },
        {
          type: 'text',
          label: 'Product Button',
          name: 'productButton',
          defaultValue: 'Browse all products',
        },
        {
          type: 'url',
          label: 'Button Product URL',
          name: 'buttonProductURL',
          defaultValue: '/products',
        },
      ],
    },
  ],
};

export default NotFound;
