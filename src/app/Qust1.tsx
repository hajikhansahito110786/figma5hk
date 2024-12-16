export default function Qus1() {
    return (
        <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Question Answers</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-center mb-8">
            Questions Looks Here
          </h1>
          <p className="text-gray-500 text-center mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-yellow-100 rounded-md shadow-md p-4 flex flex-col justify-between">
              <h2 className="text-lg font-bold mb-2">
                What types of chairs do you offer?
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
                modi ullam amet debitis libero veritatis enim repellat optio natus eum
                delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Learn More
              </button>
            </div>
            <div className="bg-yellow-100 rounded-md shadow-md p-4 flex flex-col justify-between">
              <h2 className="text-lg font-bold mb-2">
                How can we get in touch with you?
              </h2>
            </div>
          </div>
        </div>
      </>
      
    );
  }