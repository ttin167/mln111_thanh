'use client';

import { useState, createContext, useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/', label: 'Trang Chủ', color: 'bg-purple-600', top: '163px' },
  { href: '/philosophy', label: 'Các Học Thuyết', color: 'bg-blue-600', top: '280px' },
  { href: '/desires', label: 'Phân Loại Ham Muốn', color: 'bg-pink-600', top: '405px' },
  { href: '/tetrapharmakos', label: '4 Liệu Pháp', color: 'bg-orange-600', top: '528px' },
  { href: '/interactive', label: 'Công Cụ Tương Tác', color: 'bg-indigo-600', top: '642px' },
];

const SidebarContext = createContext<{
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  dragX: number | null;
  setDragX: (value: number | null) => void;
  isDragging: boolean;
  setIsDragging: (value: boolean) => void;
}>({
  isCollapsed: false,
  setIsCollapsed: () => {},
  dragX: null,
  setDragX: () => {},
  isDragging: false,
  setIsDragging: () => {},
});

export const useSidebar = () => useContext(SidebarContext);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [dragX, setDragX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  return (
    <SidebarContext.Provider value={{
      isCollapsed,
      setIsCollapsed,
      dragX,
      setDragX,
      isDragging,
      setIsDragging,
    }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default function Sidebar() {
  const { isCollapsed, setIsCollapsed, dragX, isDragging } = useSidebar();
  const pathname = usePathname();
  const SIDEBAR_WIDTH = 256;
  const sidebarX = dragX ?? (isCollapsed ? -SIDEBAR_WIDTH : 0);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-primary text-white p-2 rounded-md shadow-lg"
      >
        {isCollapsed ? '☰' : '✕'}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen border-r border-white/30 shadow-2xl z-40 w-64 ${
          isDragging ? '' : 'transition-transform duration-300'
        }`}
        style={{ 
          transform: `translateX(${sidebarX}px)`,
          backgroundImage: 'url(/images/Bookshelf.jpg)',
          backgroundSize: '100% 50%',
          backgroundPosition: 'top, bottom',
          backgroundRepeat: 'repeat-y',
        }}
      >
        {/* Overlay để làm tối background nhẹ */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <nav className="relative w-full h-full">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`absolute left-1/2 -translate-x-1/2 w-[220px] px-4 py-3 rounded-lg text-center font-semibold text-white transition-all duration-200
                  ${item.color}
                  ${isActive 
                    ? 'shadow-xl scale-105 ring-2 ring-white' 
                    : 'shadow-md hover:shadow-lg hover:scale-102'
                  }
                `}
                style={{ top: item.top }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
