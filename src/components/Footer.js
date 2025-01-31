function Footer() {
    return (
      <footer className="bg-dark-2 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-off-white">
            © {new Date().getFullYear()} Oshadhi Jayaweera. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  