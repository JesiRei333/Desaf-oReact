import Image from "next/image";
export default function postMid(props) {
  return (
    <div>
      <div>
        <div>
          <Image src={""} alt={""} width={20} height={20} />
        </div>
        <div>
          <p>Nombre</p>
          <p>fecha</p>
        </div>
      </div>
      <div>
        <p>titulo</p>
      </div>
      <div> # </div>
      <div>
        <div>emoticonos</div>
        <div>reactions</div>
        <div>comments</div>
        <div>ultima hora</div>
      </div>
    </div>
  );
}
