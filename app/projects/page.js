


export default async function  Page (){
 
  return (
    <div className="max-w-4xl mx-auto px-20 py-10">
    
      <h1 className="text-3xl font-bold mb-12">My Projects</h1>

      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}}></div>

        <div className="mb-8 flex justify-between items-center w-full left-timeline">
          <div className="order-1 w-5/12"> </div>
          <div className="order-1 w-5/12 p-4 bg-gray-300 rounded-lg shadow-xl">
            <h2 className="text-lg font-semibold"> Price scraper project   </h2>
            <p className="text-gray-800">Upcoming project...</p>
            <a href="#" className="text-blue-500 mt-2 block"></a>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="order-1 w-5/12 p-4 bg-gray-300 rounded-lg shadow-xl">
            <h2 className="text-lg font-semibold">Ecommerce site</h2>
            <p className="text-gray-800">Upcoming project...</p>
            <a href="#" className="text-blue-500 mt-2 block"></a>
          </div>
        </div>
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}}></div>

<div className="mb-8 flex justify-between items-center w-full left-timeline">
  <div className="order-1 w-5/12"> </div>
  <div className="order-1 w-5/12 p-4 bg-gray-300 rounded-lg shadow-xl">
    <h2 className="text-lg font-semibold"> Price scraper project   </h2>
    <p className="text-gray-800">Upcoming project...</p>
    <a href="#" className="text-blue-500 mt-2 block"></a>
  </div>
</div>

<div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
  <div className="order-1 w-5/12"></div>
  <div className="order-1 w-5/12 p-4 bg-gray-300 rounded-lg shadow-xl">
    <h2 className="text-lg font-semibold">Ecommerce site</h2>
    <p className="text-gray-800">Upcoming project...</p>
    <a href="#" className="text-blue-500 mt-2 block"></a>
  </div>
</div>
        

        {/* Add more projects following the same structure */}
      </div>
    </div>
  );
};

