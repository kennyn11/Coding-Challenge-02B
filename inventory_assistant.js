let itemName = "USB-C Cable"
let unitCost = 3.50
let currentStock = 150
let reorderLevel = 50
let targetStock = 200
let weeklyDemand = 300
let supplierLeadTimeWeeks = 1

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity
let stockDeficit = Math.max(0, targetStock - currentStock)
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0
let estimatedReorderCost = reorderQuantity * unitCost
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks

console.log("Item Name:", itemName)
console.log("Weeks of cover:", weeksOfCover)
console.log("When to reorder:", reorderLevel)
console.log("Recommended amount to reorder:", reorderQuantity)
console.log("Estimated Reorder Cost:", estimatedReorderCost)