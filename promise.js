function fetch() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("manoj")
        },2000)
    });
}
  async function get(){
    console.log("kishore...");
    let a = await fetch();
    console.log(a)
  }
  get()
