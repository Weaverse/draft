import {
  InspectorGroup,
  type HydrogenComponentProps,
  type HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import {forwardRef} from 'react';
import type {CSSProperties} from 'react';

import {Link} from '~/components';

export interface ButtonProps {
  button1Text: string;
  link1: string;
  button2Text: string;
  link2: string;
  openInNewTab: boolean;
  backgroundColor: string;
  width: number;
  height: number;
  borderRadius: number;
  blockWidth: number;
}

interface Props extends ButtonProps, Partial<HydrogenComponentProps> {}

let Button = forwardRef<HTMLElement, Props>((props, ref) => {
  let {
    button1Text,
    link1,
    width,
    height,
    button2Text,
    link2,
    blockWidth,
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
    <div
      style={{width: blockWidth}}
      className="flex flex-row items-center justify-between"
    >
      <Link
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        {...rest}
        to={link1 || '/'}
        target={openInNewTab ? '_blank' : '_self'}
        rel="noreferrer"
        style={styleSection}
        className="text-white font-bold py-2 px-4 flex  items-center justify-center"
      >
        {button1Text}
      </Link>
      <Link
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        {...rest}
        to={link2 || '/'}
        target={openInNewTab ? '_blank' : '_self'}
        rel="noreferrer"
        style={styleSection}
        className="text-white font-bold py-2 px-4 flex items-center justify-center"
      >
        {button2Text}
      </Link>
    </div>
  );
});

export default Button;

export let buttonInputs: InspectorGroup['inputs'] = [
  {
    type: 'range',
    name: 'blockWidth',
    label: 'Block width',
    defaultValue: 400,
    configs: {
      min: 90,
      max: 500,
      step: 1,
      unit: 'px',
    },
  },
  {
    type: 'text',
    name: 'button1Text',
    label: 'Button #1 label',
    defaultValue: 'Button #1',
    placeholder: 'Button #1',
  },
  {
    type: 'text',
    name: 'button2Text',
    label: 'Button #2 label',
    defaultValue: 'Button #2',
    placeholder: 'Button #2',
  },
  {
    type: 'url',
    name: 'link1',
    label: 'Button #1 link',
    defaultValue: '/products',
    placeholder: '/products',
  },
  {
    type: 'url',
    name: 'link2',
    label: 'Button #2 link',
    defaultValue: '/products',
    placeholder: '/products',
  },
  {
    type: 'switch',
    name: 'openInNewTab',
    label: 'Open in new tab',
    defaultValue: false,
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
