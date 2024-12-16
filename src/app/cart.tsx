export default function Cart1() {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Bag</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-24">
                <img
                  src="https://placehold.co/200x200"
                  className="rounded-lg"
                  alt="Product Image"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold">Library Stool Chair</h3>
                <p className="text-sm">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm">Size: L, Quantity: 1</p>
                <div className="flex gap-2">
                  <button className="btn btn-sm btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    ></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }