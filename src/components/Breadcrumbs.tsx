import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: Props) => (
  <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6 flex-wrap">
    <Link to="/" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
      <Home size={14} />
    </Link>
    {items.map((item, i) => (
      <span key={i} className="inline-flex items-center gap-1.5">
        <ChevronRight size={14} className="shrink-0" />
        {item.to ? (
          <Link to={item.to} className="hover:text-foreground transition-colors">
            {item.label}
          </Link>
        ) : (
          <span className="text-foreground font-medium">{item.label}</span>
        )}
      </span>
    ))}
  </nav>
);

export default Breadcrumbs;
