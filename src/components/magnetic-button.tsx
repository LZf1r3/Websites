'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import React from 'react';

export function MagneticButton({
  children,
  className,
  href
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 12 });
  const springY = useSpring(y, { stiffness: 150, damping: 12 });

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.3);
    y.set(offsetY * 0.3);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Comp: React.ElementType = href ? 'a' : 'button';

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <Comp
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={className}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
