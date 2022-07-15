export default function Header() {
  return (
    <div className='flex justify-between px-14 text-white font-bold p-8'>
      <div className='text-3xl'>Remix</div>
      <nav className='text-neutral-400 text-lg'>
        <a className='px-4' href='https://remix.run/blog'>
          Blog
        </a>
        <a className='px-4' href='https://remix.run/docs/en/v1'>
          Docs
        </a>
        <a className='px-4' href='https://github.com/remix-run'>
          Github
        </a>
        <a className='px-4' href='https://remix.run/conf/2023'>
          Remix Conf
        </a>
      </nav>
    </div>
  );
}
