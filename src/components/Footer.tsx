import Barre from '../sous-components/Barre';

function Footer() {
  return (
    <div className="pt-8 flex justify-end w-full gap-3 p-6">
    

      <Barre className="bg-[#FFA2738F]" />

    
      <Barre className="bg-[#FFA273]" />
      <Barre
        style={{
          background: "linear-gradient(to right, #FFA273, #00539C)",
        }}
      />
      
      
    <Barre className="bg-[#00539C]" />
    </div>
  );
}

export default Footer;


