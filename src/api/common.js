//防抖函数（单位时间后再执行某项操作）
export function debounce(func, delay){
    let timer = null;

    return function(...args){
        if(timer) clearTimeout(timer)

        timer = setTimeout(() => {
        func.apply(this,args);
        }, delay);
    }
}