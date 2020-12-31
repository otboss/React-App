/**
 * Structures information for a hardware item
 * */
export class HardwareItem {
  public id: string = "";
  public category: string = ItemCategory[ItemCategory.Tools];
  public rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 = 3;
  public label: string = "";
  public image: string = "";
  constructor(
    category?: ItemCategory
  ) {
    if (category != null) {
      this.category = ItemCategory[category];
    }
  }
}

export enum ItemCategory {
  "Tools",
  "Plumbing",
  "Sheets and Rods",
  "Painting",
  "Fire Safety",
  "Door",
  "Mailboxes and Post",
  "Screws and Anchors",
  "Signs",
  "Angles, Braces and Brackets",
}