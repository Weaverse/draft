import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import {forwardRef} from 'react';
import {Link} from '@remix-run/react';

type MenuItemData = {
  menuColor: string;
  menuLink: string;
  menuText: string;
  // More type definitions...
};

type MenuItemProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  MenuItemData;

let MenuItem = forwardRef<HTMLElement, MenuItemProps>((props, ref) => {
  let {menuColor, menuLink, menuText, children, ...rest} = props;
  // More component logic...

  return (
    <section ref={ref} {...rest}>
      <Link
        to={menuLink}
        style={{color: menuColor}}
        className="hover:text-gray-300 hover:underline"
      >
        {menuText}
      </Link>
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<MenuItemData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'menu-item-type',
  title: 'Menu Link',
  // More schema definitions...
  inspector: [
    {
      group: 'General',
      inputs: [
        {
          type: 'text',
          label: 'Menu Text',
          name: 'menuText',
        },
        {
          type: 'url',
          label: 'Menu Link',
          name: 'menuLink',
        },
        {
          type: 'color',
          label: 'Menu Color',
          name: 'menuColor',
          defaultValue: '#F08D27',
        },
      ],
    },
  ],
  presets: {
    children: [
      {
        type: 'announce-bar-item-type',
      },
    ],
  },
};

export default MenuItem;
