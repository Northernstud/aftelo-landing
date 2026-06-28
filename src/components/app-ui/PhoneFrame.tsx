import type { ReactNode } from "react";
import "./PhoneFrame.css";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * A device shell that holds a recreated app screen. The bezel is a solid
 * dark surface (not glass) so the glassy app UI inside reads correctly —
 * glass on glass would muddy (§4).
 */
export function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone__bezel">
        <span className="phone__notch" aria-hidden="true" />
        <div className="phone__screen">{children}</div>
      </div>
    </div>
  );
}
