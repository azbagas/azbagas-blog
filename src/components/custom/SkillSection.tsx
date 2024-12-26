import SkillLogo from '@/components/custom/SkillLogo';

interface Props {
  title: string;
  description?: string;
  skills: { title: string; classLogo: string }[];
}

export default function SkillSection({ title, description, skills }: Props) {
  return (
    <>
      <h3 className="text-lg font-semibold mt-8">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 sm:gap-4 mt-2">
        {skills.map((skill) => (
          <SkillLogo title={skill.title} classLogo={skill.classLogo} />
        ))}
      </div>
    </>
  );
}
