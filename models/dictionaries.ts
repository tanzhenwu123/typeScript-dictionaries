type callBack<K,V> = (key:K,val:V) => void

export class dictionaries<K,V>{
    private keys:K[] = [];
    private values:V[] = [];
    
    get size(){
        return this.keys.length;
    }

    // 设置某个键值对，如果没有，则新建键值对，如果有，则覆盖
    set(key:K,val:V){
        const ifKey = this.keys.indexOf(key);
        if(ifKey < 0){
            this.keys.push(key)
            this.values.push(val)
        }
        else this.values[ifKey] = val
        console.log(this.keys)
        console.log(this.values)
    }
    // 循环获取键值对
    forEach(callBack:callBack<K,V>){
        this.keys.forEach((item,index) =>{
            const v = this.values[index];
            callBack(item,v)
        })
    }
    // 判断某个键是否存在
    has(key:K){
        return this.keys.includes(key)
    }
    // 按照键，删除某个键值对
    del(key:K){
        const index = this.keys.indexOf(key)
        if(index < 0) return
        else{
            this.keys.splice(index,1)
            this.values.splice(index,1)
        }
    }
}