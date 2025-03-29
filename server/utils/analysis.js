const analysis = async (payload) => {

    console.log("This is payload from analysis", payload);
    let list = [];
    list.push({
        title: "hello", 
        link: "https://example.com/hello"
    });

    list.push({
        title: "hi", 
        link: "https://example.com/hi"
    });

    list.push({
        title: "bye", 
        link: "https://example.com/bye"
    });

    list.push({
        title: "goodbye", 
        link: "https://example.com/goodbye"
    });

    // Log the list to verify the structure
    console.log(list);

    // Return the list which will match the schema
    return list;
};

export default analysis;
