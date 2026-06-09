function refreshList(roomList) {
    const listContainer = document.getElementById("list");
    if (!listContainer) {
        return;
    }
    const list = listContainer.querySelector("ul");
    if (!list) {
        return;
    }
    const children = [];
    for (let i = 0; i < roomList.length; i++) {
        const room = roomList[i];
        const child = document.createElement("li");
        const button = document.createElement("button");
        const span = document.createElement("span");
        child.className = "room-item";
        button.className = "button-item";
        button.addEventListener("click", () => {
            location.replace("./room.html?room-id=" + room);
        });
        span.className = "text";
        span.innerHTML = "房间ID：" + room;
        button.appendChild(span);
        child.appendChild(button);
        children.push(child);
    }
    list.replaceChildren(...children);
}

document.addEventListener("DOMContentLoaded", function () {
    refreshList(["test1", "test2", "test3", "czxroom", "czxroom1", "czxroom2", "czxroom3", "czxroom4", "czxroom5", "123room"]);
    //TODO: 连接后端
});
