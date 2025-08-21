'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  forwardRef,
  useEffect,
  useMemo,
  useState,
  ImgHTMLAttributes,
} from 'react';

type Radius = '12px' | '8px';

export interface ImageProps
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'alt' | 'sizes' | 'srcSet' | 'onError' | 'loading'
  > {
  alt: string;
  src: string;
  placeholder?: string;
  sizes?: string;
  srcSet?: string;
  onError?: () => void;
  borderRadius?: Radius;
  round?: boolean;
  lazy?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const {
    alt,
    src,
    placeholder,
    sizes,
    srcSet,
    onError,
    borderRadius,
    round,
    lazy = false,
    className,
    style,
    ...rest
  } = props;

  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  const roundedClass = useMemo(() => {
    if (round) return 'rounded-full';
    if (borderRadius === '12px') return 'rounded-[12px]';
    if (borderRadius === '8px') return 'rounded-[8px]';
    return ''; // no rounding
  }, [round, borderRadius]);

  const handleError: React.ReactEventHandler<HTMLImageElement> = () => {
    if (placeholder) setImageSrc(placeholder);
    onError?.();
  };

  return (
    <img
      ref={ref}
      alt={alt}
      src={imageSrc}
      sizes={sizes}
      srcSet={srcSet}
      onError={handleError}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
      className={[roundedClass, className].filter(Boolean).join(' ')}
      style={style}
      {...rest}
    />
  );
});

Image.displayName = 'Image';

export default Image;
