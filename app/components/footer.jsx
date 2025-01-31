import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Logo</h3>
            <p>Turn your favorite books into audiobooks with ease.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>Email: haniolwan28@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 StoryStream Creator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
