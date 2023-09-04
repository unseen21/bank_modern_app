import { clients } from "../constant";

const Client = () => (
  <section className={`flex justify-center items-center mt-4 pb-10`}>
    <div
      className={`flex justify-center items-center
                    flex-wrap w-full h-full`}
    >
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 flex justify-center items-center
          sm:min-w-[192px]`}
        >
          <img
            src={client.logo}
            alt={client.logo}
            className="sm:w-[192px] w-[100px] h-[42px] object-contain
            hover:scale-105 cursor-pointer"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Client;
