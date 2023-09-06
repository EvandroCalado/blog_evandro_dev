import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Categories as CategoriesStrapi } from '../../types/post';

export type CategoriesProps = {
  categories: CategoriesStrapi;
  className?: string;
};

export default function Categories({ categories, className }: CategoriesProps) {
  return (
    <div className={twMerge('', className)}>
      {categories.data.map((category) => (
        <Link
          href={`/categories/${category.attributes.slug}`}
          key={category.id}
          className="mr-1 font-semibold duration-200 hover:opacity-50 after:[&:not(:last-child)]:content-[',']"
        >
          {category.attributes.name}
        </Link>
      ))}
    </div>
  );
}
