import BlockInfo from "../components/Blockinfo";


export default function BlockRender({block}) {
    return(
        <div>
      <BlockInfo block={block}></BlockInfo>
        </div>
    );
}