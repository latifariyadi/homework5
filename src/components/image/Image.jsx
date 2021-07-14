import "./image.css";

const Image = (props) => {
  return (
    <div>
      <img src={props.img} alt="" />
      <p>{props.artist}</p>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Image;
