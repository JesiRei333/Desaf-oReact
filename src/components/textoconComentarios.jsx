export default function TextoConHiper(props) {
  return (
    <div className="  min-w-[208px] min-h-[23.983px] rounded-md ">
      <a
        className="flex align-middle items-center justify-between text-justify text-lg hover:text-[rgb(47_58_178)] min-w-[208px] min-h-[23.983px] "
        href={props.link}
      >
        <p id="parrafoAsideI" className="">
          {props.contenido}
        </p>
      </a>
      <div className="text-sm"> {props.numRam} comments</div>
      <br />
    </div>
  );
}
