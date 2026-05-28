const { createClient } = supabase
// Create a single supabase client for interacting with your database
const PROJECT_URL = "https://mekiolefwomxdxyonidi.supabase.co"
const PUBLISH_KEY = "sb_publishable_EGNAzg7l50z8WRnZENWFGQ_udwfj2aa"
const supabaseClient = createClient(PROJECT_URL, PUBLISH_KEY)
const input = document.getElementById("input")
const task_parent = document.querySelector(".task_parent")

const getTodo = async () => {
  if (!input.value) {
    alert("required input are not filled")
    return
  }
  const todoObj = {
    task: input.value,
    isCompleted: false,
  }

  const { error } = await supabaseClient
    .from('todos')
    .insert(todoObj)
    .select()

  input.value = ''
  addtodo()
}

const addtodo = async () => {
  const { data, error } = await supabaseClient
    .from('todos')
    .select()


  task_parent.innerHTML = '';
  data.forEach((element) => {
    task_parent.innerHTML += `
            <div class="bg-slate-700 p-4 rounded-xl flex justify-between items-center"> 
        <div>
          <h2 class="text-white font-semibold">
            ${element.task}
          </h2>
         </div>

        <div class="flex gap-2">
          <button  onclick='update(${element.id})' class="bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded-lg text-white transition">
            ✏
          </button>

          <button onclick=del(${element.id}) class="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg text-white transition">
            🗑
          </button>
        </div> 
      `
  })


}


const del = async (id) => {
  const response = await supabaseClient
    .from('todos')
    .delete()
    .eq('id', id)

  addtodo()
}

const update = async (id) => {
  const updatedValue = prompt("enter update task")
  if (!updatedValue) return;
  const { error } = await supabaseClient
    .from('todos')
    .update({ task: updatedValue })
    .eq('id', id)

  addtodo()
}


const delAll = async () => {
  const response = await supabaseClient
    .from('todos')
    .delete()
    .neq('id', 0)

  addtodo()
}
window.delAll = delAll
window.update = update
window.del = del
window.getTodo = getTodo

addtodo()