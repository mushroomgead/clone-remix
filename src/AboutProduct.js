export default function AboutProduct() {
  return (
    <div className="flex w-2/4 m-auto">
      <div className="text-7xl text-white">
        While you were <span className="text-red-400">waiting !!</span> for your
        static site to build,
        <span className="text-blue-400">distributed web</span> infra­structure
        got really good.
        <span className="text-fuchsia-400">Break through the static.</span>
        <div className="text-neutral-400 text-2xl py-6 w-4/5">
          Remix is a seamless server and browser runtime that provides snappy
          page loads and instant transitions by leveraging distributed systems
          and native browser features instead of clunky static builds. Built on
          the Web Fetch API (instead of Node)
          <span className="font-bold"> it can run anywhere</span>. It already
          runs natively on Cloudflare Workers, and of course supports serverless
          and traditional Node.js environments, so you can come as you are.
        </div>
        <div className="text-neutral-400 text-2xl py-6 w-4/5 mt-2">
          Page speed is only one aspect of our true goal though. We're after
          <span className="font-bold"> better user experiences</span>. As you’ve
          pushed the boundaries of the web, your tools haven’t caught up to your
          appetite. <span className="font-bold">Remix is ready</span> to serve
          you from the initial request to the fanciest UX your designers can
          think up. Check it out 👀 x
        </div>
      </div>
    </div>
  );
}
