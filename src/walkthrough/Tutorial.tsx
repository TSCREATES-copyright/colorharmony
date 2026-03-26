import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTutorial } from '../hooks/useTutorial';
import { TUTORIAL_STEPS } from './tutorialSteps';
import { Button } from '../components/ui/Button';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

export function Tutorial() {
  const { isActive, currentStepIndex, endTutorial, nextStep, prevStep, hasSeenTutorial, startTutorial } = useTutorial();
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  
  const step = TUTORIAL_STEPS[currentStepIndex];
  const isLastStep = currentStepIndex === TUTORIAL_STEPS.length - 1;
  const isFirstStep = currentStepIndex === 0;

  useEffect(() => {
    if (!hasSeenTutorial) {
      // Small delay to let the UI render before starting
      const timer = setTimeout(() => {
        startTutorial();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hasSeenTutorial, startTutorial]);

  useEffect(() => {
    if (!isActive || !step) return;

    const updateRect = () => {
      const el = document.querySelector(step.target);
      if (el) {
        setTargetRect(el.getBoundingClientRect());
      } else {
        setTargetRect(null);
      }
    };

    updateRect();
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect, true); // true for capture phase to catch scroll events on any element

    // Re-check after a short delay in case of animations
    const timer = setTimeout(updateRect, 300);

    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect, true);
      clearTimeout(timer);
    };
  }, [isActive, step]);

  if (!isActive || !step) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Backdrop with cutout */}
      <div 
        className="absolute inset-0 bg-black/50 transition-all duration-300 pointer-events-auto"
        style={{
          clipPath: targetRect 
            ? `polygon(
                0% 0%, 0% 100%, 100% 100%, 100% 0%, 0% 0%,
                ${targetRect.left - 8}px ${targetRect.top - 8}px,
                ${targetRect.right + 8}px ${targetRect.top - 8}px,
                ${targetRect.right + 8}px ${targetRect.bottom + 8}px,
                ${targetRect.left - 8}px ${targetRect.bottom + 8}px,
                ${targetRect.left - 8}px ${targetRect.top - 8}px
              )`
            : 'none'
        }}
        onClick={endTutorial}
      />

      {/* Tooltip */}
      {targetRect && (
        <div 
          className="absolute bg-white rounded-xl shadow-2xl border border-gray-100 w-80 p-5 pointer-events-auto transition-all duration-300 transform"
          style={getTooltipStyle(targetRect, step.placement)}
        >
          <button 
            onClick={endTutorial}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="mb-4 pr-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{step.message}</p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-1">
              {TUTORIAL_STEPS.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all ${i === currentStepIndex ? 'w-4 bg-blue-600' : 'w-1.5 bg-gray-200'}`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              {!isFirstStep && (
                <Button variant="outline" size="sm" onClick={prevStep} className="px-2">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
              )}
              <Button size="sm" onClick={isLastStep ? endTutorial : nextStep} className="gap-1">
                {isLastStep ? 'Finish' : 'Next'}
                {!isLastStep && <ChevronRight className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}

function getTooltipStyle(rect: DOMRect, placement: 'top' | 'bottom' | 'left' | 'right'): React.CSSProperties {
  const gap = 16;
  const style: React.CSSProperties = {};

  // We use fixed positioning to avoid scroll issues
  if (placement === 'right') {
    style.top = Math.max(16, rect.top + rect.height / 2 - 100); // approximate center
    style.left = rect.right + gap;
  } else if (placement === 'left') {
    style.top = Math.max(16, rect.top + rect.height / 2 - 100);
    style.left = rect.left - 320 - gap; // 320 is tooltip width
  } else if (placement === 'bottom') {
    style.top = rect.bottom + gap;
    style.left = Math.max(16, rect.left + rect.width / 2 - 160);
  } else if (placement === 'top') {
    style.top = rect.top - 200 - gap; // approximate height
    style.left = Math.max(16, rect.left + rect.width / 2 - 160);
  }

  // Ensure it doesn't go off-screen (basic boundary check)
  if (style.left && (style.left as number) < 16) style.left = 16;
  if (style.top && (style.top as number) < 16) style.top = 16;

  return style;
}
