function TestimonialHightlightItem() {
  return (
    <div className='flex justify-center flex-col items-center w-1/3'>
      <img
        src='https://remix.run/img/jenna.jpg'
        className='w-12 h-12 rounded-full'
      ></img>
      <span>Jenna Smith</span>
      <span>RADIX UI</span>
      <span>
        I've been waiting for something to encourage progressive enhancement in
        the React space *forever* and Remix truly is so much more. Proving we
        don't need to sacrifice React or choose SSG for a lightning fast,
        accessible UI, and the DX makes it all too easy 🤤
      </span>
    </div>
  );
}

function TestimonialItem() {
  return (
    <div className='bg-slate-800 rounded m-2 p-4 w-96 min-w-1/5'>
      {/* <div className='flex justify-center flex-col items-center bg-slate-800 rounded m-2 p-4 w-96'> */}
      <img
        src='https://remix.run/img/jenna.jpg'
        className='w-12 h-12 rounded-full'
      ></img>
      <span>Jenna Smith</span>
      <span>RADIX UI</span>
      <span>
        I've been waiting for something to encourage progressive enhancement in
        the React space *forever* and Remix truly is so much more. Proving we
        don't need to sacrifice React or choose SSG for a lightning fast,
        accessible UI, and the DX makes it all too easy 🤤
      </span>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <div className='flex flex-col justify-between items-center px-14 text-white font-bold p-8'>
      <TestimonialHightlightItem />
      <div className='flex w-full h-full relative overflow-x-scroll overflow-y-hidden'>
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
      </div>
    </div>
  );
}
