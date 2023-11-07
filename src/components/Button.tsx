type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>View Users</button>;
};

export default Button;
