export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
  {/* Subtle background pattern */}
  <div className="absolute inset-0 opacity-[0.03]">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 2px 2px, rgb(20 184 166) 1px, transparent 0)`,
      backgroundSize: '48px 48px'
    }}></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6">
        <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-sm font-semibold text-teal-700 tracking-wide">CLIENT SUCCESS STORIES</span>
      </div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
        Trusted by Industry Leaders
      </h2>
      <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        See how FlowSync transforms businesses with measurable results and exceptional service
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      
      {/* Testimonial 1 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
        <div className="flex items-center gap-1 mb-4 text-xl">
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
        </div>
        
        <blockquote className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
          <span className="text-4xl text-teal-200 leading-none font-serif">"</span>
          <span className="italic">FlowSync reduced our project delivery time by 40% in just two months. The automated workflow eliminated bottlenecks we didn't even know existed. Our team productivity has never been higher.</span>
          <span className="text-4xl text-teal-200 leading-none font-serif">"</span>
        </blockquote>

        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
          <img 
            src="https://cdn.pixabay.com/photo/2019/11/03/05/11/woman-4598818_1280.jpg"
            alt="Sarah Chen"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-teal-100 group-hover:ring-teal-300 transition-all duration-300"
          />
          <div>
            <div className="font-bold text-slate-900 text-lg">Sarah Chen</div>
            <div className="text-sm text-slate-600 mt-1">VP of Operations</div>
            <div className="text-sm text-teal-600 font-medium">TechVenture Solutions</div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
        <div className="flex items-center gap-1 mb-4 text-xl">
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
        </div>
        
        <blockquote className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
          <span className="text-4xl text-teal-200 leading-none font-serif">"</span>
          <span className="italic">We saved $127,000 in operational costs within the first quarter. The real-time analytics dashboard helped us identify inefficiencies instantly. Best investment we've made this year.</span>
          <span className="text-4xl text-teal-200 leading-none font-serif">"</span>
        </blockquote>

        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
          <img 
            src="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg"
            alt="Marcus Rodriguez"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-teal-100 group-hover:ring-teal-300 transition-all duration-300"
          />
          <div>
            <div className="font-bold text-slate-900 text-lg">Marcus Rodriguez</div>
            <div className="text-sm text-slate-600 mt-1">Chief Financial Officer</div>
            <div className="text-sm text-teal-600 font-medium">Apex Manufacturing</div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
        <div className="flex items-center gap-1 mb-4 text-xl">
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
        </div>
        
        <blockquote className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
          <span className="text-4xl text-teal-200 leading-none font-serif">"</span>
          <span className="italic">Our customer satisfaction scores jumped from 78% to 94% after implementing FlowSync. The seamless integration with our existing systems meant zero downtime during migration. Absolutely phenomenal support team.</span>
          <span className="text-4xl text-teal-200 leading-none font-serif">"</span>
        </blockquote>

        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
          <img 
            src="https://cdn.pixabay.com/photo/2020/09/18/19/27/laptop-5582775_1280.jpg"
            alt="Emily Thompson"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-teal-100 group-hover:ring-teal-300 transition-all duration-300"
          />
          <div>
            <div className="font-bold text-slate-900 text-lg">Emily Thompson</div>
            <div className="text-sm text-slate-600 mt-1">Director of Customer Success</div>
            <div className="text-sm text-teal-600 font-medium">CloudScale Enterprises</div>
          </div>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
        <div className="flex items-center gap-1 mb-4 text-xl">
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
        </div>
        
        <blockquote className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
          <span className="text-4xl text-teal-200 leading-none font-serif">"</span>
          <span className="italic">FlowSync helped us scale from 50 to 200 employees without adding complexity. The automated onboarding workflows cut our HR processing time by 65%. It's like having an extra team member who never sleeps.</span>
          <span className="text-4xl text-teal-200 leading-none font-serif">"</span>
        </blockquote>

        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
          <img 
            src="https://cdn.pixabay.com/photo/2021/01/04/10/37/icon-5887113_1280.png"
            alt="David Park"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-teal-100 group-hover:ring-teal-300 transition-all duration-300"
          />
          <div>
            <div className="font-bold text-slate-900 text-lg">David Park</div>
            <div className="text-sm text-slate-600 mt-1">Head of People Operations</div>
            <div className="text-sm text-teal-600 font-medium">Innovate Labs</div>
          </div>
        </div>
      </div>

      {/* Testimonial 5 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
        <div className="flex items-center gap-1 mb-4 text-xl">
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
        </div>
        
        <blockquote className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
          <span className="text-4xl text-teal-200 leading-none font-serif">"</span>
          <span className="italic">The AI-powered insights revealed patterns in our data we never noticed. We optimized our supply chain and reduced waste by 32%. ROI was positive within 6 weeks of implementation.</span>
          <span className="text-4xl text-teal-200 leading-none font-serif">"</span>
        </blockquote>

        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
          <img 
            src="https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_1280.jpg"
            alt="Jennifer Walsh"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-teal-100 group-hover:ring-teal-300 transition-all duration-300"
          />
          <div>
            <div className="font-bold text-slate-900 text-lg">Jennifer Walsh</div>
            <div className="text-sm text-slate-600 mt-1">Supply Chain Director</div>
            <div className="text-sm text-teal-600 font-medium">Global Logistics Corp</div>
          </div>
        </div>
      </div>

      {/* Testimonial 6 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
        <div className="flex items-center gap-1 mb-4 text-xl">
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
          <span className="text-amber-400">⭐</span>
        </div>
        
        <blockquote className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
          <span className="text-4xl text-teal-200 leading-none font-serif">"</span>
          <span className="italic">Migrating from our legacy system was surprisingly smooth. FlowSync's team handled everything, and we experienced zero data loss. Our reporting accuracy improved from 82% to 99.7% overnight.</span>
          <span className="text-4xl text-teal-200 leading-none font-serif">"</span>
        </blockquote>

        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
          <img 
            src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
            alt="Robert Kim"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-teal-100 group-hover:ring-teal-300 transition-all duration-300"
          />
          <div>
            <div className="font-bold text-slate-900 text-lg">Robert Kim</div>
            <div className="text-sm text-slate-600 mt-1">IT Infrastructure Manager</div>
            <div className="text-sm text-teal-600 font-medium">Meridian Financial</div>
          </div>
        </div>
      </div>

    </div>

    {/* Trust Badge */}
    <div className="mt-16 md:mt-20 text-center">
      <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-2xl">
        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span className="text-slate-700 font-medium">Join 2,500+ companies transforming their operations with FlowSync</span>
      </div>
    </div>
  </div>
</section>
  );
}