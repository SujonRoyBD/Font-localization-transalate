export default function NotFound() {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4">Page Not Found</p>
        <p className="text-gray-500 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
  
        <a
          href="/"
          className="mt-6 px-6 py-2 bg-black text-white rounded-lg"
        >
          Go Home
        </a>
      </div>
    );
  }