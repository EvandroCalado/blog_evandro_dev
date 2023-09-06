import { twMerge } from 'tailwind-merge';

export interface HeadingProps {
  title: string;
  className?: string;
}

export default function Heading({ title, className }: HeadingProps) {
  return (
    <h1
      className={twMerge(
        'mx-auto max-w-xl text-center text-5xl font-extrabold',
        className,
      )}
    >
      {title}
    </h1>
  );
}
