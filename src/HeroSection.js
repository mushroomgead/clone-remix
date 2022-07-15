import CodeExample from './CodeExample';

export default function HeroSection() {
  return (
    <div className='flex justify-between pl-28'>
      <div className='flex-1'>
        <div className='text-7xl text-white font-bold'>
          Focused on <span className='text-sky-400'>web standards</span> and
          <span className='text-emerald-400'> modern web app</span> UX, you’re
          simply going to
          <span className='text-amber-400'> build better websites</span>
        </div>
        <div className='text-neutral-400 text-2xl py-6 w-4/5'>
          Remix is a full stack web framework that lets you focus on the user
          interface and work back through web standards to deliver a fast,
          slick, and resilient user experience. People are gonna love using your
          stuff.
        </div>
        <div className='text-white text-2xl'>
          <button className='bg-transparent border border-white mr-6 w-52 h-16 rounded-sm'>
            Read the Docs
          </button>
          <button className='bg-blue-500 w-52 h-16 rounded-sm'>
            Get Started
          </button>
        </div>
      </div>
      <CodeExample></CodeExample>
    </div>
  );
}
