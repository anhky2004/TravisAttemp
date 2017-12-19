/**
 * Created by hoangdv on 0028, Jun, 28, 2017.
 */
let ListData = [
    {id: 1, name: 'Tree01', status: 'available'},
    {id: 2, name: 'Tree02', status: 'available'},
    {id: 3, name: 'Tree03', status: 'available'},
    {id: 4, name: 'Tree04', status: 'available'},
    {id: 5, name: 'Tree05', status: 'available'},
    {id: 6, name: 'Tree06', status: 'available'},
    {id: 7, name: 'Tree07', status: 'available'},
    {id: 8, name: 'Tree08', status: 'available'},
    {id: 9, name: 'Tree09', status: 'available'}
];
module.exports.find = (callback) => {
    callback(null, ListData);
};
module.exports.findById = (id, callback) => {
    callback(null, ListData.find(item => item.id == id)); // typeof id === "string"
};
module.exports.save = (tree, callback) => {
    let {name, status} = tree;
    if (!name || !status) {
        callback({message: "tree is invalid!"});
        return;
    }
    tree = {
        id: Date.now(),
        name,
        status
    };
    ListData.push(tree);
    callback(null, tree);
};
module.exports.delete = (id, callback) => {
    let roweffected = ListData.length;
    ListData = ListData.filter(item => item.id != id);
    roweffected = roweffected - ListData.length;
    callback(null, {roweffected})
};
module.exports.update = (id, tree, callback) => {
    let oldtree = ListData.find(item => item.id == id);
    if (!oldtree) {
        callback("tree not found!");
        return;
    }
    let index = ListData.indexOf(oldtree);
    Object.assign(oldtree, tree);
    ListData.fill(oldtree, index, ++index);
    callback(null, oldtree);
};
