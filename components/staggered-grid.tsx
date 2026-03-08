"use client"

import { motion } from "framer-motion"
import { GuideCard } from "./guide-card"
import type { Guide } from "@/lib/guides"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
}

export function StaggeredGrid({ guides }: { guides: Guide[] }) {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
            {guides.map((guide) => (
                <motion.div key={guide.slug || guide.id} variants={item}>
                    <GuideCard guide={guide} />
                </motion.div>
            ))}
        </motion.div>
    )
}
