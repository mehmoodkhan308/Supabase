const { createClient } = supabase

// Create a single supabase client for interacting with your database
const PROJECT_URL = 'https://pwmrwkxqcqpbtogolgrd.supabase.co'
const PUBLISH_URL = 'sb_publishable_nsmPKf6FK6Gm8oU3aCHBqA_n8r45Sgs'

const supabaseClient = createClient(PROJECT_URL, PUBLISH_URL)
console.log(supabaseClient);
let inputNotes = document.getElementById('inputNotes')
let notes = document.querySelector('.notes')






const addNotes = async () => {
    if (!inputNotes.value) {
        alert("required todoNotes")
        return
    }
    const todoObj = {
        title: inputNotes.value,
        completed: false
    }
    const {data ,error } = await supabaseClient
        .from('todos')
        .insert(todoObj)
        .select()
        inputNotes.value = ''
        getNotes()

}

const getNotes = async ()=>{
const { data, error } = await supabaseClient
  .from('todos')
  .select();

notes.innerHTML = ' '
data.forEach((element) => {
      notes.innerHTML +=
      `<div class="bg-slate-700 p-4 rounded-xl flex justify-between items-center"> 
        <div>
          <h2 class="text-black font-semibold">
            ${element.title}
          </h2>
         </div>

        <div class="flex gap-2">
          <button   class="bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded-lg text-white transition">
            ✏
          </button>

          <button  class="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg text-white transition">
            🗑
          </button>
        </div>`
});


}



const deleAll = async ()=>{
const response = await supabaseClient
  .from('todos')
  .delete()
  .neq('id', 0)

    
  getNotes()
}

getNotes()
// window.deleAll = deleAll
// window.addNotes = addNotes 

// onclick='update(${element.id})'
// onclick=del(${element.id})