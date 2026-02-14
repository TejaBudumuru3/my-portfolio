'use client'
import { Analytics } from '@vercel/analytics/next'
import Link from 'next/link'

const AnalyticsPage = () => {

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Header */}
            <div className="border-b border-white/6 px-6 md:px-12 lg:px-20 py-6">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <Link href="/" className="text-[#a0a0a0] hover:text-white transition-colors text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        Back to Portfolio
                    </Link>
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#28c840] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#28c840]"></span>
                        </span>
                        <span className="text-sm font-medium text-[#a0a0a0]">Active</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-16">
                <div className="mb-14">
                    <p className="text-[#7c3aed] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Powered by Vercel</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Visitor Analytics.</h2>
                    <p className="text-[#a0a0a0] text-base max-w-xl">This portfolio uses Vercel Analytics for real-time, privacy-friendly visitor tracking with zero performance impact.</p>
                </div>

                {/* Feature Cards */}
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                    <FeatureCard
                        icon={
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        }
                        title="Real-Time Tracking"
                        description="Every page view is captured instantly. No sampling, no delays — see exactly who visits and when."
                    />
                    <FeatureCard
                        icon={
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        }
                        title="Privacy First"
                        description="No cookies used. GDPR compliant out of the box. Visitor privacy is respected by default."
                    />
                    <FeatureCard
                        icon={
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        }
                        title="Zero Performance Cost"
                        description="The analytics script is tiny (~1KB) and loads lazily. No impact on page load or user experience."
                    />
                    <FeatureCard
                        icon={
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        }
                        title="Rich Dashboard"
                        description="Page views, unique visitors, top pages, referrers, countries, devices — all in the Vercel dashboard."
                    />
                </div>

                {/* How it works */}
                <div className="bg-[#0a0a0a] border border-white/6 rounded-2xl p-8 md:p-10 mb-8">
                    <h3 className="text-white font-semibold text-lg mb-6">How It Works</h3>
                    <div className="space-y-5">
                        <Step num="01" text="Every time someone visits the portfolio, Vercel Analytics automatically captures the page view." />
                        <Step num="02" text="Data flows to the Vercel dashboard in real-time — page views, unique visitors, top pages, referrers, and more." />
                        <Step num="03" text="All analytics are privacy-compliant. No cookies, no personal data stored. Just clean, aggregate metrics." />
                    </div>
                </div>

                {/* CTA to Vercel dashboard */}
                <div className="bg-[#0a0a0a] border border-[#7c3aed]/20 rounded-2xl p-8 md:p-10 text-center">
                    {/* <div className="w-12 h-12 rounded-xl bg-[#7c3aed]/10 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-6 h-6 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">View Full Dashboard</h3>
                    <p className="text-[#a0a0a0] text-sm mb-6 max-w-md mx-auto">
                        The detailed analytics dashboard with charts, trends, and insights is available on the Vercel platform.
                    </p> */}
                    {/* <a
                        href="https://vercel.com/dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7c3aed] text-white font-semibold text-sm hover:bg-[#6d28d9] transition-all duration-200 hover:shadow-[0_8px_30px_-4px_rgba(124,58,237,0.4)]"
                    >
                        Open Vercel Dashboard
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a> */}
                    <Analytics />
                </div>
            </div>
        </div>
    )
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="bg-[#0a0a0a] border border-white/6 rounded-2xl p-6 hover:border-[#7c3aed]/30 transition-all duration-300 group hover:shadow-[0_0_40px_-12px_rgba(124,58,237,0.12)]">
        <div className="w-10 h-10 rounded-lg bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed] mb-4 group-hover:bg-[#7c3aed]/15 transition-colors">
            {icon}
        </div>
        <h4 className="text-white font-semibold mb-2">{title}</h4>
        <p className="text-[#a0a0a0] text-sm leading-relaxed">{description}</p>
    </div>
)

const Step = ({ num, text }: { num: string; text: string }) => (
    <div className="flex gap-4 items-start">
        <span className="text-[#7c3aed] font-mono text-sm font-bold mt-0.5 shrink-0">{num}</span>
        <p className="text-[#a0a0a0] text-sm leading-relaxed">{text}</p>
    </div>
)

export default AnalyticsPage
