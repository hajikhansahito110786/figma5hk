//import { Navbar, Nav, NavItem } from "@shadcn/ui";

export default function Gallary1() {
  return (
    <div className="p-4">
  <h2 className="text-xl font-bold">Featured Products</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <div className="rounded-lg shadow-md overflow-hidden">
      <img
        src="https://dummyimage.com/300x200/000/fff"
        alt="Urban Stack Chair"
        className="w-full"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium">Urban Stack Chair</h3>
        <p className="text-gray-500">$150</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="rounded-lg shadow-md overflow-hidden">
      <img
        src="https://dummyimage.com/300x200/000/fff"
        alt="Urban Stool Chair"
        className="w-full"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium">Urban Stool Chair</h3>
        <p className="text-gray-500">$200</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="rounded-lg shadow-md overflow-hidden">
      <img
        src="https://dummyimage.com/300x200/000/fff"
        alt="Urban Stool Chair"
        className="w-full"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium">Urban Stool Chair</h3>
        <p className="text-gray-500">$250</p>
      </div>
    </div>
  </div>
</div>

  );
}