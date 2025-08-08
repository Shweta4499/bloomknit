// components/Footer.jsx

const Footer = () => {
    return (
      <footer className="bg-yellow-100 text-yellow-900 py-8 border-t-4 border-yellow-200 text-center">
        {/* Brand Name */}
        <h2 className="text-2xl font-semibold mb-2">MAYA & Co 🌼</h2>
  
        {/* Description */}
        <p className="text-sm max-w-md mx-auto mb-4 leading-relaxed">
          Handmade crochet flowers & bouquets, crafted with love. <br />
          PAN India Delivery | 100+ Happy Customers 💛
        </p>
  
        {/* Divider */}
        <div className="h-px bg-yellow-300 w-24 mx-auto mb-4"></div>
  
        {/* Copyright */}
        <p className="text-xs text-yellow-800">
          &copy; {new Date().getFullYear()} MAYA & Co. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  