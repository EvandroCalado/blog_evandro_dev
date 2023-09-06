import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export type LinkButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  disabled?: boolean;
};

export default function LinkButton({
  children,
  href,
  className,
  disabled,
}: LinkButtonProps) {
  const disabledClass = 'opacity-40 pointer-events-none';

  return (
    <Link
      href={href}
      className={twMerge(
        'inline-flex items-center rounded-lg bg-theme-500 px-3 py-2 text-center text-sm font-medium text-theme-100 outline-none duration-200 hover:bg-theme-600 focus:shadow-lg active:bg-theme-700 dark:bg-theme-400 dark:text-theme-950 dark:hover:bg-theme-300 dark:active:bg-theme-500',
        disabled && disabledClass,
        className,
      )}
    >
      {disabled ? 'Sem mais posts' : children}
    </Link>
  );
}
