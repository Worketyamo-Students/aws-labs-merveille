interface Props {
  className?: string;
  style?: React.CSSProperties;
}

const Barre = ({ className = "", style }: Props) => {
  return (
    <div
      className={`w-11/12 h-[7px] rounded-[20px] ${className}`}
      style={style}
    />
  );
};

export default Barre;
