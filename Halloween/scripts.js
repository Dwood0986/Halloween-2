let inventory = [];

// Function to navigate to different rooms
function goToScene(sceneId) {
    const scenes = document.querySelectorAll('.scene');
    scenes.forEach(scene => {
        scene.classList.remove('active');
        scene.classList.add('hidden');
    });

    const currentScene = document.getElementById(sceneId);
    currentScene.classList.remove('hidden');
    currentScene.classList.add('active');
}

// Function to enter the house
function enterHouse() {
    goToScene('room1');
    playBackgroundMusic();
}

// Function to discover secret passages
function discoverSecret(secretRoomId) {
    alert("You've discovered a secret passage!");
    goToScene(secretRoomId);
    playSound('secret-sound');
}

// Function to find items and add to inventory
function findItem(itemName) {
    if (!inventory.includes(itemName)) {
        inventory.push(itemName);
        updateInventory();
        alert(`You've found a ${itemName}!`);
    } else {
        alert(`You already have a ${itemName}.`);
    }
}

// Function to use items
function useItem(itemName, targetRoomId) {
    if (inventory.includes(itemName)) {
        alert(`You've used the ${itemName}!`);
        goToScene(targetRoomId);
    } else {
        alert(`You don't have the ${itemName}.`);
    }
}

// Function to update the inventory list in the UI
function updateInventory() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = '';
    inventory.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        inventoryList.appendChild(listItem);
    });
}

// Play a specific sound effect
function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play();
}

// Play background music
function playBackgroundMusic() {
    const music = document.getElementById('background-music');
    music.volume = 0.5;
    music.play();
}
