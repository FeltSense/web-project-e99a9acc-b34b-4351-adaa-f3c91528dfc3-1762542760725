export default function Services() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 via-white to-teal-50 overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    {/* Section header */}
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
        </svg>
        Powerful Solutions
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        Everything You Need to
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mt-2">
          Work Smarter
        </span>
      </h2>
      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Streamline your workflow with intelligent automation, seamless collaboration, and powerful integrations
      </p>
    </div>

    {/* Services grid - Creative staggered layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
      
      {/* Featured service - Large card spanning 2 columns */}
      <div className="lg:col-span-7 group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-8 md:p-12 lg:p-16">
            <Image 
              src="https://picsum.photos/seed/flowsync-automation-ai/800/600" 
              alt="AI-Powered Workflow Automation" 
              width={800} 
              height={600} 
              className="w-full h-64 md:h-80 object-cover rounded-xl mb-6 shadow-lg"
            />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
              Most Popular
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI-Powered Workflow Automation
            </h3>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Transform repetitive tasks into intelligent workflows. Our AI engine learns your patterns and automates complex processes, saving your team 20+ hours per week.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-base text-gray-600">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Smart task routing with machine learning algorithms</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Automated approval chains and escalation rules</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Custom triggers and actions with no-code builder</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Real-time monitoring and performance analytics</span>
              </li>
            </ul>

            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
              <span>Explore Automation</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Second service - Smaller card */}
      <div className="lg:col-span-5 group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-8 md:p-12">
            <Image 
              src="https://picsum.photos/seed/flowsync-collaboration-sync/800/600" 
              alt="Real-Time Team Collaboration" 
              width={800} 
              height={600} 
              className="w-full h-48 md:h-64 object-cover rounded-xl mb-6 shadow-lg"
            />

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Real-Time Team Collaboration
            </h3>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Keep everyone in sync with live updates, shared workspaces, and instant notifications across all devices.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-base text-gray-600">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Live document co-editing</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Instant sync across devices</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Smart notifications & mentions</span>
              </li>
            </ul>

            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 group">
              <span>Learn More</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Third service - Smaller card */}
      <div className="lg:col-span-5 group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-8 md:p-12">
            <Image 
              src="https://picsum.photos/seed/flowsync-integrations-connect/800/600" 
              alt="Universal Integrations Hub" 
              width={800} 
              height={600} 
              className="w-full h-48 md:h-64 object-cover rounded-xl mb-6 shadow-lg"
            />

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Universal Integrations Hub
            </h3>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Connect with 200+ tools you already use. One-click integrations with Slack, Google Workspace, Salesforce, and more.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-base text-gray-600">
                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>200+ pre-built integrations</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600">
                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Custom API connections</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600">
                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Bi-directional data sync</span>
              </li>
            </ul>

            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 group">
              <span>View Integrations</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Fourth service - Larger card */}
      <div className="lg:col-span-7 group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-8 md:p-12 lg:p-16">
            <Image 
              src="https://picsum.photos/seed/flowsync-analytics-insights/800/600" 
              alt="Advanced Analytics & Insights" 
              width={800} 
              height={600} 
              className="w-full h-64 md:h-80 object-cover rounded-xl mb-6 shadow-lg"
            />

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Advanced Analytics & Insights
            </h3>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Make data-driven decisions with powerful analytics dashboards, custom reports, and predictive insights that help you optimize team performance and identify bottlenecks before they impact productivity.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-base text-gray-600">
                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Real-time performance dashboards with customizable widgets</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600">
                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Predictive analytics powered by machine learning</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600">
                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Custom report builder with scheduled delivery</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600">
                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Team productivity metrics and trend analysis</span>
              </li>
            </ul>

            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
              <span>See Analytics Demo</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-20 text-center">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl shadow-2xl">
        <div className="text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Ready to transform your workflow?
          </h3>
          <p className="text-teal-100 text-lg">
            Join 10,000+ teams already using FlowSync
          </p>
        </div>
        <button className="px-8 py-4 bg-white text-teal-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
          Start Free Trial
        </button>
      </div>
    </div>
  </div>
</section>
  );
}