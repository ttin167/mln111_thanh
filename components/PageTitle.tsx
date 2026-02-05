import { ReactNode } from 'react';

interface PageTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export default function PageTitle({ children, subtitle, className = '' }: PageTitleProps) {
  return (
    <div className={`mb-8 -mx-8 -mt-12 px-8 pt-8 ${className}`}>
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
        {children}
      </h1>
      {subtitle && (
        <p className="text-lg text-gray-700">
          {subtitle}
        </p>
      )}
    </div>
  );
}
