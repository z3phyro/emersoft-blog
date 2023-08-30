import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-md py-12">
      <div className="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <img
          alt="nature"
          className="h-[32rem] w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2717&amp;q=80"
        />
      </div>
      <h2 className="mb-2 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
        What is Material Tailwind
      </h2>
      <p className="block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
        Can you help me out? you will get a lot of free exposure doing this can my website be in
        english?. There is too much white space do less with more, so that will be a conversation
        piece can you rework to make the pizza look more delicious other agencies charge much lesser
        can you make the blue bluer?. I think we need to start from scratch can my website be in
        english?, yet make it sexy i'll pay you in a week we don't need to pay upfront i hope you
        understand can you make it stand out more?. Make the font bigger can you help me out? you
        will get a lot of free exposure doing this that's going to be a chunk of change other
        agencies charge much lesser. Are you busy this weekend? I have a new project with a tight
        deadline that's going to be a chunk of change. There are more projects lined up charge extra
        the next time.
      </p>
    </div>
  );
}
