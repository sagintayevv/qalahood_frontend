import { Grid2x2, Grid3x3, List, ChevronDown } from "lucide-react";

interface CatalogToolbarProps {
  count: number;
}

export function CatalogToolbar({ count }: CatalogToolbarProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex items-center gap-4 text-gray-400">
        <button aria-label="Крупная сетка">
          <Grid2x2 size={18} />
        </button>
        <button aria-label="Мелкая сетка">
          <Grid3x3 size={18} />
        </button>
        <button aria-label="Список">
          <List size={18} />
        </button>
      </div>

      <p className="text-sm font-medium tracking-wide text-gray-900 uppercase">
        {count} товаров
      </p>

      <button className="flex items-center gap-1 text-sm font-medium tracking-wide uppercase text-gray-900">
        Фильтр
        <ChevronDown size={16} />
      </button>
    </div>
  );
}
