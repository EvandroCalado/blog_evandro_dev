import Image from 'next/image';
import Link from 'next/link';
import { icons } from '../../icons';
import { Post } from '../../types/post';
import Categories from '../Categories/Categories';
import Date from '../Date/Date';

export interface CardProps {
  post: Post;
}

export default function Card({ post }: CardProps) {
  const { title, description, slug, cover, createdAt, categories } =
    post.attributes;
  const { url, width, height } = cover.data.attributes.formats.medium;

  return (
    <div className="max-w-sm rounded-lg border border-theme-400 bg-theme-100 shadow-lg shadow-theme-300 dark:border-theme-600 dark:bg-theme-950 dark:shadow-theme-950">
      <Link href={`/blog/${slug}`}>
        <Image
          className="rounded-t-lg"
          src={url}
          alt={title}
          width={width}
          height={height}
        />
      </Link>
      <div className="p-5">
        <Categories categories={categories} className="mb-3" />
        <Link href={`/blog/${slug}`}>
          <h5 className="mb-2 line-clamp-2 text-2xl font-bold tracking-tight">
            {title}
          </h5>
        </Link>
        <p className="mb-3 line-clamp-3 font-normal">{description}</p>
        <div className="flex items-center justify-between">
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center rounded-lg bg-theme-500 px-3 py-2 text-center text-sm font-medium text-theme-100 outline-none duration-200 hover:bg-theme-600 hover:pr-2 focus:shadow-lg active:bg-theme-700 dark:bg-theme-400 dark:text-theme-950 dark:hover:bg-theme-300 dark:active:bg-theme-500 [&>svg]:w-5 [&>svg]:duration-200 [&>svg]:hover:ml-1"
          >
            Ler mais
            {icons.arrowRight}
          </Link>
          <Date createdAt={createdAt} />
        </div>
      </div>
    </div>
  );
}
