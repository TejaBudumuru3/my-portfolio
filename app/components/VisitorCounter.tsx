'use client'
import Link from 'next/link'

const VisitorCounter = () => {
    return (
        <Link href="/analytics" className="flex items-center gap-2 text-[#525252] text-xs hover:text-[#a0a0a0] transition-colors">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#28c840] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#28c840]"></span>
            </span>
            <span>Analytics Active</span>
        </Link>
    )
}

export default VisitorCounter
