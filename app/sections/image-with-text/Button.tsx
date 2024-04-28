import {
  InspectorGroup,
  type HydrogenComponentProps,
  type HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import {forwardRef} from 'react';
import type {CSSProperties} from 'react';

import {Link} from '~/components';

export interface ButtonProps {
  text: string;
  link: string;
  openInNewTab: boolean;
  backgroundColor: string;
  width: number;
  height: number;
  borderRadius: number;
}

interface Props extends ButtonProps, Partial<HydrogenComponentProps> {}

let Button = forwardRef<HTMLElement, Props>((props, ref) => {
  let {
    text,
    link,
    width,
    height,
    borderRadius,
    backgroundColor,
    openInNewTab,
    ...rest
  } = props;
  let styleSection: CSSProperties = {
    backgroundColor,
    height,
    width,
    borderRadius,
  } as CSSProperties;
  return (
    <Link
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
      {...rest}
      to={link || '/'}
      target={openInNewTab ? '_blank' : '_self'}
      rel="noreferrer"
      style={styleSection}
      className="text-white font-bold py-2 px-4  flex items-center justify-center "
    >
      {text}
    </Link>
  );
});

export default Button;

export let buttonInputs: InspectorGroup['inputs'] = [
  {
    type: 'text',
    name: 'text',
    label: 'Text content',
    defaultValue: 'Shop now',
    placeholder: 'Shop now',
  },
  {
    type: 'url',
    name: 'link',
    label: 'Link to',
    defaultValue: '/products',
    placeholder: '/products',
  },
  {
    type: 'switch',
    name: 'openInNewTab',
    label: 'Open in new tab',
    defaultValue: false,
    condition: 'buttonLink.ne.nil',
  },
  {
    type: 'range',
    name: 'width',
    label: 'Button width',
    defaultValue: 100,
    configs: {
      min: 90,
      max: 500,
      step: 1,
      unit: 'px',
    },
  },
  {
    type: 'range',
    name: 'height',
    label: 'Button height',
    defaultValue: 52,
    configs: {
      min: 30,
      max: 500,
      step: 1,
      unit: 'px',
    },
  },
  {
    type: 'range',
    name: 'borderRadius',
    label: 'Border Radius',
    defaultValue: 0,
    configs: {
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
    },
  },
  {
    type: 'color',
    name: 'backgroundColor',
    label: 'Background color',
    defaultValue: '#F78B1C',
  },
];

export let schema: HydrogenComponentSchema = {
  type: 'image-with-text-button',
  title: 'Button',
  inspector: [
    {
      group: 'Button',
      inputs: buttonInputs,
    },
  ],
  toolbar: ['general-settings', ['duplicate', 'delete']],
};
