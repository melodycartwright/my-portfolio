import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
    children:ReactNode;
};
export default function DividerReveal({children}: Props) {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-softwhite dark:bg-charcoal">
            <motion.div
            initial={{ x:0 }}
            animate={{ x: "-100%"}}
            transition={{duration: 1.2, ease:"easeInOut", delay:0.3}}
            className="absolute inset-0 bg-blush z-30 origin-left clip-left"/>
            <motion.div
            initial={{ x:0}}
            animate= {{opacity: 1, scale: 1 }}
            transition={{delay:1.5, duration: 0.6 }} 
            className="relative z-40">
                {children}
                </motion.div>

        </div>
    );
}