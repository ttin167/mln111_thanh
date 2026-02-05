'use client';

import { useEffect, useRef } from 'react';
import { useSidebar } from './Sidebar';

export default function ColumnHandle() {
  const {
    isCollapsed,
    setIsCollapsed,
    dragX,
    setDragX,
    isDragging,
    setIsDragging,
  } = useSidebar();

  const SIDEBAR_WIDTH = 256;
  const COLUMN_WIDTH = 375;
  const OVERLAP = COLUMN_WIDTH * 0.2;
  const minX = -SIDEBAR_WIDTH;
  const maxX = 0;
  const sidebarX = dragX ?? (isCollapsed ? -SIDEBAR_WIDTH : 0);
  const columnLeft = sidebarX + SIDEBAR_WIDTH - OVERLAP - 32;

  const startXRef = useRef(0);
  const startSidebarXRef = useRef(0);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging) return;
      const delta = event.clientX - startXRef.current;
      const next = Math.min(maxX, Math.max(minX, startSidebarXRef.current + delta));
      setDragX(next);
    };

    const handlePointerUp = () => {
      if (!isDragging) return;
      setIsDragging(false);
      const current = dragX ?? startSidebarXRef.current;
      const shouldCollapse = current < -SIDEBAR_WIDTH / 2;
      setIsCollapsed(shouldCollapse);
      setDragX(null);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging, dragX, setDragX, setIsCollapsed, setIsDragging]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    startXRef.current = event.clientX;
    startSidebarXRef.current = sidebarX;
    setDragX(sidebarX);
  };

  const handleClick = () => {
    if (isDragging) return;
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsCollapsed(!isCollapsed);
        }
      }}
      role="button"
      tabIndex={0}
      className={`fixed top-0 h-[113vh] w-[375px] cursor-grab active:cursor-grabbing z-50 ${
        isDragging ? '' : 'transition-[left] duration-300'
      }`}
      title={isCollapsed ? 'Kéo cột để mở sidebar' : 'Kéo cột để đóng sidebar'}
      style={{
        left: `${columnLeft}px`,
        opacity: 1,
      }}
    >
      <img
        src="/images/column.png"
        alt="Column"
        className="h-full w-full object-cover"
        draggable={false}
      />
    </div>
  );
}
