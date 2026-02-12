let notes = JSON.parse(localStorage.getItem("gymNotes")) || [];

function saveNote(){
    const player = document.getElementById("player").value;
    const date = document.getElementById("date").value;
    const event = document.getElementById("event").value;
    const memo = document.getElementById("memo").value;
    const result = document.getElementById("result").value;

    if(date === "" || player === "" || event === "" || memo === "" || result === ""){
        alert("全部入力してね！");
        return;
    }

    const note = {
        date: date,
        player: player,
        event: event,
        memo: memo,
        result: result
    };

    notes.push(note);

    localStorage.setItem("gymNotes", JSON.stringify(notes));

    displayNotes();

    document.getElementById("player").value = "";
    document.getElementById("event").value = "";
    document.getElementById("memo").value = "";
    document.getElementById("result").value = "";
}

function displayNotes(){
    const area = document.getElementById("notes");
    area.innerHTML = "";

    notes.forEach(function(note, index){
        const div = document.createElement("div");
        div.className = "note";

        div.innerHTML = `
            <b>${note.date}</b><br>
            生徒：${note.player}<br>
            種目：${note.event}<br>
            評価：${note.result}<br>
            メモ：${note.memo}<br>
            <button onclick="deleteNote(${index})">削除</button>
        `;

        area.appendChild(div);
    });
}

function deleteNote(index){
    notes.splice(index,1);
    localStorage.setItem("gymNotes", JSON.stringify(notes));
    displayNotes();
}

function searchNotes(){
    const name = document.getElementById("searchPlayer").value;
    const area = document.getElementById("notes");
    area.innerHTML = "";

    const filtered = notes.filter(note => note.player.includes(name));

    filtered.forEach(function(note){
        const div = document.createElement("div");
        div.className = "note";

        div.innerHTML = `
            <b>${note.date}</b><br>
            生徒：${note.player}<br>
            種目：${note.event}<br>
            評価：${note.result}<br>
            メモ：${note.memo}<br>
        `;

        area.appendChild(div);
    });
}

displayNotes();
