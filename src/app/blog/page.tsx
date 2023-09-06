import Card from '../../components/Card/Card';
import Heading from '../../components/Heading/Heading';
import LinkButton from '../../components/LinkButton/LinkButton';
import { fetchApi } from '../../helpers/fetchApi-helpers';
import { Post } from '../../types/post';

interface PaginationProps {
  searchParams: {
    page?: string;
  };
}

const getData = async (page = 1, pageSize = 3) => {
  const path = '/posts';
  const urlParamsObject = {
    populate: '*',
    sort: {
      createdAt: 'asc',
    },
    pagination: {
      page,
      pageSize,
    },
  };

  const { data, meta } = await fetchApi(path, urlParamsObject);

  return {
    data,
    pagination: meta.pagination,
  };
};

export default async function Blog({ searchParams }: PaginationProps) {
  const { page = 1 } = searchParams;
  let pageNumber = Number(page);

  if (isNaN(pageNumber) || pageNumber < 1) {
    pageNumber = 1;
  }

  const { data, pagination } = await getData(1, Number(pageNumber) * 2);
  const { page: currentPage, pageCount } = pagination;

  console.log(pagination);
  return (
    <div className="space-y-8">
      <Heading title="Ultimas Postagens" />
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 place-items-center justify-center gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((post: Post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <LinkButton
          href={`?page=${Number(pageNumber) + 1}`}
          className="px-5 py-3 text-lg"
          disabled={currentPage === pageCount}
        >
          Carregar mais
        </LinkButton>
      </div>
    </div>
  );
}
