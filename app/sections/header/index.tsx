import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
  WeaverseImage,
} from '@weaverse/hydrogen';
import {forwardRef} from 'react';
import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

type HeaderData = {
  bgColor: string;
  headerHeight: number;
  showCartIcon: boolean;
  showSearchIcon: boolean;
  logoImage: WeaverseImage;
  // More type definitions...
};

type HeaderProps = HydrogenComponentProps<Awaited<ReturnType<typeof loader>>> &
  HeaderData;

let Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  let {
    bgColor,
    headerHeight,
    showCartIcon,
    logoImage,
    showSearchIcon,
    children,
    ...rest
  } = props;
  // More component logic...

  return (
    <section ref={ref} {...rest}>
      <header
        style={{backgroundColor: bgColor, height: headerHeight}}
        className=" text-black py-4 flex justify-center items-center"
      >
        <div className=" mx-2 flex items-center justify-between w-full">
          {/* Menu trên mobile */}
          <div className=" w-1/3 md:hidden">
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
                  fill="#35312B"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
                  fill="#35312B"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
                  fill="#35312B"
                />
              </svg>
            </button>
          </div>

          {/* Menu trên desktop */}
          <nav className=" w-1/3 px-2 hidden md:flex space-x-4">
            {children?.map((child) => <> {child}</>)}
          </nav>
          {/* Logo */}
          <div className="w-1/3 px-2 py-2 flex justify-center items-center">
            <Link
              to="#"
              style={{color: '#F76526'}}
              className="font-bold text-lg"
            >
              Travis
              <Image data={logoImage} sizes={`(min-width: 45em) 50vw, 100vw`} />
            </Link>
          </div>
          {/* Ô tìm kiếm */}
          {/* <div className="flex-1 hidden md:block mx-4 md:mx-0">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white"
            />
          </div> */}
          {/* Biểu tượng giỏ hàng */}
          <div className=" w-1/3 flex flex-row justify-end">
            {showSearchIcon && (
              <Link to="#" className="text-white mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z"
                    fill="#35312B"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.996 15.9931C16.3865 15.6026 17.0197 15.6026 17.4102 15.9931L21.7102 20.2931C22.1008 20.6836 22.1008 21.3168 21.7102 21.7073C21.3197 22.0978 20.6865 22.0978 20.296 21.7073L15.996 17.4073C15.6055 17.0168 15.6055 16.3836 15.996 15.9931Z"
                    fill="#35312B"
                  />
                </svg>
              </Link>
            )}
            {showCartIcon && (
              <Link to="#" className="text-white mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 21C6 19.8954 6.89543 19 8 19C9.10457 19 10 19.8954 10 21C10 22.1046 9.10457 23 8 23C6.89543 23 6 22.1046 6 21Z"
                    fill="#35312B"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 21C17 19.8954 17.8954 19 19 19C20.1046 19 21 19.8954 21 21C21 22.1046 20.1046 23 19 23C17.8954 23 17 22.1046 17 21Z"
                    fill="#35312B"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.04688 2.0498C1.04688 1.49752 1.49459 1.0498 2.04688 1.0498H4.04688C4.51845 1.0498 4.92594 1.37926 5.0247 1.84038L5.92624 6.0498H22.0869C22.3902 6.0498 22.6771 6.18745 22.8669 6.42402C23.0567 6.66059 23.1288 6.97051 23.0631 7.2666L21.4135 14.6948C21.4134 14.6951 21.4135 14.6945 21.4135 14.6948C21.2666 15.3613 20.8966 15.9585 20.365 16.3866C19.8332 16.8147 19.1713 17.0487 18.4885 17.0498L8.7169 17.0498C8.02353 17.0624 7.34705 16.8344 6.80269 16.4043C6.25513 15.9718 5.87549 15.3618 5.72912 14.6796L4.1496 7.30449C4.14194 7.27533 4.13557 7.24565 4.13054 7.21551L3.23837 3.0498H2.04688C1.49459 3.0498 1.04688 2.60209 1.04688 2.0498ZM6.35458 8.0498L7.68463 14.2601C7.68461 14.2599 7.68465 14.2602 7.68463 14.2601C7.73347 14.4873 7.86005 14.6909 8.04249 14.835C8.225 14.9792 8.45208 15.0552 8.68463 15.0501L8.70687 15.0498L18.4853 15.0498C18.4851 15.0498 18.4854 15.0498 18.4853 15.0498C18.7127 15.0493 18.9336 14.9713 19.1108 14.8287C19.288 14.686 19.4113 14.4871 19.4603 14.2648L20.8404 8.0498H6.35458Z"
                    fill="#35312B"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </header>
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<HeaderData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'header-type',
  title: 'Header',
  // More schema definitions...
  childTypes: ['menu-item-type'],
  inspector: [
    {
      group: 'General',
      inputs: [
        {
          type: 'range',
          label: 'Height',
          name: 'headerHeight',
          defaultValue: 40,
          configs: {
            min: 40,
            max: 300,
            step: 1,
            unit: 'px',
          },
        },
        {
          type: 'color',
          label: 'Background color',
          name: 'bgColor',
          defaultValue: '#FFDCBA',
        },
        {
          type: 'switch',
          label: 'Show Search Icon',
          name: 'showSearchIcon',
          defaultValue: true,
        },
        {
          type: 'switch',
          label: 'Show Cart Icon',
          name: 'showCartIcon',
          defaultValue: true,
        },

        {
          type: 'image',
          name: 'logoImage',
          label: 'Logo Image',
          defaultValue: {
            url: 'https://cdn.shopify.com/s/files/1/0669/0262/2504/files/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg?v=1697429747',
            altText: 'Logo',
            width: 100,
            height: 100,
          },
        },
      ],
    },
  ],
};

export default Header;
