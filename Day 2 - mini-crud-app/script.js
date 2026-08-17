const SUPABASE_URL = 'https://brxmhlkdohphskgvacix.supabase.co/rest/v1/';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyeG1obGtkb2hwaHNrZ3ZhY2l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NzEwMzAsImV4cCI6MjEwMjU0NzAzMH0.oRNktFkVLN6Qlc3X0icmeg4w-sgfhXnhJK-yfMpHncE';

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const noteInput = document.getElementById('note-input');
const saveBtn = document.getElementById('save-btn');


async function createNote() {
    const text = noteInput.value.trim();

    if (text === '') {
        alert('Please enter a note!');
        return;
    }

    const { error } = await _supabase
        .from('notes');
        .insert([{content: text}]);

    if (error) {
        console.error('Error Inserting note:', error.message);
        alert('Could note save note.');    
    } else {
        alert('Note saved to database!');
        noteInput.value = '';
    }
}

saveBtn.addEventListener('click', createNote);