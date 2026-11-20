"use client";
export default function MotionDivider({text="Scroll / Continue"}){
 return <div className="motion-divider" aria-hidden="true"><div className="motion-divider-track"><span>{text}</span><i/><span>{text}</span><i/><span>{text}</span><i/><span>{text}</span><i/><span>{text}</span></div></div>;
}
