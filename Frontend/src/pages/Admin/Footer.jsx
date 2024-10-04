

export const Footer = () => {
  return (
    <footer className="bg-clayBrown text-white py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold mb-2">
          Developers
        </h2>
        <p className="mb-1">Address: 123 Developer Lane, Code City, DE 12345</p>
        <p className="mb-1">Email: contact@yourcompany.com</p>
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};
