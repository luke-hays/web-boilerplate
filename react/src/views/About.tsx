import useAbout from 'hooks/useAbout';

const About = (): JSX.Element => {
  const { loading, error, data } = useAbout();

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return <div>About: {data.about} </div>;
};

export default About;
