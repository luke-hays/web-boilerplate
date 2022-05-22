import '../../index.css';

const Home = (): JSX.Element => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-4">
        <h1 className="text-7xl">React Boilerplate</h1>
        <p className="mt-4">
          This boilerplate features the following packages and tools:
        </p>
        <ul className="list-disc list-inside m-2 mt-2">
          <li>Typescript</li>
          <li>React</li>
          <li>React Router 6</li>
          <li>GraphQL</li>
          <li>Apollo Client</li>
          <li>Tailwind</li>
          <li>Eslint</li>
          <li>Prettier</li>
          <li>Jest</li>
          <li>Playwright</li>
          <li>Bundled using Webpack 5</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
