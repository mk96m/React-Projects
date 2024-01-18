

const useTraverseTree = () => {

  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }
    var latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    })
    return { ...tree, items: latestNode };
  }

  // const updateNode = (tree, folderId, item, isFolder) => { };
  // const deleteNode = (tree, folderId) => { };

  return { insertNode, updateNode, deleteNode };
};

export default useTraverseTree;
