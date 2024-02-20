import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find the perfect property rental",
  description: "Find the perfect property rental",
  keywords: "property, rental, real estate",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
