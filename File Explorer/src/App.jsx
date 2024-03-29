
import { useState } from 'react';
import './App.css';
import explorer from './data/folderData';
import Folder from './components/Folder';
import useTraverseTree from './hooks/use-traverse-tree';

function App() {

  const [exploreData, setExploreData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(exploreData, folderId, item, isFolder)
    setExploreData(finalTree);
  }


  return (
    <>
      <Folder handleInsertNode={handleInsertNode} explorer={exploreData} />
    </>
  )
}




export default App;
