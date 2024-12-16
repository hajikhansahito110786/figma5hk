//import { Navbar, Nav, NavItem } from "@shadcn/ui";

export default function Footer1() {
  return (
    <footer className="bg-gray-100 py-8">
  <div className="container mx-auto flex flex-col items-center">
    <div className="flex flex-col items-center space-y-4">
      <img src="/logo.svg" alt="Logo" className="h-10" />
      <p className="text-gray-500 text-sm">
        Vivamus tristique odio sit amet velit semper, eu posuere turpis
        interdum. Cras egestas purus.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-gray-600">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-600">
          <i className="fab fa-twitter" />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-600">
          <i className="fab fa-instagram" />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-600">
          <i className="fab fa-pinterest-p" />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-600">
          <i className="fab fa-youtube" />
        </a>
      </div>
    </div>
    <div className="flex flex-wrap justify-between mt-8">
      <div className="flex flex-col space-y-4">
        <h3 className="text-gray-700 font-medium">Category</h3>
        <ul className="text-gray-500 text-sm">
          <li>
            <a href="#" className="hover:text-gray-600">
              Sofa
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              Armchair
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

  );
}