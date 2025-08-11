declare namespace JSX {
  interface IntrinsicElements {
    'dotlottie-wc': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      speed?: string | number;
      autoplay?: boolean | string;
      loop?: boolean | string;
      style?: React.CSSProperties | string;
    };
  }
}
