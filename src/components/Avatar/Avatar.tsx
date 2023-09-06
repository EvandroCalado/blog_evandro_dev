import Image from 'next/image';
import { Author } from '../../types/post';

export type AvatarProps = {
  author: Author;
};

export default function Avatar({ author }: AvatarProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={author.data.attributes.image.data.attributes.url}
        alt={author.data.attributes.name}
        width={50}
        height={50}
        className="rounded-full border-[2px] border-theme-900 dark:border-theme-100"
      />
      <h5 className="font-semibold">{author.data.attributes.name}</h5>
    </div>
  );
}
