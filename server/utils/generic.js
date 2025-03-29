const generic = async() => {
    let list = [];
    list.push({
      title: "hello",
      link: "https://example.com/hello",
    });
  
    list.push({
      title: "hi",
      link: "https://example.com/hi",
    });
    console.log(list);
    return list;
}

export default generic;