import React from 'react';
import styled from 'styled-components';
import '@/stars.css';

const sharedClasses = {
  zincBackground: 'bg-zinc-800',
  zincText: 'text-zinc-300',
  zincAccent: 'bg-zinc-700',
  zincOverlay: 'bg-zinc-900/40',
};

const ProfileTitle = styled.p`
  font-size: 15px;
  margin-top: 5px;
  color: white;
`;

const Banner = () => {
  return (
    <div className="mt-2">
      <div className="min-h-screen overflow-hidden relative border border-black border-opacity-60 bg-black bg-opacity-60">
        <div className="bg-animation absolute inset-0 z-0">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-9 md:gap-3 h-96 relative z-10">
          <div className="col-span-3 relative hidden md:block">
            <img
              src="/images/Portprofile.png"
              className="hidden md:inline-block h-96 mt-12 absolute -mr-8 xl:mr-0 right-0 top-10 -mb-12 flex-shrink-0 max-w-none"
              alt="Profile"
            />
          </div>
          <div className="col-span-3 relative block md:hidden">
            <img
              src="/images/Portprofile.png"
              className="inline-block h-52 mt-12 absolute ml-auto bottom-0 left-0 right-0 mr-auto -mb-32 flex-shrink-0 max-w-none"
              alt="Profile"
            />
          </div>
          <div className="col-span-6 flex items-center justify-center md:justify-start relative">
            <div>
              <div className={`backdrop-blur-md py-5 px-4 ${sharedClasses.zincOverlay} rounded-lg inline-block text-center md:text-left mx-2 xs:mx-0`}>
                <h1 className="text-4xl font-bold text-white">Azer Sagucio</h1>
                <div className="mt-2">
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold ${sharedClasses.zincText} rounded-md ${sharedClasses.zincAccent} whitespace-nowrap`} style={{ margin: '2px' }}>
                    Full-Stack Developer
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold ${sharedClasses.zincText} rounded-md ${sharedClasses.zincAccent} whitespace-nowrap`} style={{ margin: '2px' }}>
                    Software Engineer
                  </span>
                </div>
                <ProfileTitle>"Build Future, One Line at a Time."</ProfileTitle>
              </div>
              <div className="mt-2 flex md:absolute justify-center gap-1">{/* Additional content here */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
