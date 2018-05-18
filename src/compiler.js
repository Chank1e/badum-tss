const _TOKENS_ = require('./constants/token_types');
const fs = require('fs');
function compile(tree, save_dir) {
    let need_to_save = false;
    if (save_dir && typeof save_dir === 'string')
        need_to_save = true;
    let res = '';
    tree.forEach(action=>{
        if(action.type===_TOKENS_.IMPORT_MODULE){
            res+=action.payload.value;
        } else if(action.type===_TOKENS_.DEFINE_VARIABLE){
            res+=`let ${action.payload.name} = ${action.payload.value}`;
        } else if(action.type===_TOKENS_.CALL_FUNCTION){
            res+=`${action.payload.name}(${action.payload.value.join(',')})`
        }
        res+=';\n';
    });
    if(need_to_save){
        fs.writeFile(save_dir,res,(err)=>{
            if(err)
                throw err;
            console.log('compiled to '+save_dir);
        })
    }
    return res;
}
module.exports = compile;