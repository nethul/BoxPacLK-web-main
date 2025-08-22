import { ArrowLeft, Gift, Heart, Package, Users } from 'lucide-react';

const AboutPage = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={goBack}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-2">
              <Gift className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                BoxPac LK
              </span>
            </div>
            <div className="w-16"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-wider">
            HELLO THERE
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <h2 className="text-2xl sm:text-3xl text-gray-300 font-light tracking-wide">
            WE ARE BOXPAC
          </h2>
        </div>

        {/* Main Content */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-700/50 mb-16">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12">
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                Your <span className="text-purple-400 font-semibold">GIFT</span> is as unique as you, so we work with clients to create individual 
                packages that best fits them. These core options will give you a starting 
                point based on what our most common packages look like. We at <span className="text-purple-400 font-semibold"> BOXPAC </span> 
                create the perfect personal, client or corporate gift for you for every 
                occasion.
              </p>
            </div>

            {/* Two Column Content */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-200 leading-relaxed">
                      It's important you find someone, whose work you <span className="text-purple-400 font-semibold">LOVE</span> the most - We're lovers of 
                      adventure, dreamers, artists, and slightly addicted to ice cream. Tell us your gifting 
                      need and we will give you the best options available just for you! We hope this guide 
                      gives you an idea of our style, and who we are!
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-200 leading-relaxed">
                      Introducing our range of custom curated gift boxes - Each box is unique and contains 
                      luxury items imported from around the globe; Dove, Loreal, Brut, Boss, Mugs, 
                      Candles, Chocolates are just some of the names you will see in our boxes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Unique Gifts</h3>
            <p className="text-gray-300">Every gift is as unique as the person receiving it, carefully curated to match their personality.</p>
          </div>

          <div className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Package className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Premium Quality</h3>
            <p className="text-gray-300">Luxury items imported from around the globe, featuring trusted brands and premium products.</p>
          </div>

          <div className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Personal Touch</h3>
            <p className="text-gray-300">We work closely with clients to create the perfect personal, client, or corporate gift for every occasion.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;