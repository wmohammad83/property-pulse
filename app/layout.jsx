import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "@/assets/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "PropertyPulse | Find the perfect property rental",
  description: "Find the perfect property rental",
  keywords: "property, rental, real estate",
};

const MainLayout = ({ children }) => {
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

export default MainLayout;
