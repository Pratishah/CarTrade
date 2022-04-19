class ItemType {
  id: string;
  description: String;
  imageLink: string;
  Title: string;
  color: string;

  constructor(
    description: string,
    imageLink: string,
    Title: string,
    color: string
  ) {
    this.Title = Title;
    this.id = Math.floor(Math.random() * 100).toLocaleString() + this.Title;
    this.description = description;
    this.imageLink = imageLink;
    this.color = color;
  }
}
export default ItemType;
