import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Avatar from '../../../components/Avatar/Avatar';
import Categories from '../../../components/Categories/Categories';
import Date from '../../../components/Date/Date';
import Heading from '../../../components/Heading/Heading';
import { fetchApi } from '../../../helpers/fetchApi-helpers';
import { Post } from '../../../types/post';

export interface SlugProps {
  params: {
    slug: string;
  };
}

const getPost = async (slug: string) => {
  const path = '/posts';
  const urlParamsObject = {
    populate: {
      cover: '*',
      author: {
        populate: 'image',
      },
      categories: '*',
      tags: '*',
    },
    filters: {
      slug,
    },
  };
  const { data } = await fetchApi(path, urlParamsObject);

  return data[0];
};

export default async function Slug({ params }: SlugProps) {
  const post: Post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const { title, content, author, categories, createdAt, cover } =
    post.attributes;

  return (
    <div className="space-y-8">
      <Heading title={title} />
      <div className="relative mx-auto h-[520px] max-w-screen-xl">
        <Image
          className="rounded-lg object-cover px-4"
          src={cover.data.attributes.url}
          alt={title}
          fill
        />
      </div>
      <div className="mx-auto flex max-w-5xl items-center gap-2 px-4">
        <Avatar author={author} />
        <span className="italic opacity-50">Em:</span>
        <Date createdAt={createdAt} />
        <span className="italic opacity-50">Categorias:</span>
        <Categories categories={categories} />
      </div>
      <div className="prose prose-zinc mx-auto max-w-5xl px-4 dark:prose-invert lg:prose-xl">
        <MDXRemote source={content} />
      </div>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
}
