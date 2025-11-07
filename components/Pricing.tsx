export default function Pricing() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-4">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Everything you need to automate your workflows and sync your team in one powerful platform
      </p>
    </div>

    {/* Pricing Card */}
    <div className="mt-12 md:mt-16 flex justify-center">
      <div className="max-w-md w-full bg-white rounded-2xl border-2 border-blue-600 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Card Header Badge */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 px-6 py-3 text-center">
          <span className="text-white font-bold text-sm tracking-wide uppercase">Complete Solution</span>
        </div>

        {/* Card Content */}
        <div className="p-8 md:p-10 lg:p-12">
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">FlowSync Pro</h3>

          {/* Price */}
          <div className="mb-2">
            <div className="text-5xl font-bold text-gray-900">$29</div>
            <p className="text-gray-600 mt-2 font-medium">One-time payment</p>
          </div>

          {/* Features */}
          <div className="mt-6 mb-6 space-y-3">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Intelligent workflow automation with AI</span>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Real-time collaboration and sync</span>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">200+ integrations with popular tools</span>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Advanced analytics and reporting</span>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Custom API and webhooks</span>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Enterprise-grade security and compliance</span>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=e99a9acc-b34b-4351-adaa-f3c91528dfc3'}
            className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl mt-8"
          >
            Get Your Website - $29
          </button>

          {/* Trust Badge */}
          <p className="text-center text-sm text-gray-500 mt-6">
            🔒 Secure payment • Instant access • 30-day guarantee
          </p>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-12 md:mt-16">
      <p className="text-gray-600 text-lg">
        Join hundreds of teams automating their workflows with FlowSync
      </p>
    </div>
  </div>
</section>
  );
}