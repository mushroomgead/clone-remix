import { preservWord, symbols, preservWord2 } from './constant';

const code = `export async function loader({ request }) {
    return getProjects();
  }
  
  export async function action({ request }) {
    const form = await request.formData();
    return createProject({ title: form.get("title") });
  }
  
  export default function Projects() {
    const projects = useLoaderData();
    const { state } = useTransition();
    const busy = state === "submitting";
  
    return (
      <div>
        {projects.map((project) => (
          <Link to={project.slug}>{project.title}</Link>
        ))}
  
        <Form method="post">
          <input name="title" />
          <button type="submit" disabled={busy}>
            {busy ? "Creating..." : "Create New Project"}
          </button>
        </Form>
      </div>
    );
  }`;

function getTextColor(word) {
  if (preservWord.includes(word)) {
    return 'text-rose-600';
  }
  if (symbols.includes(word)) {
    return 'text-white';
  }
  if (preservWord2.includes(word)) {
    return 'text-yellow-400';
  }
  // if (string.includes(word)) {
  //   return 'text-green-500'
  // }

  return 'text-blue-500';
}

export default function CodeExample() {
  const codes = code.split('\n');

  return (
    <div className='flex-1 bg-gradient-to-r from-indigo-500 via-urple-500 to-pink-500 rounded-l-lg'>
      <div className='m-8 bg-black text-white p-4 rounded-lg w-8/12'>
        <pre>
          <code>
            {codes.map((code, index) => {
              return (
                <span
                  className='block h-5'
                  data-line-number={index}
                  key={index}
                >
                  {code.split(' ').map((word, index) => {
                    if (index < 6) {
                      console.log(symbols.includes(word), word);
                    }
                    return (
                      <span
                        key={index + word}
                        className={`mr-2 ${getTextColor(word)}`}
                      >
                        {word}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
}
