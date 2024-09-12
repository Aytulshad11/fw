import React from "react";

function Footer(){
    return(
        <>
            <footer className="py-8 border-t border-gold/20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">© 2023 Acme Inc. All rights reserved.</p>
          <nav className="flex gap-6">
            <a className="text-sm text-gray-500 hover:text-gold transition-colors duration-300" href="#">
              Terms of Service
            </a>
            <a className="text-sm text-gray-500 hover:text-gold transition-colors duration-300" href="#">
              Privacy Policy
            </a>
          </nav>
        </div>
      </footer>
        </>
    )
}
export default Footer;