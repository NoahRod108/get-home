import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Get Home | Find Your Home",
  description: "Find Your Dream Home | This is a fake website for a portfolio",
  keywords: "rental, home, apartment, fake, portfolio",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default layout;
