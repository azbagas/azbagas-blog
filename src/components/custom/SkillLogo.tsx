import { Badge } from '@/components/ui/badge';

interface Props {
  title: string;
  classLogo: string;
}

export default function SkillLogo({ classLogo, title }: Props) {
  return (
    <Badge variant="outline" className='px-3 py-1 text-sm'>
      <i className={`${classLogo} text-base mr-2`}></i><span>{title}</span>
    </Badge>
  );
}
