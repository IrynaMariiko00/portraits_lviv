import { ArrowUpRight } from "lucide-react";
import { useNavigateToPortrait } from "~/hooks/useNavigateToPortrait";
import type { PortraitProps } from "~/types/portrait";

const PortfolioCard = ({
  item: { id, img, title, category },
}: PortraitProps) => {
  const { navigateToPortrait } = useNavigateToPortrait();
  return (
    <div
      className="group relative h-full w-full rounded-3xl overflow-hidden glass-border-card"
      onClick={() => navigateToPortrait(id)}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="card-overlay" />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-light-blue">{category}</span>
        <h3 className="subtitle font-[600]">{title}</h3>
      </div>

      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--color-btn-highlight)] backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <ArrowUpRight className="w-5 h-5 text-[var(--primary-color)]" />
      </div>
    </div>
  );
};

export default PortfolioCard;
