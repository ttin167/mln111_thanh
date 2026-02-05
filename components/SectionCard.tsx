import { ReactNode } from 'react';

interface SectionCardProps {
  children: ReactNode;
  gradient?: 'blue-pink' | 'pink-blue' | 'none';
  className?: string;
}

export default function SectionCard({ 
  children, 
  gradient = 'blue-pink',
  className = ''
}: SectionCardProps) {
  const gradientClasses = {
    'blue-pink': 'bg-gradient-blue-pink',
    'pink-blue': 'bg-gradient-pink-blue',
    'none': 'bg-white/85'
  };

  return (
    <div 
      className={`
        rounded-xl shadow-2xl p-6 backdrop-blur-md border border-white/30
        ${gradientClasses[gradient]}
        ${className}
        hover:shadow-xl transition-shadow duration-300
      `}
    >
      {children}
    </div>
  );
}
