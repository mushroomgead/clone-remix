export default function MiniDashboard({ state }) {
  return (
    <div
      className="w-full bg-purple-400 sticky bottom-0"
      style={{ height: 500 }}
    >
      <div className="text-white p-6">
        <span className={`${state === "domain" && "text-blue-400"}`}>
          example.com
        </span>
        /
        <span className={`${state === "subdomain" && "text-green-400"}`}>
          salesxx
        </span>
        /
        <span className={`${state === "module" && "text-yellow-400"}`}>
          invoicesee
        </span>
        /<span className={`${state === "id" && "text-red-400"}`}>102000xx</span>
      </div>
      <div className={`${state === "domain" && "w-12 h-12 bg-blue-500"}`}></div>
      <div
        className={`${state === "subdomain" && "w-12 h-12 bg-green-500"}`}
      ></div>
      <div
        className={`${state === "module" && "w-12 h-12 bg-yellow-500"}`}
      ></div>
      <div className={`${state === "id" && "w-12 h-12 bg-red-500"}`}></div>
    </div>
  );
}
