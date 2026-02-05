'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar, { useSidebar } from './Sidebar';
import ColumnHandle from './ColumnHandle';
import RightColumn from './RightColumn';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const { isCollapsed, setIsCollapsed, setDragX } = useSidebar();
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const holdTimerRef = useRef<number | null>(null);
  const [isHidden, setIsHidden] = useState(false);
  const [showDesiresCurtain, setShowDesiresCurtain] = useState(false);
  const [isCurtainClosing, setIsCurtainClosing] = useState(false);
  const [interactiveBackground, setInteractiveBackground] = useState('Soc_address.jpg');
  const [isBackgroundChanging, setIsBackgroundChanging] = useState(false);

  const getBackgroundImage = () => {
    if (pathname === '/philosophy') return 'url(/images/Raphael_School_of_Athens.jpg)';
    if (pathname === '/desires') return 'url(/images/The%20Garden%20of%20Earthly%20Delights.jpg)';
    if (pathname === '/tetrapharmakos') return 'url(/images/The%20Triumph%20of%20Bacchus.jpg)';
    if (pathname === '/interactive') return `url(/images/${interactiveBackground})`;
    return 'url(/images/The_Feast_of_Achelous.jpg)';
  };
  
  // Listen for custom event to change interactive background
  useEffect(() => {
    const handleBackgroundChange = (event: CustomEvent) => {
      setIsBackgroundChanging(true);
      setTimeout(() => {
        setInteractiveBackground(event.detail.background);
        setTimeout(() => setIsBackgroundChanging(false), 100);
      }, 500);
    };
    
    window.addEventListener('changeInteractiveBackground' as any, handleBackgroundChange as any);
    return () => {
      window.removeEventListener('changeInteractiveBackground' as any, handleBackgroundChange as any);
    };
  }, []);
  
  // Reset interactive background when leaving page
  useEffect(() => {
    if (pathname !== '/interactive') {
      setInteractiveBackground('Soc_address.jpg');
      setIsBackgroundChanging(false);
    }
  }, [pathname]);
  
  const shouldShowBackground = true;
  const backgroundImage = getBackgroundImage();

  useEffect(() => {
    setIsCollapsed(true);
    setDragX(null);
  }, [pathname, setIsCollapsed, setDragX]);

  useEffect(() => {
    if (pathname === '/desires') {
      setShowDesiresCurtain(true);
      setIsCurtainClosing(false);
      return;
    }
    setShowDesiresCurtain(false);
    setIsCurtainClosing(false);
  }, [pathname]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!contentRef.current) return;
      const target = event.target as Node | null;
      if (target && contentRef.current.contains(target)) return;

      if (holdTimerRef.current) {
        window.clearTimeout(holdTimerRef.current);
      }

      holdTimerRef.current = window.setTimeout(() => {
        setIsHidden(true);
      }, 2000);
    };

    const handlePointerUp = () => {
      if (holdTimerRef.current) {
        window.clearTimeout(holdTimerRef.current);
        holdTimerRef.current = null;
      }
      if (isHidden) {
        setIsHidden(false);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    window.addEventListener('blur', handlePointerUp);

    return () => {
      if (holdTimerRef.current) {
        window.clearTimeout(holdTimerRef.current);
        holdTimerRef.current = null;
      }
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      window.removeEventListener('blur', handlePointerUp);
    };
  }, [isHidden]);

  return (
    <div className="flex min-h-screen relative">
      {showDesiresCurtain && (
        <div
          className="fixed inset-0 z-50 cursor-pointer"
          onClick={() => {
            if (isCurtainClosing) return;
            setIsCurtainClosing(true);
            window.setTimeout(() => {
              setShowDesiresCurtain(false);
              setIsCurtainClosing(false);
            }, 700);
          }}
        >
          <div
            className={`absolute inset-y-0 left-0 w-1/2 bg-black transition-transform duration-700 ease-in-out ${
              isCurtainClosing ? '-translate-x-full' : 'translate-x-0'
            }`}
          />
          <div
            className={`absolute inset-y-0 right-0 w-1/2 bg-black transition-transform duration-700 ease-in-out ${
              isCurtainClosing ? 'translate-x-full' : 'translate-x-0'
            }`}
          />
          <div
            className={`absolute inset-y-0 left-0 w-1/2 transition-transform duration-700 ease-in-out ${
              isCurtainClosing ? '-translate-x-full' : 'translate-x-0'
            }`}
            style={{
              backgroundImage: 'url(/images/door_left.jpg)',
              backgroundSize: 'auto 100vh',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className={`absolute inset-y-0 right-0 w-1/2 transition-transform duration-700 ease-in-out ${
              isCurtainClosing ? 'translate-x-full' : 'translate-x-0'
            }`}
            style={{
              backgroundImage: 'url(/images/door_right.jpg)',
              backgroundSize: 'auto 100vh',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      )}
      {/* Fixed background image */}
      {shouldShowBackground && (
        <div 
          className={`fixed inset-0 w-full h-full z-0 transition-opacity duration-1000 ${
            isBackgroundChanging ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        />
      )}
      
      <div
        className={`relative z-10 flex-1 w-full transition-all duration-500 ${
          isHidden ? 'opacity-0 pointer-events-none blur-sm scale-[0.98]' : 'opacity-100'
        }`}
      >
        <Sidebar />
        <ColumnHandle />
        <RightColumn />
        <main 
          className={`flex-1 transition-all duration-300 relative z-10 ${
            isCollapsed ? 'lg:ml-0' : 'lg:ml-64'
          }`}
        >
          {/* Container with title on top and content below */}
          <div className="flex items-center justify-center p-8 min-h-screen">
            <div
              ref={contentRef}
              className="w-full max-w-3xl flex flex-col gap-6"
            >
              {/* Title section - no background */}
              <div>
                {/* PageTitle will render here without background */}
              </div>
              
              {/* Content wrapper with background */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
