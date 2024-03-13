import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 md:py-40 dark:bg-gradient-to-b from-gray-900 to-slate-900 max-h-full">
      <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            <div className="flex w-full justify-center space-x-12 text-gray-600 dark:text-gray-300 sm:w-7/12 md:justify-start">
              <ul className="list-inside list-disc space-y-8">
                <li><a href="#" className="transition hover:text-primary">Home</a></li>
                <li><a href="#" className="transition hover:text-primary">About</a></li>
                <li><a href="#" className="transition hover:text-primary">Guide</a></li>
                <li><a href="#" className="transition hover:text-primary">Blocks</a></li>
                <li><a href="#" className="transition hover:text-primary">Contact</a></li>
                <li><a href="#" className="transition hover:text-primary">Terms of Use</a></li>
              </ul>
              <ul role="list" className="space-y-8">
                <li>
                  <a href="#" className="flex items-center space-x-3 transition hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    <span>Github</span>
                  </a>
                </li>
                {/* Other social media links */}
              </ul>
            </div>
            <div className="m-auto mt-16 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left">
{/*               <span className="block text-gray-500 dark:text-gray-400">We change the way UI components librairies are used</span> */}
              <span className="block text-gray-500 dark:text-gray-400">Tailus Blocks &copy; <span id="year"></span></span>
              <span className="flex justify-between text-gray-600 dark:text-white">
                <a href="#" className="font-medium">Terms of Use </a>
                <a href="#" className="font-medium"> Privacy Policy</a>
              </span>
              <span className="block text-gray-500 dark:text-gray-400">Need help? <a href="#" className="font-semibold text-gray-600 dark:text-white"> Contact Us</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
