interface Props {
  title: string;
  body: string;

}

const Hero = ({ title, body }: Props) => {
  return (
    <div>
      <h1>My name is {title}</h1>
      <h3>{body}</h3>
     
    </div>
  );
};

export default Hero;
