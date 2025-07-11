// We are working on a security system for a badged-access room in our company's building.

// Given an ordered list of employees who used their badge to enter or exit the room, write a function that returns two collections:

// 1. All employees who didn't use their badge while exiting the room - they recorded an enter without a matching exit. (All employees are required to leave the room before the log ends.)
// 2. All employees who didn't use their badge while entering the room - they recorded an exit without a matching enter. (The room is empty when the log begins.)

// Each collection should contain no duplicates, regardless of how many times a given employee matches the criteria for belonging to it.

// ["Steve", "Curtis", "Paul", "Joe"], ["Martha", "Pauline", "Curtis", "Joe"]\


// Expected output: ["Paul"], ["Paul"]

// records4 = [
// ["Raj", "enter"],
// ["Paul", "enter"],
// ["Paul", "exit"],
// --- > Paul entered
// ["Paul", "exit"],
// ["Paul", "enter"],
// ["Raj", "enter"],
// ]

// Expected output: ["Raj", "Paul"], ["Paul"]

// All Test Cases:
// mismatches(records1) => ["Steve", "Curtis", "Paul", "Joe"], ["Martha", "Pauline", "Curtis", "Joe"]
// mismatches(records2) => [], []
// mismatches(records3) => ["Paul"], ["Paul"]
// mismatches(records4) => ["Raj", "Paul"], ["Paul"]

// n: length of the badge records array


function securityBadge(){
    
}