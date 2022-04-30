let getData = async (url) => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  let append = (data, container) => {
    container.innerHTML = null;
    data.forEach((e) => {
      let img = document.createElement("img");
      img.src = e.urls.small;
      container.append(img);
    });
  };
  export { getData, append };