export default function Loading() {
  return (
    <div className="flex w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg animate-pulse dark:bg-gray-800">
      <div className="w-1/3 bg-gray-300 dark:bg-gray-600"></div>

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="w-40 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

        <p className="w-48 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

        <div className="flex mt-4 item-center gap-x-2">
          <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>

        <div className="flex justify-between mt-6 item-center">
          <h1 className="w-10 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

          <div className="h-4 bg-gray-200 rounded-lg w-28 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}
