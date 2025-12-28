import { TbCircleCheck } from "react-icons/tb";

type KnowledgeCheckboxProps = {
  title: string;
};

export default function KnowledgeCheckbox({ title }: KnowledgeCheckboxProps) {
  return (
    <div className="card-container">
      <div className="px-4 py-5 sm:p-6">
        <TbCircleCheck className="size-7 stroke-1.5" />
        <h3 className="mt-1 text-xl/8 text-balance font-medium text-black dark:text-white">
          {title}
        </h3>
      </div>
    </div>
  );
}
