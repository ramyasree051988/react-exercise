export const getMediaQuery = (original,checked,value)=>{
    const mediaArray = original && original.split(',');
    let result;
    if(checked){
        result = [...mediaArray,value].join(',');
    } else{
        const valueIndex = mediaArray.indexOf(value);
        mediaArray.splice(valueIndex,1);
        result = mediaArray.join(',');
    }
    return result;
  }