export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-8 border-t border-gray-700">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm tracking-wide opacity-80">
          © {new Date().getFullYear()} InfraVerse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
