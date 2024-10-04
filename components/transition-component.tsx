"use client"
interface MotionTransitionProps {
    children: React.ReactNode
    position: 'right' | 'bottom'
    className?: string
}
import { fadeIn } from '@/utils/motion-transition'
import {motion} from 'framer-motion'
const MotionTransition = (props:MotionTransitionProps) => {
    const {children, position, className} =props
    return ( 
        <motion.div
        variants={fadeIn(position)}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className={className}
        >
            {children}
        </motion.div>
     );
}
 
export default MotionTransition;
