export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} FitLife. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
