export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} InfraVerse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
