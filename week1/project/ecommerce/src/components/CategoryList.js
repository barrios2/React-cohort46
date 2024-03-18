import { categories } from "../fake-data/all-categories";
import Category from "./Category";

export default function CategoryList({ setActiveCategory }) {
  const listItems = categories.map((category, i) =>
    <Category setActiveCategory={setActiveCategory} category={category} key={category + i}/> 
  );
  return <ul>{listItems}</ul>;
}
