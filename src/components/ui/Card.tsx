import { HTMLAttributes, forwardRef } from 'react';
import { cn } from './Button';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('rounded-xl border border-gray-200 bg-white text-gray-950 shadow', className)} {...props} />
  )
);
Card.displayName = 'Card';
