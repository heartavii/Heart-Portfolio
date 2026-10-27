
import "./globals.css";

export const metadata = {
  title: "Angel Heart Avilanes | IT Portfolio",
  description:
    "The portfolio of Angel Heart Avilanes, an Information Technology student showcasing technical skills, projects, and internship interests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
