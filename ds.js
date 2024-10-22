let my;

// Open the IndexedDB database
const j4 = indexedDB.open("Manyaga", 2);

// Handle database upgrades (e.g., when the version changes)
j4.onupgradeneeded = e => {
    my = e.target.result; // Get the database instance
     my.createObjectStore("Personal_note_1", { keyPath: "name" });
    console.log("Object store 'Personal_note_1' created");
};

// Handle successful database opening
j4.onsuccess = e => {
    my = e.target.result; // Get the database instance
    console.log("Database opened successfully");
};

// Handle database opening errors
j4.onerror = e => {
    console.error("Error opening database:", e.target.error);
};
