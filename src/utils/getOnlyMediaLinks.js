export const getOnlyMediaLinks = (data)=>{
    const allLinkData = data.map((link)=>link.data);
    return allLinkData.reduce((prevLinks, currLinks) => [...prevLinks,...currLinks]);
  }