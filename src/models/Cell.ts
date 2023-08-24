export default interface Cell {
  type: string | null;
  icon: string | null;
  level: number;
  isEmpty: boolean;
}

//if !canBeUpgraded {
// disableUpgradeButton
// }
//if !canBeDowngraded {
// disableDowngradeButton
// }
//if !removed {
// disableDowngradeButton
// }
// remove feature =>

// all cells begin isEmpty = true
// when addImprovement => add button is clicked turn isEmpty to false,
// type to selected type, and icon to image path of selected type
// turn canBeUpgraded to true

// when cell is upgraded => turn canBeDowngraded to true
