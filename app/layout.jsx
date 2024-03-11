import "@/assets/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "photoswipe/dist/photoswipe.css";
import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Get Home | Find Your Home",
  description: "Find Your Dream Home | This is a fake website for a portfolio",
  keywords: "rental, home, apartment, fake, portfolio",
};

const layout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default layout;
