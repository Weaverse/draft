import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import type {CSSProperties} from 'react';
import {forwardRef} from 'react';
import {clsx} from 'clsx';

type ContactUsData = {
  paddingTop: number;
  paddingBottom: number;
  title: string;
  buttonColor: string;
  buttonText: string;
  titlePosition: string;
  // More type definitions...
};

type ContactUsProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  ContactUsData;

let ContactUs = forwardRef<HTMLElement, ContactUsProps>((props, ref) => {
  let {
    paddingTop,
    title,
    paddingBottom,
    children,
    buttonColor,
    buttonText,
    titlePosition,
    ...rest
  } = props;
  // More component logic...
  let styleSection: CSSProperties = {
    paddingTop,
    paddingBottom,
  } as CSSProperties;
  return (
    <section ref={ref} {...rest} style={styleSection}>
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
        <h2
          className={clsx(
            'text-2xl font-semibold mb-4',
            `text-${titlePosition}`,
          )}
        >
          {title}
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-base leading-relaxed font-normal mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-full"
              placeholder="Name"
              required={true}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-base leading-relaxed font-normal mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-full"
              placeholder="Email"
              required={true}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="comment"
              className="block text-base leading-relaxed font-normal mb-2"
            >
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              className="w-full px-3 py-2 border rounded-md"
              rows={4}
              placeholder="Comment"
              required={true}
              defaultValue={''}
            />
          </div>
          <button
            type="submit"
            className="w-full  text-white py-2 px-4 rounded-full"
            style={{backgroundColor: buttonColor}}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<ContactUsData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'contact-us',
  title: 'Contact Us',
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
          defaultValue: 'Contact Us',
          placeholder: 'Enter section heading',
        },
        {
          type: 'toggle-group',
          label: 'Title position',
          name: 'titlePosition',
          configs: {
            options: [
              {label: 'Left', value: 'left'},
              {label: 'Center', value: 'center'},
            ],
          },
          defaultValue: 'left',
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
          label: 'Button',
          name: 'buttonText',
          defaultValue: 'Button',
        },
      ],
    },
  ],
};

export default ContactUs;
