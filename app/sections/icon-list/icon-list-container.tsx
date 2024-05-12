import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
  WeaverseImage,
} from '@weaverse/hydrogen';
import type {CSSProperties} from 'react';
import {forwardRef} from 'react';

type IconListData = {
  paddingTop: number;
  paddingBottom: number;
  title: string;
  backgroundColor: string;
  mainImage: WeaverseImage;

  // More type definitions...
};

type IconListProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  IconListData;

let ListIcon = forwardRef<HTMLElement, IconListProps>((props, ref) => {
  let {
    paddingTop,
    title,
    mainImage,
    backgroundColor,
    paddingBottom,
    children,

    ...rest
  } = props;
  // More component logic...
  let styleSection: CSSProperties = {
    paddingTop,
    paddingBottom,
    backgroundColor,
  } as CSSProperties;
  return (
    <section ref={ref} {...rest} style={styleSection}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          {/* Icon 1 */}
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={191}
              height={191}
              viewBox="0 0 191 191"
              fill="none"
            >
              <path
                d="M95.4999 186.083C145.781 186.083 186.542 145.322 186.542 95.0417C186.542 44.7609 145.781 4 95.4999 4C45.2192 4 4.45825 44.7609 4.45825 95.0417C4.45825 145.322 45.2192 186.083 95.4999 186.083Z"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32.1667 158.375L63.8334 126.708"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M158.833 31.708L127.167 63.3747"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M53.886 73.8161L80.0098 99.9395L88.8591 155.42C89.15 157.087 89.8938 158.642 91.0084 159.916C92.1235 161.189 93.5667 162.132 95.1809 162.641C96.7951 163.149 98.5182 163.205 100.162 162.801C101.805 162.397 103.306 161.55 104.501 160.351L160.014 104.838C161.213 103.643 162.06 102.142 162.464 100.499C162.868 98.8553 162.812 97.1323 162.304 95.5181C161.795 93.9039 160.852 92.4607 159.579 91.3456C158.305 90.2309 156.75 89.4875 155.083 89.1962L99.6024 80.347L73.4789 54.2231"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M75.1115 46.0596C75.9776 46.9257 76.4644 48.1005 76.4644 49.3252C76.4644 50.5499 75.9776 51.7248 75.1115 52.5908L52.2533 75.449C51.3876 76.3151 50.2128 76.8016 48.9881 76.8016C47.7634 76.8016 46.5885 76.3151 45.7224 75.449C44.8564 74.5829 44.3699 73.4081 44.3699 72.1834C44.3699 70.9587 44.8564 69.7839 45.7224 68.9178L68.5806 46.0596C69.4467 45.1935 70.6215 44.707 71.8462 44.707C73.071 44.707 74.2458 45.1935 75.1115 46.0596Z"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M81.6427 62.3867L75.1118 68.9176"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M97.97 78.7144L91.4387 85.2452"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M89.8062 70.5503L80.0098 80.3468"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M85.2998 127.304L126.967 85.6367"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M115.93 132.594C118.635 129.889 118.635 125.503 115.93 122.798C113.225 120.093 108.839 120.093 106.134 122.798C103.428 125.503 103.428 129.889 106.134 132.594C108.839 135.299 113.225 135.299 115.93 132.594Z"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M136.339 112.185C136.555 111.969 136.849 111.847 137.155 111.847C137.461 111.847 137.755 111.969 137.972 112.185"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M136.339 113.818C136.122 113.601 136.001 113.308 136.001 113.002C136.001 112.695 136.122 112.402 136.339 112.185"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M137.972 113.818C137.755 114.034 137.461 114.156 137.155 114.156C136.849 114.156 136.555 114.034 136.339 113.818"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M137.972 112.185C138.188 112.402 138.31 112.695 138.31 113.002C138.31 113.308 138.188 113.601 137.972 113.818"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M120.828 108.103C121.045 107.887 121.338 107.765 121.644 107.765C121.951 107.765 122.244 107.887 122.461 108.103"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M120.828 109.736C120.612 109.519 120.49 109.226 120.49 108.92C120.49 108.613 120.612 108.32 120.828 108.103"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M122.461 109.736C122.244 109.952 121.951 110.074 121.644 110.074C121.338 110.074 121.045 109.952 120.828 109.736"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M122.461 108.103C122.677 108.32 122.799 108.613 122.799 108.92C122.799 109.226 122.677 109.519 122.461 109.736"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          {/* Icon 2 */}
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={191}
              height={191}
              viewBox="0 0 191 191"
              fill="none"
            >
              <path
                d="M122.1 89.1039C121.625 79.1289 107.85 64.3247 107.85 64.3247C107.85 64.3247 95.4999 78.0205 95.4999 87.9955C95.4718 92.1027 96.9023 96.0864 99.5374 99.2372C96.4416 96.6477 92.5671 95.1704 88.5332 95.0414C78.479 95.0414 64.7832 107.233 64.7832 107.233C64.7832 107.233 79.6665 121.166 89.6415 121.562"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M120.675 120.296C118.945 118.492 116.868 117.057 114.568 116.078C112.269 115.098 109.795 114.594 107.296 114.596C96.5292 114.121 81.8042 127.737 81.8042 127.737C97.6375 142.383 115.45 150.458 133.183 132.725C150.917 114.992 143.792 98.129 128.196 81.3457C128.196 81.3457 114.658 96.0707 115.054 106.837C115.053 109.337 115.557 111.81 116.536 114.11C117.516 116.409 118.951 118.486 120.754 120.217"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M102.15 71.2914C101.754 62.0289 88.9293 48.2539 88.9293 48.2539C88.9293 48.2539 77.2918 61.2372 77.6876 70.5789C77.7585 73.5568 78.5751 76.4693 80.0626 79.0497L79.5876 79.6039C76.9731 78.1282 74.0384 77.3132 71.0376 77.2289C61.7751 76.8331 49.0293 88.4706 49.0293 88.4706C49.0293 88.4706 62.8043 101.296 71.7501 101.691"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M78.7959 64.4833C78.1345 60.0329 75.9527 55.9487 72.6209 52.9249C64.7043 45.0083 43.7251 43.2666 43.7251 43.2666C43.7251 43.2666 45.3876 64.1666 53.3834 72.1624C56.4072 75.4942 60.4914 77.676 64.9418 78.3374"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M133.183 132.725L147.275 146.816"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M95.4999 186.083C145.781 186.083 186.542 145.322 186.542 95.0417C186.542 44.7609 145.781 4 95.4999 4C45.2192 4 4.45825 44.7609 4.45825 95.0417C4.45825 145.322 45.2192 186.083 95.4999 186.083Z"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.1375 159.404L60.6666 129.875"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M159.862 30.6792L130.333 60.2084"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          {/* Icon 3 */}
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={191}
              height={191}
              viewBox="0 0 191 191"
              fill="none"
            >
              <path
                d="M95.4999 186.083C145.781 186.083 186.542 145.322 186.542 95.0417C186.542 44.7609 145.781 4 95.4999 4C45.2192 4 4.45825 44.7609 4.45825 95.0417C4.45825 145.322 45.2192 186.083 95.4999 186.083Z"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M130.49 60.2086C94.5995 79.2098 86.1548 142.542 86.1548 142.542M86.1548 142.542C86.1548 142.542 79.9085 61.9617 48 47.5415C55.2651 81.1347 68.1657 113.255 86.1548 142.542Z"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M99.5783 96.934C95.3888 91.6587 93.2217 85.0602 93.4679 78.3278C93.7137 71.5959 96.3567 65.1731 100.92 60.2177C111.476 47.5415 143.144 47.5415 143.144 47.5415C143.144 47.5415 144.984 70.3451 134.699 85.5431C125.446 99.229 111.515 104.264 99.5783 96.934Z"
                stroke="#D9CFC6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* (Add additional icons if needed) */}
      </div>
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<IconListData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'icon-list',
  title: 'Icon List',
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
          defaultValue: 'Shop by life style',
          placeholder: 'Enter section title',
        },
      ],
    },
    {
      group: 'Color',
      inputs: [
        {
          type: 'color',
          label: 'Background Color',
          name: 'backgroundColor',
          defaultValue: '#FAF6F0',
        },
        {
          type: 'color',
          label: 'Icon Color',
          name: 'iconColor',
          defaultValue: '#F78B1C',
        },
      ],
    },
  ],
};

export default ListIcon;
