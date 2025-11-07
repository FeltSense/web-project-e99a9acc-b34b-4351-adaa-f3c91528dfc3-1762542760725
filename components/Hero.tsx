export default function Hero() {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-3xl"></div>
  </div>

  {/* Grid pattern overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left Content */}
      <div className="space-y-8 animate-fade-in">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full backdrop-blur-sm">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-slate-900"></div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-900"></div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-slate-900"></div>
          </div>
          <span className="text-sm text-teal-300 font-medium">Trusted by 500+ companies worldwide</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
          Intelligent Workflow
          <span className="block mt-2 bg-gradient-to-r from-teal-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
            Automation with AI
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed">
          Connect your entire tech stack, automate repetitive tasks, and unlock real-time collaboration across 200+ integrations—all powered by cutting-edge AI.
        </p>

        {/* Key benefits */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-200">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-base md:text-lg">AI-powered task automation saves 15+ hours per week</span>
          </div>
          <div className="flex items-center gap-3 text-gray-200">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-base md:text-lg">Real-time sync across all your favorite tools</span>
          </div>
          <div className="flex items-center gap-3 text-gray-200">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-base md:text-lg">Enterprise-grade security with SOC 2 compliance</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
            Start Free Trial
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="px-8 py-4 border-2 border-white/20 text-white text-lg font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 pt-8 mt-12 border-t border-white/10">
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
            <div className="text-sm text-gray-400">Active Companies</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold text-white">200+</div>
            <div className="text-sm text-gray-400">Integrations</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold text-white">99.9%</div>
            <div className="text-sm text-gray-400">Uptime SLA</div>
          </div>
        </div>
      </div>

      {/* Right Image/Visual */}
      <div className="relative lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {/* Floating card with glassmorphism */}
        <div className="relative">
          {/* Main dashboard mockup */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800/50 backdrop-blur-sm">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&h=900&fit=crop" 
              alt="FlowSync dashboard showing workflow automation" 
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
          </div>

          {/* Floating stat card - top right */}
          <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-xl animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">+247%</div>
                <div className="text-sm text-gray-300">Productivity Boost</div>
              </div>
            </div>
          </div>

          {/* Floating notification card - bottom left */}
          <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Workflow Automated</div>
                <div className="text-xs text-gray-300 mt-1">15 tasks completed automatically</div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/4 -right-12 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 bottom-1/4 -left-12 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom gradient fade */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
</div>

<style jsx>{`
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
  }
`}</style>
  );
}