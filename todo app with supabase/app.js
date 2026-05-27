const {createClient} = supabase

// Create a single supabase client for interacting with your database
const PROJECT_URL = "https://mekiolefwomxdxyonidi.supabase.co"
const PUBLISH_KEY = "sb_publishable_EGNAzg7l50z8WRnZENWFGQ_udwfj2aa"
const supabaseClient = createClient(PROJECT_URL, PUBLISH_KEY)
const input = document.getElementById("input")

const addTodo = async ()=>{
  if(!input.value){
    alert("required input are not filled")
    return
  }
  const todoObj ={
    task : input.value,
    isCompleted : false,
  }

  const { data, error } = await supabaseClient
  .from('todos')
   .insert(todoObj)

//    .select()
console.log(data);




  
}
window.addTodo = addTodo