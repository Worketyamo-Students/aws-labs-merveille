import { useNavigate } from 'react-router-dom';

interface BarreProps {
  className?:string;
  style?: React.CSSProperties;
  destination?: string;
  active?: boolean;
  activeColor?: string; // couleur si active
}

function Barre({ className = '', style = {}, destination, active = false, activeColor }: BarreProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => destination && navigate(destination)}
      className={`w-full h-2  rounded cursor-pointer transition-colors duration-300`}
      style={{
        background: active
          ? activeColor || style.background || undefined
          : '#d1d5db', 
        ...(!active ? {} : style),
      }}
    />
  );
}

export default Barre;
