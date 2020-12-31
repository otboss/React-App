/**
 * Structures information for a hardware item
 * */
export class HardwareItem {
  public category: string;
  public rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 = 3;
  constructor(
    public label: string,
    public image: string,
    category: ItemCategory,
  ) {
    this.category = ItemCategory[category];
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