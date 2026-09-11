export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12 mt-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Block */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">DS</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Dev Stack</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for modern developers building exceptional software.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:text-purple-600 hover:border-purple-300 transition-colors"
                title="GitHub"
              >
                GH
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:text-purple-600 hover:border-purple-300 transition-colors"
                title="Twitter / X"
              >
                TW
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:text-purple-600 hover:border-purple-300 transition-colors"
                title="LinkedIn"
              >
                IN
              </a>
            </div>
          </div>

          {/* Group 1: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#home" className="hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Group 2: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#about" className="hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-gray-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Group 3: Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar*/}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
