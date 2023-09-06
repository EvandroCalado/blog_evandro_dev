import { formateDate } from '../../helpers/formatDate-helpers';

export type DateProps = {
  createdAt: string;
};

export default function Date({ createdAt }: DateProps) {
  return (
    <div>
      <time className="font-semibold">{formateDate(createdAt)}</time>
    </div>
  );
}
