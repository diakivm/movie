
export default class Loaders {

  static isUndefined(obj){
     if(obj === undefined){
        return true
     }else{
        return false
     }
  }

  static getString(obj, key, separator){
     if(this.isUndefined(obj)){
       return
      }else {
         return obj.map(el => el[key]).join(separator)
      }
}
}